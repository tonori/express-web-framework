import { type Router } from 'express';
import multer from '@/middlewares/multer';
import * as DemoController from '@/controller/demo'
import { paginate } from "@/middlewares/paginate";
import { validator } from '@/middlewares/validator';

export default (router: Router) => {
    router.get('/demo', DemoController.HelloWorld)
    router.get('/demo/getParams/:message', DemoController.GetParams)
    router.get('/demo/getQuery', DemoController.GetQuery)
    // Express Validator
    router.get('/demo/validate/:userId', DemoController.ValidateRule, validator, DemoController.GetUserNameAndUserID)
    // Paginate 中间件
    router.get('/demo/paginate', paginate, DemoController.Paginate)
    // body-parse 中间件
    router.post('/demo/postData', DemoController.PostData)
    // multer 中间件
    router.post('/demo/postSignalFile', multer.single('file'), DemoController.PostSignalFile)
};
