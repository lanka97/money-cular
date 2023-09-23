import express from "express";
import cors from "cors";
import connectDB from "./src/db/common/connection.js"
import mongoose from "mongoose";

function createAndStartServer(port, routers, additionalMiddleware) {
    const app = express();
    connectDB()
    assignDefaultMiddleware(app);
  
    // if (additionalMiddleware) {
    //   // Add your additional middleware here if needed
    // }
  
    if (routers && Object.keys(routers).length > 0) {
      assignRouter(app, routers);
    }
  
    mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB');
      
      const server = app.listen(port, () => {
        console.log(`Its Alive!!! at port ${port}`);
      });
    
    });
  }

function assignDefaultMiddleware(app) {
    app.use(express.json({ limit: "200mb" }));

    app.use(
        express.urlencoded({
            limit: "200mb",
            extended: true,
            parameterLimit: 1000000
        })
    )
    app.use(cors());
}

function assignRouter(app, routers) {
    Object.keys(routers).forEach((key) => app.use(key, routers[key]));
}


export default createAndStartServer;