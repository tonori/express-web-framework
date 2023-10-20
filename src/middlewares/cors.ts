import cors from 'cors';
import { Express } from 'express';

export default function initCORS(app: Express) {
  return app.use(
    cors({
      origin: '*',
    })
  );
}
