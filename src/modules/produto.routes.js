import { Router } from "express";

const routes = Router()

routes.get('/produtos', (req, res) => {
  return res.send('produtos')
} )

export default routes