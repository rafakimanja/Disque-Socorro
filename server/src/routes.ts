import { Router } from "express";
import NumberController from "./controllers/NumberController";

const routes = Router()

routes.get("/", (req, res) => {
    res.send('Bem-Vindo de novo!')
})

routes.get("/numeros", NumberController.index)
routes.get("/chamada", NumberController.create)

export default routes