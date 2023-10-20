import express, { Express } from 'express';

export default function bodyParse(app: Express) {
  app.use(express.urlencoded());
  app.use(express.json());

  return app;
}
