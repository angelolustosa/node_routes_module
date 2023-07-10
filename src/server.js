import app from "./app.js";

const port = 5000

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});