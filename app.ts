import fastify from "fastify";
import {FastifyRequest, FastifyReply} from "fastify";

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

