import { FormEvent, useState } from 'react'

import { Vagasbutton, Vagasform, Vagasinput } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Vagasform onSubmit={aoEnviarForm}>
      <Vagasinput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Vagasbutton type="submit">Pesquisar</Vagasbutton>
    </Vagasform>
  )
}
export default FormVagas
