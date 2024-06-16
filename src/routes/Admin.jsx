import blogFetch from "../axios/config"

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import './Admin.css'

const Admin = () => {
    const [posts, setPosts] = useState([])


const getPost = async()=>{
 
  try {
    
     const response = await blogFetch.get("/posts")

     const data = response.data 

      setPosts(data)
     

  } catch (error) {
    console.log(error)
  }
}
// fazendo o crud, primeiro criamos uma função para deletar o post, temos um função assíncrona em que passamos como parâmetro o id(já que está é a chave do elemento), que no escopo receberá await + o endereço da api.delete(função que deleta ) e que terá como parâmtro o endpoint da api e o elemento desejado. Agora basta usar o evento de onclick no botão que vai excluir o post e como parâmetro a chave(no caso post.id), se fosse em um servidor, este código já seria o suficiente para resolver o nosso problema, mascomo estamos em uma API mocada na página ainda não será possível ver essa funcionalidade por isso temos que excluir o registro do DOM, e como caralhos vamos fazer isto?  Simples, criamos uma função que vai remover o elemento do estado, e como parâmetro passamos o id do elemento que queremos excluir, e como valor de retorno vamos ter um novo array que não tem o elemento que foi excluído, e para fazer isso vamos usar o filter que é um método que retorna um novo array com todos os elementos que atendem a uma condição implementada por uma função fornecida. E agora basta chamar essa função no evento de onclick do botão de excluir e como parâmetro o id do elemento que queremos excluir.

const deletPost = async(id)=>{
  await blogFetch.delete(`/posts/ ${id}`)

  const filteredPosts = posts.filter((post)=> post.id !== id)

   setPosts(filteredPosts)

}
useEffect(()=>{
    getPost()
 },[])


  return (
    <div>
     <h1>Gerenciar post:</h1>
     {posts.length === 0 ? (<p>Carregando...</p>):(
        posts.map((post)=>(
            <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <div className="actions">
                    <Link className="btn edit-btn" to={`/posts/edit/${post.id}`}>Editar Post.</Link>
                    <button className="btn delete-btn" onClick={()=>deletPost(post.id)}>Excluir</button>
                </div>
            </div>
        ))
     )}
    </div>
  )
}

export default Admin
