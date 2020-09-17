import mongoose, { connect } from "mongoose";

const url = "mongodb+srv://FCASAS:123456789FCASAS@cluster0.6n9cv.gcp.mongodb.net/cafeteria"; //Cadena de conexión bd

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
