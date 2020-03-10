import React, { useState } from 'react'

import AppInput from '../AppInput'
import AppTextArea from '../AppTextArea'

import AppButton from '../AppButton'

import styles from './index.module.css'

function PostForm (props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  function onSubmit (event) {
    event.preventDefault()

    if (props.onSubmit) {
      props.onSubmit({
        title,
        author,
        createdAt: new Date(),
        description,
        readTime: description.length * 60,
        image
      })
    }

    setAuthor('')
    setDescription('')
    setImage('')
    setImage('')
  }

  return (
    <div className={`row ${styles.PostForm}`}>
      <form
        onSubmit={onSubmit}
        className='col-12 col-md-6'
      >
        <h1>Crear post</h1>

        <AppInput
          id='title'
          label='Título'
          type='text'
          ariaDescribedBy='post title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <AppInput
          id='author'
          label='Autor'
          type='text'
          ariaDescribedBy='author name'
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <AppTextArea
          id='description'
          label='Descripción'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <AppInput
          id='image'
          label='Imagen'
          type='text'
          ariaDescribedBy='url image'
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <div className='d-flex justify-content-end'>
          <AppButton
            type='submit'
            text='Publicar'
            className='btn-primary'
          />
        </div>
      </form>

      {
        image ? (
          <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
          <img
            src={image}
            alt='Preview image URL'
            className='w-100 d-flex justify-content-center'
          />
          </div>
        ) :
        <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
          Ingresa una URL en el campo de imagen
        </div>
      }

    </div>
  )

}


export default PostForm
