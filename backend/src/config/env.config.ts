import { getEnv } from "../utils/get-env";

export const Env = {
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: parseInt(getEnv("PORT", "8000")),
  MONGO_URI: getEnv("MONGO_URI", ""),
  JWT_SECRET: getEnv("JWT_SECRET", "MY_SUPER_SECRET_KEY"),
  JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "7d"),
  FRONTEND_URL: getEnv("FRONTEND_URL", "http://localhost:3000"),
} as const;
