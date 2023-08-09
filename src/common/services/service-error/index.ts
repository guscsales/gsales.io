import { StatusCodes } from '@/common/enums/status-codes';

interface ServiceErrorReturn {
  statusCode: StatusCodes;
  error?: any;
}

export class ServiceError extends Error {
  statusCode: StatusCodes;
  error: any;

  constructor(data: ServiceErrorReturn) {
    super(JSON.stringify(data));
    this.name = 'ServiceError';
    this.statusCode = data.statusCode;
    this.error = data.error;
  }
}
