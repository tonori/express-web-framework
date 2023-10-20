# Express Web Framework

## 目录结构
```text
express-web-framework
 ├── package.json
 ├── README.md
 ├── yarn.lock
 ├── storage
 ├── src
 │   ├── middlewares // 中间件
 │   │   ├── validator.ts
 │   │   ├── cors.ts
 │   │   ├── paginate.ts
 │   │   └── bodyParse.ts
 │   │   └── multer.ts
 │   ├── model // Sequelize
 │   │   ├── multer.ts // Sequelize 连接，在这配置数据库
 │   │   └── demo.ts // Sequelize Model
 │   ├── routes
 │   │   ├── demo.ts // 子路由
 │   │   └── index.ts // 遍历加载目录下的子路由
 │   ├── types
 │   │   └── paginate.d.ts // paginate 中间件类型
 │   ├── utils
 │   │   ├── APIResponse.ts
 │   │   └── readDir.ts
 │   ├── app.ts
 │   └── controller
 │       └── demo.ts
 ├── tsconfig.json
 └── database
     └── config.json // Sequelize-cli 配置
```

## Script
```shell
yarn install
yarn run dev
```

## 功能实现
### API Response
HTTP 状态码定义见：[http-status-code](https://www.npmjs.com/package/http-status-codes#codes)

#### 响应类型
```typescript
type ResponseParams = {
  status?: ReasonPhrase; // HTTP 状态码短语
  data?: any;
  message?: string; // message 如果不传入则使用对应的 HTTP 状态码短语
  errors?: ValidationError[]
};
```

#### 成功响应
```typescript
import { Request, Response } from 'express';

export const HelloWorld = (request: Request, response: Response) => {
  return APIResponse(response)({ data: 'Hello World!' });
};
```

```json
{
  "success": true,
  "message": "OK",
  "data": "Hello World!"
}
```

#### 异常响应
```typescript
import { Request, Response } from 'express';

export const HelloWorld = (request: Request, response: Response) => {
  return APIResponse(response)({
    status: 'BAD_REQUEST',
  })
};
```

```json
{
    "success": false,
    "message": "BAD_REQUEST"
}
```

errors 字段由 express-validator 抛出
```json
{
    "success": false,
    "message": "BAD_REQUEST",
    "errors": [
        {
            "type": "field",
            "value": "",
            "msg": "Invalid value",
            "path": "name",
            "location": "query"
        }
    ]
}
```

### CORS
[CORS](https://www.npmjs.com/package/cors)

### Request Validate
[express-validator](https://express-validator.github.io/docs/)

### ORM
* [Sequelize v6](https://sequelize.org/docs/v6/)
* [Sequelize-cli](https://sequelize.org/docs/v6/other-topics/migrations/#installing-the-cli)

### 文件上传
[multer](https://github.com/expressjs/multer/tree/master)

## 规范化
* [prettier](https://prettier.io/)
* [validate-commit-msg](https://www.npmjs.com/package/validate-commit-msg)

## TODO
* Redis
* [passport](http://www.passportjs.org/)
