const dotenv = require("dotenv");
dotenv.config();
const { mongoConn } = require("./databases/configuration");
mongoConn();

const app = require("./app");

const port = process.env.PORT || 4000;

app.set("port", port);

app.get("/", (req, res) => {
  return res.json({ msj: "OK!" });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
