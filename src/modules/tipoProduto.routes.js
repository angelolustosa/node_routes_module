import { Router } from "express";

const routes = Router()

routes.get('/tipoProdutos', (req, res) => {
  return res.send('tipoProdutos')
} )

export default routes