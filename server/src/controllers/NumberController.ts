import { Request, Response } from "express"
import SosService from "../services/sosService"

const numeros = [
    {
        nome: "brigada militar", 
        numero: 190
    },
    {
        nome: "samu", 
        numero: 192
    },
    {
        nome: "bombeiros", 
        numero: 193,
    }
]

export default {
    async index(req: Request, res: Response){
        res.json(numeros)
        return
    },

    async create(req: Request, res: Response){
        const chamadaSos = new SosService()

        const resp = chamadaSos.chamaAjuda({ajuda: numeros[2], mensagem: {assunto: "Fogo em domicilio", conteudo: "Minha casa esta pegando fogo!"}})
        res.send(resp)
        return
    }
}