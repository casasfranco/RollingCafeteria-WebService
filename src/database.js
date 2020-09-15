import mongoose, { connect } from "mongoose";

const url = "mongodb+srv://FCASAS:formula1@cluster0.6n9cv.gcp.mongodb.net/test"; //Cadena de conexión bd

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
