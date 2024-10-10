const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config();
const { mongoConn } = require("./databases/configuration");
mongoConn();

const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const generos = require("./routes/genero");
app.use("/api/v1/generos", generos);

const directores = require("./routes/director");
app.use("/api/v1/directores", directores);

const medias = require("./routes/media");
app.use("/api/v1/medias", medias);

const productoras = require("./routes/productora");
app.use("/api/v1/productoras", productoras);

const tipos = require("./routes/tipo");
app.use("/api/v1/tipos", tipos);

module.exports = app;
