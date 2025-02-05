import fastify from "fastify";
import { dbConnection } from "./src/database/database_connection.js";
import routers from "./src/routes/router.js";
import 'dotenv/config';
import cors from "@fastify/cors";
const server = fastify();
await server.register(cors);
const portEnv = process.env.PORT ? parseInt(process.env.PORT, 10) : undefined;
const portVar = portEnv || 9000;
server.get('/', async (req, resp) => {
    return 'pong\n';
});
server.listen({ port: portVar, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
//database connection
server.register(dbConnection);
//routers definition
server.register(routers);
