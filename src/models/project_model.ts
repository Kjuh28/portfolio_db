import { Sequelize, DataTypes, Model } from 'sequelize'
import { sequelizeDbConfig } from '../database/database_connection.js'
import { UUID } from 'node:crypto'

class Project extends Model {
    declare id: string
    declare title: string
    declare description: string
    declare summary: string
    declare tecnologies: string
    declare git_link: string
    declare image: string
    declare index: number
    declare page_link: string
    declare id_adm: string
}

Project.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tecnologies: {
        type: DataTypes.STRING,
        allowNull: true
    },
    git_link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    page_link: {
        type: DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    index: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    id_adm: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'admin',
            key: 'id'
        }
    }
},
{
    sequelize: sequelizeDbConfig,
    timestamps: false,
    tableName: 'projects'
}
)

export default Project