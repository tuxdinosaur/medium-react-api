import React, { Component } from 'react'

import AppInput from './AppInput'
import AppTextArea from './AppTextArea'

import AppButton from './AppButton'

class PostForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      description: '',
      createdAt: new Date(),
      image: ''
    }
  }

  get readTime () {
    return this.state.description.length * 60
  }

  onChange (event) {
    const { id, value } = event.target

    this.setState({ [id]: value })
  }

  onSubmit (event) {
    event.preventDefault()

    if (this.props.onSubmit) {
      this.props.onSubmit({
        ...this.state,
        readTime: this.readTime
      })
    }

    this.setState({
      title: '',
      author: '',
      description: '',
      createdAt: new Date(),
      image: ''
    })
  }

  render () {
    return (
      <div className='row post-form'>
        <form
          onSubmit={this.onSubmit.bind(this)}
          className='col-12 col-md-6'
        >
          <h1>Crear post</h1>

          <AppInput
            id='title'
            label='Título'
            type='text'
            ariaDescribedBy='post title'
            value={this.state.title}
            onChange={this.onChange.bind(this)}
          />

          <AppInput
            id='author'
            label='Autor'
            type='text'
            ariaDescribedBy='author name'
            value={this.state.author}
            onChange={this.onChange.bind(this)}
          />

          <AppTextArea
            id='description'
            label='Descripción'
            value={this.state.description}
            onChange={this.onChange.bind(this)}
          />

          <AppInput
            id='image'
            label='Imagen'
            type='text'
            ariaDescribedBy='url image'
            value={this.state.image}
            onChange={this.onChange.bind(this)}
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
          this.state.image ? (
            <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
            <img
              src={this.state.image}
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
}

export default PostForm
