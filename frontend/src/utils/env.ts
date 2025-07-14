/**
 * Environment variable utility to safely access environment variables
 * with proper typing and fallback values
 */

/**
 * Get an environment variable with type safety
 * @param key - The environment variable key (without VITE_ prefix)
 * @param fallback - Optional fallback value if the variable is not defined
 * @returns The environment variable value or fallback
 */
export const getEnv = (key: string, fallback: string = ''): string => {
  const fullKey = `VITE_${key}`;
  return import.meta.env[fullKey] || fallback;
};

/**
 * Get a boolean environment variable
 * @param key - The environment variable key (without VITE_ prefix)
 * @param fallback - Optional fallback value if the variable is not defined
 * @returns The environment variable as a boolean
 */
export const getBoolEnv = (key: string, fallback: boolean = false): boolean => {
  const value = getEnv(key, String(fallback));
  return value.toLowerCase() === 'true';
};

/**
 * Get a numeric environment variable
 * @param key - The environment variable key (without VITE_ prefix)
 * @param fallback - Optional fallback value if the variable is not defined
 * @returns The environment variable as a number
 */
export const getNumEnv = (key: string, fallback: number = 0): number => {
  const value = getEnv(key, String(fallback));
  return Number(value);
};

/**
 * Common environment variables used throughout the application
 */
export const env = {
  // API
  apiBaseUrl: getEnv('API_BASE_URL', 'http://localhost:8080/api'),
  
  // Auth
  authEnabled: getBoolEnv('AUTH_ENABLED', true),
  authTokenKey: getEnv('AUTH_TOKEN_KEY', 'auth_token'),
  authRefreshKey: getEnv('AUTH_REFRESH_KEY', 'refresh_token'),
  
  // App Settings
  appName: getEnv('APP_NAME', 'VOZ Forum'),
  appVersion: getEnv('APP_VERSION', '1.0.0'),
  appEnvironment: getEnv('APP_ENVIRONMENT', 'development'),
  isDevelopment: getEnv('APP_ENVIRONMENT', 'development') === 'development',
  isProduction: getEnv('APP_ENVIRONMENT', 'development') === 'production',
  
  // Feature Flags
  features: {
    darkMode: getBoolEnv('FEATURE_DARK_MODE', true),
    notifications: getBoolEnv('FEATURE_NOTIFICATIONS', true),
  }
};

export default env; 