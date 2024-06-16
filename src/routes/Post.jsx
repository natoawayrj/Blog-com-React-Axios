import React from 'react'
import blogFetch from '../axios/config'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './Post.css'

const Post = () => {

 // pegando o id pelo hook
 
  const {id}= useParams()    

const [post, setPost] = useState({})

// pegando o post 
const getPost = async()=>{

    //no try, vamos criar uma const para pegar os post via axios com o blogFetch que criamos, junto com o get e dentro da função get vamos passar o end point e o elemento que ja setamos com useParams
    try {
        const response = await blogFetch.get(`/posts/${id}`)
        const data = response.data
        setPost(data)
    
} catch (error) {
    console.log(error)
}}

useEffect(()=>{
    getPost()
}, [])

  return (
    <div className='post-container'>
      {!post.title ?(
        <p>Carregando...</p>
      ):(<div className='post'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
      </div>)}
    </div>
  )
}
// no return temos uma div em que informamos se post.tilte não vier vai ter um 
export default Post
