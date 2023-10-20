import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator'
import APIResponse from '@/utils/APIResponse';

export function validator(request: Request, response: Response, next: NextFunction) {
  const result = validationResult(request)
  if (result.isEmpty()) {
   next()
  } else {
    console.log(result.array());
    return APIResponse(response)({
      status: 'BAD_REQUEST',
      errors: result.array()
    })
  }
}
