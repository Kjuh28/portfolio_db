import express from 'express'
import { dbConnection } from "./src/database/database_connection.js";
import routers from "./src/routes/router.js";
import 'dotenv/config'
import cors from 'cors'
import { Request, Response } from 'express';

const app = express()

app.use(cors())
app.use(express.json())

const portEnv = process.env.PORT
const portVar = portEnv || 9000

app.get('/', (req: Request, resp: Response) => {
    resp.send('Testando a rota na vercel')
});

//routers definition
app.use(routers);

//database connection
(async () => { 
    await dbConnection()
})();

//server function 
app.listen({port: portVar}, (err: any) => {
    if (err){
        console.log(err)
    }
    console.log(`Server listening at ${portVar}`)
})

//serveless function
// export default app;
