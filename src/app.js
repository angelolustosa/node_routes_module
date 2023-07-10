import express from 'express'
import { produtosRoutes } from './modules';
//import produtosRoutes from './modules/index.js';

const app = express();

app.get('/', (req, res) => {
return res.send('Deu bom!')
})


app.use(produtosRoutes)
//app.use(tipoProdutosRoutes)

export default app
