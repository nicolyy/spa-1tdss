import { Link } from "react-router-dom";
import { listaProdutos } from "../../components/ListaProdutos";

export default function Produtos() {
  
  return (
    <main>
      <h1>Produtos</h1>
      {
        listaProdutos.map((prod) => (
          <div key={prod.id}>
            <Link to={`/produtos/editar${prod.id}`}>
                Editar Produtos: {prod.nome}
              </Link>
          </div>
        ))}
  </main>
  )
}

 