import fastify from "fastify";
import {FastifyRequest, FastifyReply} from "fastify";
import { dbConnection } from "./src/database/database_connection.js";

const server = fastify()

server.get('/ping', async (req: FastifyRequest , resp: FastifyReply) => {
    return 'pong\n'
})

server.listen({port: 9000}, (err, address) => {
    if(err){
        console.error(err)
        process.exit(1)
    }

    console.log(`Server listening at ${address}`)
})

//database connection
server.register(dbConnection)

