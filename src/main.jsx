import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//BLOCO DE ROTAS
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './routes/Home/index.jsx';
import Produtos from './routes/Produtos/index.jsx';
import EditarProdutos from './routes/EditarProdutos/index.jsx';
import ExcluirProdutos from './routes/ExcluirProdutos/index.jsx';
import Erro404 from './routes/Error404/index.jsx';


//Criando o objeto de rotas
const router = createBrowserRouter([
  { path: '/', 
      element: <App />,
      errorElement: <Erro404 />, 
      children: [
        { path: '/', element: <Home /> },
        { path: '/produtos', element: <Produtos /> },
        { path: '/editar/produtos/:id', element: <EditarProdutos /> },
        { path: '/antiga', element: <Navigate to="/" />},
  
      ]
  }
])

//BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)