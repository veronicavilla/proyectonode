import { baseDeDatos } from "../database/baseDeDatos";
import { DataTypes } from "sequelize";

const Producto = baseDeDatos.define('producto', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

export{
    Producto
}