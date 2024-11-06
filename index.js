import express from 'express';
import * as path from 'path';

import  router from './routes/api.js'
import {WEB_CACHE} from "./app/config/config.js";
import {PORT} from "./app/config/config.js";


const app=express();
app.set('etag',WEB_CACHE)
app .use("/api",router);

app.listen(PORT,()=> {
    console.log(`Server started on port ${PORT}`);

});