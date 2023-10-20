import { Response } from 'express';
import _StatusCodes, { StatusCodes } from 'http-status-codes';
import { ValidationError } from 'express-validator'

type ReasonPhrase = Exclude<
  keyof typeof _StatusCodes,
  'getStatusCode' | 'getStatusText'
>;

type ResponseParams = {
  data?: any;
  message?: string;
  status?: ReasonPhrase;
  errors?: ValidationError[]
};

export default (response: Response) => (params: ResponseParams) => {
  const reasonPhrase = params.status || 'OK';
  const statusCode = StatusCodes[reasonPhrase];

  return response.status(statusCode).json({
    success: statusCode === 200,
    message: params.message || reasonPhrase,
    data: params.data,
    errors: params.errors
  });
};
