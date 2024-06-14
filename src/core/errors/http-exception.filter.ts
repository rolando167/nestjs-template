import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus
} from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        const request = ctx.getRequest()
        const statusCode = exception.getStatus()
        const message = getErrorMessage<any>(exception);

        response.status(statusCode).json({
            statusCode,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            message: message,
        })
    }
}

export const getErrorMessage = <T>(exception: T): string => {
    return exception instanceof HttpException
        ? exception.message
        : String(exception);
};

export const getStatusCode = <T>(exception: T): number => {
    return exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
};