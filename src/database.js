import mongoose, { connect } from "mongoose";

const url = "mongodb://localhost:27017/cafeteria"; //Cadena de conexión bd

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;

conn.once("open", () => {
  console.log("Base de datos conectada con exito");
});
