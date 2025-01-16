import fastify from "fastify";
import {FastifyRequest, FastifyReply} from "fastify";
import { dbConnection } from "./src/database/database_connection.js";
import routers from "./src/routes/router.js";
import 'dotenv/config'

const server = fastify()

const { PORT } = process.env


server.get('/', async (req: FastifyRequest , resp: FastifyReply) => {
    return 'pong\n'
})

server.listen({path: PORT, port: 9000}, (err, address) => {
    if(err){
        console.error(err)
        process.exit(1)
    }

    console.log(`Server listening at ${address}`)
})

//database connection
server.register(dbConnection)

//routers definition
server.register(routers)


