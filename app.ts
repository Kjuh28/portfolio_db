import express from 'express'
import { dbConnection } from "./src/database/database_connection.js";
import routers from "./src/routes/router.js";
import 'dotenv/config'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const portEnv = process.env.PORT
const portVar = portEnv || 9000

app.get('/', (req, resp) => {
    resp.send('Testando a rota na vercel')
});

//database connection
(async () =>{ 
    await dbConnection()
})();

//routers definition
app.use(routers)


app.listen({port: portVar}, (err: any) => {
    if (err){
        console.log(err)
    }
    console.log(`Server listening at ${portVar}`)
})

export default app;