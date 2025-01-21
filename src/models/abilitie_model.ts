import { sequelizeDbConfig } from "../database/database_connection.js";
import { Model, DataTypes } from "sequelize";

class Abilitie extends Model{
    declare id: string
    declare id_adm: string
    declare title: string
    declare icon_link: string 
    declare description: string
}

Abilitie.init({
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    id_adm:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: 'admin',
            key:'id'
        }
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    icon_link:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    sequelize: sequelizeDbConfig,
    tableName: 'abilities',
    timestamps: false
})

export default Abilitie