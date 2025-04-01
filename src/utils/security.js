// Rate Limiting
class RateLimiter {
  constructor(maxAttempts, lockoutDuration) {
    this.maxAttempts = maxAttempts;
    this.lockoutDuration = lockoutDuration;
    this.attempts = new Map();
  }

  isBlocked(identifier) {
    const userAttempts = this.attempts.get(identifier);
    if (!userAttempts) return false;

    if (userAttempts.count >= this.maxAttempts) {
      const timeSinceLastAttempt = Date.now() - userAttempts.lastAttempt;
      if (timeSinceLastAttempt < this.lockoutDuration) {
        return true;
      }
      // Reset if lockout duration has passed
      this.attempts.delete(identifier);
    }
    return false;
  }

  recordAttempt(identifier) {
    const userAttempts = this.attempts.get(identifier) || { count: 0, lastAttempt: 0 };
    userAttempts.count++;
    userAttempts.lastAttempt = Date.now();
    this.attempts.set(identifier, userAttempts);
  }

  resetAttempts(identifier) {
    this.attempts.delete(identifier);
  }
}

// Input Validation
const validators = {
  service: {
    name: (value) => {
      if (!value || typeof value !== 'string') return false;
      return value.length >= 3 && value.length <= 100;
    },
    category: (value) => {
      const validCategories = ['Hair', 'Skin', 'Nails', 'Wellness'];
      return validCategories.includes(value);
    },
    price: (value) => {
      const num = parseFloat(value);
      return !isNaN(num) && num >= 0 && num <= 1000;
    },
    duration: (value) => {
      if (!value || typeof value !== 'string') return false;
      return value.length >= 3 && value.length <= 50;
    },
    description: (value) => {
      if (!value || typeof value !== 'string') return false;
      return value.length >= 10 && value.length <= 500;
    }
  },
  image: {
    validateFile: (file) => {
      if (!file) return false;
      const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      return validTypes.includes(file.type) && file.size <= maxSize;
    }
  }
};

// CSRF Protection
class CSRFProtection {
  static generateToken() {
    return crypto.randomUUID();
  }

  static validateToken(token, storedToken) {
    return token === storedToken;
  }
}

// Session Management
class SessionManager {
  constructor(sessionDuration = 30 * 60 * 1000) { // 30 minutes default
    this.sessionDuration = sessionDuration;
    this.sessions = new Map();
  }

  createSession(userId) {
    const session = {
      userId,
      createdAt: Date.now(),
      lastActivity: Date.now()
    };
    this.sessions.set(userId, session);
    return session;
  }

  validateSession(userId) {
    const session = this.sessions.get(userId);
    if (!session) return false;

    const timeSinceLastActivity = Date.now() - session.lastActivity;
    if (timeSinceLastActivity > this.sessionDuration) {
      this.sessions.delete(userId);
      return false;
    }

    session.lastActivity = Date.now();
    return true;
  }

  endSession(userId) {
    this.sessions.delete(userId);
  }
}

// Error Handling
class AppError extends Error {
  constructor(message, code, status = 400) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.status = status;
  }
}

// Export all security utilities
export {
  RateLimiter,
  validators,
  CSRFProtection,
  SessionManager,
  AppError
}; 