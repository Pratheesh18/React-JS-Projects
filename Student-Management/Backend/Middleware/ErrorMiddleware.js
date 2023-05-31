const ErrorMiddleware = async (ctx , next) => {
    try{
        await next();

    }catch(error){
        ctx.status = error.status || 500;
        ctx.body = {
            error : {
                message : error.message || "Internal Server Error",
            },
        };
    }
}

module.exports = ErrorMiddleware;