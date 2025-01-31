import { Sequelize } from 'sequelize';
import 'dotenv/config';
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
export const sequelizeDbConfig = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    dialect: 'postgres',
    host: PGHOST,
    dialectOptions: {
        ssl: true
    }
});
export async function dbConnection() {
    try {
        await sequelizeDbConfig.authenticate();
        console.log('Connection has been stablished');
    }
    catch (error) {
        console.error('Unable to connect to Database:', error);
    }
}
