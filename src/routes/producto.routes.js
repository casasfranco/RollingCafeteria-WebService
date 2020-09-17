import { Router } from "express";
import productoController from "../controllers/producto.controllers";
const router = Router();

//destructuramiento
const {
  getPrueba,
  postPrueba,
  crearProducto,
  getProductos,
  getProducto,
  deleteProducto,
  editarProducto,
  getProductosPaginado
} = productoController;

router.route("/").get(getProductosPaginado).post(crearProducto);
router
  .route("/:id")
  .get(getProducto)
  .put(editarProducto)
  .delete(deleteProducto);
router.route("/prueba").get(getPrueba).post(postPrueba);

export default router;
