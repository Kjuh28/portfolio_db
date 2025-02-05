import { DataTypes, Model } from 'sequelize';
import { sequelizeDbConfig } from '../database/database_connection.js';
class Project extends Model {
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
        references: {
            model: 'admin',
            key: 'id'
        }
    }
}, {
    sequelize: sequelizeDbConfig,
    timestamps: false,
    tableName: 'projects'
});
export default Project;
