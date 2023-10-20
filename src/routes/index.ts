import express, { type Express } from 'express';
import readDir from '@/utils/readDir';

const DEFAULT_PREFIX = '/';

const routes = (app: Express) => {
  const router = express.Router();

  app.use(DEFAULT_PREFIX, router);

  const dir = readDir(__dirname, './');
  dir.forEach(async file => {
    if (file !== __filename) {
      const _file = await import(file);
      _file.default(router);
    }
  });
};

export default routes;
