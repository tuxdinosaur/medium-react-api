async function login(email, password) {
  try {
    const response = await window.fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    })

    if(!response.ok) {
      if (response.status >= 500) window.alert('El server está morido unu')
      else window.alert('Las crendenciales son incorrectas')

      return { data: { token: '' } }
    }

    const payload = await response.json()
    window.sessionStorage.setItem('authorization', payload.data.token)
    return payload
  } catch (error) {
    window.alert('Ocurrió un error al iniciar sesión')
    return {
      data: { token:'' }
    }
  }
}

async function validateSession(token) {
  try {
    if (token) {
      const response = await window.fetch('http://localhost:8080/users/validate-session', {
        headers: { authorization: token }
      })

    if(!response.ok) {
      if (response.status >= 500) window.alert('El server está morido unu')
      else window.alert('Ocurrió un problema en el servidor')

      return { data: { token: '' } }
    }

      const payload = await response.json()
      window.sessionStorage.setItem('authorization', payload.data.token)
      return payload
    }
    else {
      return {
        data: { token: '' }
      }
    }
  } catch (error) {
    window.alert('Ocurrió un problema en el servidor')
    return {
      data: { token: '' }
    }
  }
}

async function getPost(id) {
  try {
    const token = window.sessionStorage.getItem('authorization')

    const response = await window.fetch(`http://localhost:8080/posts/${id}`, {
      headers: { authorization: token }
    })

    if(!response.ok) {
      if (response.status >= 500) window.alert('El server está morido unu')
      else window.alert('No se pudo obtener el post')

      return { data: { token: '' } }
    }

    const payload = await response.json()

    return payload

  } catch (error) {
    window.alert('No se pudo obtener el post')
    return {
      data: { post:[] }
    }
  }
}

async function getPosts() {
  try {
    const token = window.sessionStorage.getItem('authorization')

    const response = await window.fetch('http://localhost:8080/posts', {
      headers: { authorization: token }
    })

    if(!response.ok) {
      if (response.status >= 500) window.alert('El server está morido unu')
      else window.alert('No se pudieron obtener los posts')

      return { data: { token: '' } }
    }

    const payload = await response.json()

    payload.data.posts = payload.data.posts.map((badPost) => ({
      id: badPost._id,
      image: badPost.image,
      title: badPost.title,
      text: badPost.description,
      date: badPost.date,
      readTime: badPost.time,
      author: badPost.author
    }))
    return payload
  } catch (error) {
    window.alert('No se pudieron obtener los posts')
    return {
      data: { posts:[] }
    }
  }
}

async function createPost(post) {
  try {
    const token = window.sessionStorage.getItem('authorization')

    const response = await window.fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      },
      body: JSON.stringify({
        title: post.title,
        author: post.author,
        imageUrl: post.image,
        readingTime: post.readTime,
        description: post.description
      })
    })

    if(!response.ok) {
      if (response.status >= 500) window.alert('El server está morido unu')
      else window.alert('Verica los datos del post a crear')

      return { data: { token: '' } }
    }

    const payload = await response.json()
    return payload
  } catch (error) {
    window.alert('No se pudo crear el post')
    return {
      data: { post:{
        title: '',
        author: '',
        imageUrl: '',
        readingTime: '',
        description: '',
        date: '',
        _id: ''
      } }
    }
  }
}

export default {
  login,
  validateSession,
  getPost,
  getPosts,
  createPost
}
