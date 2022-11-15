import dotenv from 'dotenv';
dotenv.config()

export const host = process.env.HOST || "http://localhost"
export const port = process.env.PORT || 8000
export const environment = process.env.NODE_ENV || 'development'

export const db_host = process.env.DB_HOST
export const db_port = process.env.DB_PORT
export const db_name = process.env.DB_NAME
export const db_user = process.env.DB_USER
export const db_password = process.env.DB_PASSWORD

export const dbUrl = process.env.DB_URL
export const adminPhoneNumber = process.env.ADMIN_PHONENUMBER

export const frontendUrl = process.env.FRONTEND_URL
export const frontendDomain = process.env.FRONTEND_DOMAIN || "localhost"
export const corsDomains = process.env.CORS_DOMAINS ? process.env.CORS_DOMAINS.split(',') : [frontendUrl]
