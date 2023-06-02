//routers
import DataRouter from "./DataRouter.js"


//route data
const routes = [{uri:"data",router:DataRouter}];

//define routes
export const setRoutes = (app,baseURL = "") => {
    routes.forEach(({uri,router})=>{
        const url = baseURL + "/" + uri;
        console.log(url)
        app.use(url,router);
    });
}
