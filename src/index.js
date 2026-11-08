import { startServer } from "./server.js";
import {initMongoDB} from './db/initMongoDB.js';


const bootStrap = async() =>{
    await initMongoDB();
    startServer();
};

bootStrap();

