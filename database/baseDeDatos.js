import { Sequelize } from "sequelize";
const baseDeDatos = new Sequelize('crudfullstack', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql'
})

export {
    baseDeDatos
}