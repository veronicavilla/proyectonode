import { Producto } from "../models/ProductoModel";

const crearProducto = async (req, res) => {
    try {
        Producto.create(req.body)
        res.json({
            message: "usuario creado correctamente"
        })
    } catch (error) {
        res.json({
            message: "no se pudo registrar" + error
        })
    }
};

const listarProductos = () => {};

const listarProducto = () => {};

const editarProducto = () => {};

const eliminarProducto = () => {};

export{
    crearProducto,
    listarProductos,
    listarProducto,
    editarProducto,
    eliminarProducto
}
