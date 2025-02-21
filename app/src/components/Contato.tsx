
interface INumero {
    nome: string,
    numero: number
  }

interface Props {
    contato: INumero
}

const Contato: React.FC<Props> = ({ contato }) => {
    return(
        <div className="contatos">
            <p>{contato.nome} | <b>{contato.numero}</b></p>
        </div>
    )
}

export default Contato