declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT:string;
      SMS_URL: string;
      SMS_SENDER_NAME: string;
      SMS_USERNAME: string;
      SMS_PASSWORD: string;
      DB_PORT: string;
      DB_HOST:string;
      DB_USER: string;
      DB_PASS: string;
      DB_NAME: string;
      JWT_SECRET:string;
      IMAGE_LOCATION:string;
      DOC_LOCATION:string;
    }
  }
}
export {};
