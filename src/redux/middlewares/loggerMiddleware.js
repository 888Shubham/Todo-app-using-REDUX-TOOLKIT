
// acess to store

// next - A pointer for next middleware to through 

// access to action 

export const loggerMiddleware = (store)=>{
    return function(next){
        return function(action){
            // log actions
            console.log("[LOG]:"+ action.type+ "" + new Date().toString());
            //call next middleware in pipeline.
            next(action);
            //log the modified state for app.
            console.log(store.getState());
        }
    }
}