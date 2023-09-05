import {useNavigate, useParams} from "react-router-dom"
import { listaProdutos } from "../../components/listaProdutos"

export default function EditarProdutos() {

    const lista = listaProdutos
    const navegacao = useNavigate()
    const { id } = useParams()

    const proc = lista.filter((produto) => produto.id == id)
    const produto = proc[0]

    const salvar = () => {
        alert('Produto: ${produto.nome} editado com sucesso!')
        return navegacao('/produtos')
    }

    return (
        <main>
            <h1>Editando Produtos</h1>
            <p>Editando os dados do produto: {produto.nome}</p>
            <button onClick={salvar}>Salvar</button>
        </main>
    )
}