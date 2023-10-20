import { NextFunction, Request, Response } from 'express';
import APIResponse from '@/utils/APIResponse';

export function paginate(request: Request, response: Response, next: NextFunction) {
  const page = request.query.page ? Number(request.query.page) : 1;
  const size = request.query.size ? Number(request.query.size) : 10;
  if (isNaN(page) || isNaN(size)) {
    return APIResponse(response)({
      status: 'INTERNAL_SERVER_ERROR',
      message: 'paginate params not valid',
    });
  }

  request.paginate = {
    limit: size,
    offset: (page - 1) * size,
  };

  next();
}
