import { Request, Response } from 'express';
import { query, param, matchedData } from 'express-validator';
import APIResponse from '@/utils/APIResponse';

export const HelloWorld = (request: Request, response: Response) => {
  return APIResponse(response)({ data: 'Hello World!' });
};

export const GetQuery = (request: Request, response: Response) => {
  return APIResponse(response)({ data: request.query });
};

export const GetParams = (request: Request, response: Response) => {
  return APIResponse(response)({ data: request.params });
};

export const Paginate = (request: Request, response: Response) => {
  return APIResponse(response)({ data: request.paginate });
};

export const PostData = (request: Request, response: Response) => {
  return APIResponse(response)({ data: request.body });
};

// TODO: 上传完成后返回 URL
export const PostSignalFile = (request: Request, response: Response) => {
  return APIResponse(response)({});
};

export const ValidateRule = [
  param('userId').notEmpty().toInt(),
  query('name').isString().trim().notEmpty(),
];

export const GetUserNameAndUserID = (request: Request, response: Response) => {
  const data = matchedData(request)
  return APIResponse(response)({ data })
}
