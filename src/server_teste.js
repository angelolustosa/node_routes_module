// const express = require("express");
// const fs = require("fs");
// const { request } = require("http");

// const servidor = express();
// const port = 8080;

// servidor.use(express.json());

// function lerCidades() {
//   try {
//     const stringData = fs.readFileSync("./cidades.json", "utf8");

//     JSON.parse(stringData);

//     return JSON.parse(stringData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function escreverCidades(cidades) {
//   try {
//     fs.writeFileSync("./cidades.json", cidades);
//   } catch (error) {
//     console.log(error);
//   }
// }

// servidor.get("/hello", (_, response) => {
//   response.status(200).send({ mensagem: "Hello Word" });
// });

// servidor.get("/cidades", (request, response) => {
//   const { nome } = request.query;
//   const cidades = lerCidades();

//   if (nome) {
//     const cidadesFiltradas = cidades.filter((cidade) =>
//       cidade.nome.toUpperCase().includes(nome.toUpperCase())
//     );
//     response.status(200).send(cidadesFiltradas);
//   }

//   response.status(200).send(cidades);
// });

// servidor.post("/cidades", (request, response) => {
//   const cidade = request.body;

//   const cidades = lerCidades();

//   cidades.push(cidade);

//   escreverCidades(JSON.stringify(cidades));

//   response.sendStatus(201);
// });

// servidor.get("/cidades/:id", (request, response) => {
//   const { id } = request.params;

//   const cidades = lerCidades();

//   const cidade = cidades.find((cidade) => cidade.id == id);

//   if (cidade) {
//     response.status(200).send(cidade);
//   } else {
//     response.sendStatus(404);
//   }
// });

// servidor.put("/cidades/:id", (request, response) => {
//   const { id } = request.params;

//   const cidades = lerCidades();

//   const cidade = cidades.find((cidade) => cidade.id == id);

//   if (cidade) {
//     const { nome } = request.body;

//     cidade.nome = nome;
//     const indice = cidades.indexOf(cidade);
//     cidades[indice] = cidade;

//     escreverCidades(JSON.stringify(cidades));

//     response.status(200).send(cidade);
//   } else {
//     response.sendStatus(404);
//   }
// });

// servidor.delete("/cidades/:id", (request, response) => {
//   const { id } = request.params;

//   const cidades = lerCidades();

//   const cidade = cidades.find((cidade) => cidade.id == id);

//   if (cidade) {
//     const indice = cidades.indexOf(cidade);

//     cidades.splice(indice, 1);

//     escreverCidades(JSON.stringify(cidades));

//     response.sendStatus(204);
//   } else {
//     response.sendStatus(404);
//   }
// });

// servidor.listen(port, () => {
//   console.log(`Servidor rodando e ouvindo na porta: ${port}`);
// });
