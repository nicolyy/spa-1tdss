import "./App.css";
import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Menu from "./components/Menu";


 function App() {
  return (
    <>
      <Cabecalho/>
      <Outlet />
      <Rodape />
    </>
  );
}
export default App;