import "./App.css";
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/cabecalho";
import Rodape from "./Components/Rodape";
import Menu from "./Components/Menu";

export default function App() {
  return (
    <>
      {
        <h1>Testando</h1>
      }
      <Cabecalho />
      {/* Crie uma Section com uma div e 3 parágrafos com texto lorem de 3 linhas. */}
      {/* Passando três props para o componente filho. */}
      <Outlet />
      {/* Crie um rodapé com um p e o código do símbolo de copyright mais o texto que se segue. "Todos os meus direitos reservados. 2023" */}
      <Rodape />
    </>
  );
}