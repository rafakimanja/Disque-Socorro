interface IAjuda {
    nome: string
    numero: number
}

interface IMensagem {
    assunto: string,
    conteudo: string
}

interface IAjudaDTO{
    ajuda: IAjuda,
    mensagem: IMensagem
}

interface ISosService {
    chamaAjuda(request: IAjudaDTO): string
}

class SosService implements ISosService{
    chamaAjuda({ ajuda, mensagem }: IAjudaDTO){
        return `Ligando para ${ajuda.nome}, situacao: ${mensagem.assunto}...`
    }
}

export default SosService