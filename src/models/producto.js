import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema(
  {
    nombreProd: { type: String, maxlength: 100, required: true, unique: true },
    precioProd: { type: Number, maxlength: 10, required: true },
    categoria: { type: String, maxlength: 100 },
  },
  { timestamps: true }
);

const Producto = mongoose.model("producto", productoSchema);

export default Producto;
