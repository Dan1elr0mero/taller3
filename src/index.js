import "dotenv/config";
const server = require("./servidor");
const port = servidor.get("port");
server.listen(port, () => {
  console.log(`servidor ejecutado en el puerto ${port}`);
});
