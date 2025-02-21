import api from './services/api.ts'
import { useEffect, useState } from 'react'
import Contato from './components/Contato.tsx'

interface INumero {
  nome: string,
  numero: number
}

function App() {

  const [numeros, setNumeros] = useState<INumero[]>([])

  useEffect(() => {
    api.get<INumero[]>('/numeros').then(response => {
      setNumeros(response.data)
    })
  }, [])

  return (
    <>
      <div className='bg-red-400'>
        {
          numeros.map((numero, index) =>  <Contato key={index} contato={numero} />)
        }
      </div>
    </>
  )
}

export default App
