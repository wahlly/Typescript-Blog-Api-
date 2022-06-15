import HttpException from '@/utils/exceptions/http.exception';
import { Request, Response, NextFunction } from 'express';

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction): void {
      const status = error.status;
      const message = error.message || 'Something went wrong';

      res.status(status).send({ status, message });
}

export default errorMiddleware;