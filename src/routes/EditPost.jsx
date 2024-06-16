import blogFetch from '../axios/config'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'



const EditPost = () => {

    const navigate = useNavigate()

    const [title, setTitle] =  useState()
    const [body, setBody] = useState()

    const {id}= useParams()

    const getPost = async()=>{

        
        try {
            const response = await blogFetch.get(`/posts/${id}`)
            const data = response.data
            setTitle(data.title)
            setBody(data.body)
        
    } catch (error) {
        console.log(error)
    }}

    //método para editar o post
    const editPost = async(e)=>{
        e.preventDefault()

      //montando o objeto, para pegar os states atualizados  
        const post = {title,body,userId: 1 }

        await blogFetch.put(`/posts/${id}`,{
            body: post,
        })
    }
    
    useEffect(()=>{
        getPost()
    }, [])
    
  return (
    <div className='new-post'>
      <h2>Editando:{title}</h2>

      <form onSubmit={(e)=>editPost(e)}>
        <div className="form-control">
            <label htmlFor="title">Título:</label>
            <input type="text"
             name='title'
              placeholder='Digite o título' 
              id='title' onChange={(e)=>setTitle(e.target.value)}
              value={title || ""}/>
        </div>
        <div className="form-control">
            <label htmlFor="body">Conteúdo:</label>
            <textarea name="body"
             id="body"
              placeholder='Digite o conteúdo' 
              onChange={(e)=>setBody(e.target.value)}
              value={body || ""}>

            </textarea>
        </div>
            <input type="submit" value="Editar post" className='btn'/>
      </form>
    </div>
  )
}

export default EditPost


//trazendo os dados do post, como já temos uma função que resgata os posts no posts.jsx, para economizar tempo vamos copiá-lá