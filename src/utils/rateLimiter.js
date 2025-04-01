class RateLimiter {
  constructor(maxAttempts = 5, windowMs = 15 * 60 * 1000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.attempts = new Map();
  }

  isBlocked(email) {
    const now = Date.now();
    const userAttempts = this.attempts.get(email) || { count: 0, timestamp: now };

    // Reset if window has passed
    if (now - userAttempts.timestamp > this.windowMs) {
      userAttempts.count = 0;
      userAttempts.timestamp = now;
    }

    // Increment attempts
    userAttempts.count++;
    this.attempts.set(email, userAttempts);

    // Check if blocked
    if (userAttempts.count >= this.maxAttempts) {
      const timeLeft = Math.ceil((this.windowMs - (now - userAttempts.timestamp)) / 1000);
      return {
        blocked: true,
        timeLeft
      };
    }

    return { blocked: false };
  }

  reset(email) {
    this.attempts.delete(email);
  }
}

export const loginRateLimiter = new RateLimiter(); 