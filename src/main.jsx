import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1-importando os elementos para nossas rotas
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//páginas
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import Post from './routes/Post.jsx'
import Admin from './routes/Admin.jsx'
import EditPost from './routes/EditPost.jsx'

//2-criando um objeto de configuração de roteamento e nele terá um elemento principal que irá abrigar as páginas, nesse caso o App vai ser "o container" da aplicação de onde as coisas irão sair(childrens) as rotas, feito isso...por convenção vamos criar uma pasta em que nela teremos as notas rotas e importamos os mesmos, depois de importados usamos como element dos path.

const router = createBrowserRouter([
  {
     element: <App/>,
     children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/new',
        element: <NewPost/>
      },
      {
        path: '/posts/:id',
        element: <Post/>
      },
      {
        path: '/admin',
        element: <Admin/>
      },
      {
        path: '/posts/edit/:id',
        element: <EditPost/>
      }

     ]
}
])

//3-ao invés de manter <App/>, vamos trocá-lo pelo router provider em que a propriedade router será router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


//criando uma rota para buscar os posts no path adicionamos o no caminho :id já que queremos pegar cada um dos posts, e criamos um elemento <Post/> e com isso tb temos que criar um arquivo no nosso routes e depois de criado importamos o mesmo para aqui