export {};

declare global {
  namespace Express {
    export interface Request {
      paginate?: {
        limit: number;
        offset: number;
      };
    }
  }
}
