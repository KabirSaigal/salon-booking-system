const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
  'VITE_FIREBASE_MEASUREMENT_ID',
  'VITE_RECAPTCHA_SITE_KEY',
  'VITE_STRIPE_PUBLISHABLE_KEY'
];

const envVarPatterns = {
  'VITE_FIREBASE_API_KEY': /^AIza[0-9A-Za-z-_]{35}$/,
  'VITE_FIREBASE_AUTH_DOMAIN': /^[a-zA-Z0-9-]+\.firebaseapp\.com$/,
  'VITE_FIREBASE_PROJECT_ID': /^[a-zA-Z0-9-]+$/,
  'VITE_FIREBASE_STORAGE_BUCKET': /^[a-zA-Z0-9-]+\.appspot\.com$/,
  'VITE_FIREBASE_MESSAGING_SENDER_ID': /^[0-9]{12}$/,
  'VITE_FIREBASE_APP_ID': /^1:[0-9]+:[a-zA-Z0-9-]+$/,
  'VITE_FIREBASE_MEASUREMENT_ID': /^G-[A-Z0-9]{10}$/,
  'VITE_RECAPTCHA_SITE_KEY': /^6L[0-9A-Za-z-_]{38}$/,
  'VITE_STRIPE_PUBLISHABLE_KEY': /^pk_(test|live)_[0-9A-Za-z]{24}$/
};

export function validateEnv() {
  // Check for missing variables
  const missingVars = requiredEnvVars.filter(
    (envVar) => !import.meta.env[envVar]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }

  // Validate each environment variable against its pattern
  for (const [envVar, pattern] of Object.entries(envVarPatterns)) {
    const value = import.meta.env[envVar];
    if (!pattern.test(value)) {
      throw new Error(`Invalid format for ${envVar}`);
    }
  }

  // Additional security checks
  if (import.meta.env.DEV) {
    console.warn('Running in development mode. Some security features may be disabled.');
  }

  // Check for common security issues
  const sensitivePatterns = [
    /password/i,
    /secret/i,
    /key/i,
    /token/i,
    /credential/i
  ];

  for (const [key, value] of Object.entries(import.meta.env)) {
    if (sensitivePatterns.some(pattern => pattern.test(key))) {
      if (value.includes('test') || value.includes('example')) {
        console.warn(`Warning: ${key} appears to contain a test/example value`);
      }
    }
  }
} 