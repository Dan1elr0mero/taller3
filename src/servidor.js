import "dotenv/config";
import express from "express";
const server = express();
const port = process.env.PORT;
server.set("port", port);
server.get("/", (request, response) => {
  response.json({ message: "works" });
});
server.listen(port, () => {
  console.log(`servidor ejecutado en el puerto ${port}`);
});
