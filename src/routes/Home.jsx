//7-requisição de API(axios) inicialmente importamos o useState e o useEffect do react e o link do reac-router-dom, pq teremos um link de cada post e depois das importações estilizamos o css.

//8- primeiramente, temos que resgatar os post em variável com o useState
import blogFetch from "../axios/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import './Home.css'

const Home = () => {

//8-para resgatar os dados dos posts com o useState, vamos criar uma variável em que elas serão armazenadas
 
const [posts, setPosts] = useState([])
//9- criamos uma função assíncrona  que irá pegar os dados da  API

const getPost = async()=>{

//11-vamos colocar essa execução em um try catch, pq como dependemos do servidor, para indentificar de modo seguro algum problema  
  try {
// 12- no try uma variável que vai receber via axios os dados da api, se dermos um console.log da varialve veremos que retornará um objeto e neste objeto vamos pegar e manipular os elementos que desejamos    
     const response = await blogFetch.get("/posts")
//13- vimos os elementos do objeto e neste caso como queremos só o data, criamos uma variável que receberá este dado
     const data = response.data 
//14- com isso recebemos um array com todas as informações e passamos como parâmetro para o setPost
      setPosts(data)
     

  } catch (error) {
    console.log(error)
  }
}

//10-para que essa função seja executada, temos que usar o useEffect, assim podemos cordenar quantas vezes a função será executada, no fim da função, colocamos como argumento um array vazio para que seja executada um vez só.

  useEffect(()=>{
     getPost()
  },[])


  return (
    <div className='home'>
      <h1>Últimos Post</h1>
      {posts.length === 0 ? (<p>Carregando...</p>):(
        posts.map((post)=>(
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`} className='btn'>Ler mais </Link>
          </div>
        ))
      )}
      {/* com nosso if ternário, vamos passar se o tamanho do post for 0 vai aparecer uma mensagem de carregando, e o nosso else neste caso será nossa variável post com o método map  e criamos uma div(atenção ao atributo key, ele é primordial para não ter erro e nessa div vamos passa o titulo e o body...lembrando como se rtata de um objeto estão encapsulados pr () e não chaves{}*/}
    </div>
  )
}

export default Home
