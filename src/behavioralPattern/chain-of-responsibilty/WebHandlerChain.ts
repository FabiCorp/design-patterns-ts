
interface Handler {
    setNextHandler(handler: Handler): void;
    execute(request: Request): void;
}

class BaseHandler implements Handler {

    protected nextHandler: Handler = <Handler>{};

    public setNextHandler(handler: Handler): void {
        this.nextHandler = handler;
    }

    public execute(request: Request): void {
        console.log('Base Handler');
    }

}

class AuthenticationHandler extends BaseHandler {

    public execute(request: Request): void {
        console.log('Authenticate Request');
        this.nextHandler.execute(request);
    }

}

class AuthorizationHandler extends BaseHandler {
    
    public execute(request: Request): void {
        console.log('Authorize Request');
        this.nextHandler.execute(request);
    }
}

class CacheHandler extends BaseHandler {
    
    public execute(request: Request): void {
        console.log('Check cache for Response to Request');
        this.nextHandler.execute(request);
    }
    
}

class RequestHandler extends BaseHandler {
    
    public execute(request: Request): void {
        console.log('Handle Request');
    }

}

class HandlerService {

    public static initialization(): void {
        const authenticationHandler: AuthenticationHandler = new AuthenticationHandler();
        const authorizationHandler: AuthorizationHandler = new AuthorizationHandler();
        const cacheHandler: CacheHandler = new CacheHandler();
        const requestHandler: RequestHandler = new RequestHandler();

        authenticationHandler.setNextHandler(authorizationHandler);
        authorizationHandler.setNextHandler(cacheHandler);
        cacheHandler.setNextHandler(requestHandler);
    }

}