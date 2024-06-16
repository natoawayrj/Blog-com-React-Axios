import React from 'react'
import './NewPost.css'

//para comunicar com a API
import blogFetch from '../axios/config'

//manipulando os dados
import { useState } from 'react'

//para simular um redirect(direcionamento para algum lugar, nesse caso a home)
import {useNavigate} from 'react-router-dom'

const NewPost = () => {
//setando o useNavigate
const navigate = useNavigate()

//states para o título e body
const [title, setTitle] = useState()
const [body, setBody] = useState()


//criando função para criar o post

const createPost = async(e)=>{
  e.preventDefault();

//2-criamos um objeto que terá o title,body e userId(este, está na documentação), como estamos usando o axios, não precisamos converter para json, daí pegamos o blogFetch que setamos no prórpio axios, e o usamos .post método de envio de dados("endpoint") e como segundo argumento os dado do body
  const post = {title, body, userId: 1};

  await blogFetch.post("/post",{
    body: post,
  })
  navigate("/")
}
  return (
    <div className='new-post'>
      <h2>Inserir new post:</h2>

      <form onSubmit={(e)=>createPost(e)}>
        <div className="form-control">
            <label htmlFor="title">Título:</label>
            <input type="text" name='title' placeholder='Digite o título' id='title' onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="body">Conteúdo:</label>
            <textarea name="body" id="body" placeholder='Digite o conteúdo' onChange={(e)=>setBody(e.target.value)}></textarea>
        </div>
            <input type="submit" value="criar post" className='btn'/>
      </form>
    </div>
  )
}

export default NewPost


//1-com o onchange qque vai pegar os valores escritos, agora temos que inserir esses valores no sistema

//3-feito isso agora temos que no main criar uma rota para acessar cada post