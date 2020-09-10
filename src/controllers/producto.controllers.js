import Producto from "../models/producto";

const cafeteriactrl = {};

cafeteriactrl.getPrueba = (req, res) => {
  res.send("Llegue a la ruta de prueba");
};

cafeteriactrl.postPrueba = (req, res) => {
  res.send("Llegue al post de prueba");
};

cafeteriactrl.getProductos = async (req, res) => {
  try {
    const datos = await Producto.find(); // Este metodo reemplazaria "SELECT * FROM ....."
    res.status(200).json(datos);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrio un error al obtener los productos",
    });
    next(error);
  }
};

cafeteriactrl.getProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    const producto = await Producto.findById(req.params.id);
    res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Producto no encontrado.",
    });
    next(error);
  }
};

cafeteriactrl.crearProducto = async (req, res) => {
  console.log(req.body);
  const { nombreProd, precioProd, categoria } = req.body;

  try {
    const nuevoProducto = new Producto({ nombreProd, precioProd, categoria }); // tambien puede ser precioProd: precioProd, categoria: categoria
    await nuevoProducto.save();
    res.status(201).json({
      mensaje: "Producto agregado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Fallo al agregar un producto",
    });
    next(error);
  }
};

cafeteriactrl.deleteProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    const producto = await Producto.findByIdAndRemove(req.params.id);
    res.status(200).json({
      mensaje: "Producto eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Producto no encontrado.",
    });
    next(error);
  }
};

cafeteriactrl.editarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      mensaje: "Producto actualizado correctamente"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Producto no encontrado.",
    });
    next(error);
  }
};

export default cafeteriactrl;
