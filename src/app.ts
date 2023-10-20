import express, { Express } from 'express';
import routes from '@/routes';
import initCORS from '@/middlewares/cors';
import bodyParse from '@/middlewares/bodyParse';

const app: Express = express();

bodyParse(app);
initCORS(app);
routes(app);

app.listen(3000, () => {
  console.log('服务器启动成功');
});
