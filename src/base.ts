import dotenv from 'dotenv';
dotenv.config()
import twilio from "twilio";

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

export const cloud_name = process.env.CLOUD_NAME
export const cloud_api_key = process.env.CLOUDINARY_API_KEY
export const cloud_secret_key = process.env.CLOUDINARY_SECRET_KEY
export const twilioSid = process.env.TWILIO_SID
export const twilioKey = process.env.TWILIO_KEY
export const twilioPhoneNumber = '+18775613311'
export const secret_cipher_key = process.env.SECRET_CIPHER_KEY
export const twilioServiceId = process.env.TWILIO_SERVICE_ID
export const twilioNotifyServiceId = process.env.TWILIO_NOTIFY_SERVICE_ID as string

export const twilioClient = twilio(twilioSid, twilioKey);
export const twilioNotifyService = twilioClient.notify.services(twilioNotifyServiceId);

export const frontendUrl = process.env.FRONTEND_URL
export const frontendDomain = process.env.FRONTEND_DOMAIN || "localhost"
export const corsDomains = process.env.CORS_DOMAINS ? process.env.CORS_DOMAINS.split(',') : [frontendUrl]
