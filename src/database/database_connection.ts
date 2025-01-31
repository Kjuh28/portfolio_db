import { Sequelize } from 'sequelize'
import 'dotenv/config'
const pg = require('pg')
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env

export const sequelizeDbConfig = new Sequelize(
    PGDATABASE!, PGUSER!, PGPASSWORD, {
        dialect: 'postgres',
        dialectModule: pg,
        host: PGHOST,
        dialectOptions: {
            ssl: true
        }
    })

export async function dbConnection(){
    try {
        await sequelizeDbConfig.authenticate()
        console.log('Connection has been stablished')
    } catch (error) {
        console.error('Unable to connect to Database:', error)
    }
    
    
}