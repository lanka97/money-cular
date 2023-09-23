import dotenv from "dotenv";
import sampleRoute from "./src/sample/sampleRouter.js"
import createAndStartServer from "./server.js"

dotenv.config()

const routers = {
    "/sample": sampleRoute
}

createAndStartServer(process.env.PORT ?? 8000, routers)