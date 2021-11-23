import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Show(props) {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id
  const messages = props.message
  const [editForm, setEditForm] = useState({})

  useEffect(() => {
    if(props.message) {
      const message = messages.find((message) => message._id === id)
      setEditForm(message)
    }
  }, [props.message])

  if(props.message) {
    const message = messages.find((message) => message._id === id)

    const handleChange = (event) => {
      const newState = {...editForm}
      newState[event.target.name] = event.target.value
      setEditForm(newState)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.updateMessage(editForm, message._id)
      navigate('/')
    }
    
    const removeMessage = () => {
      props.deleteMessage(message._id)
      navigate('/')
    }

    const form = (
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editForm.userName}
        name="userName"
        placeholder="Enter your user name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.image}
        name="image"
        placeholder="Profile Picture URL"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.about}
        name="about"
        placeholder="About"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.message}
        name="message"
        placeholder="Your message"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.url}
        name="url"
        placeholder="Website URL"
        onChange={handleChange}
      />
      <input type="submit" value="Update Your Vent" />
      </form>
    )

    return (
      <div className='messageShow'>
        <img src={message.image} alt={message.userName} className='user' />
        <h1 className='whoru'>{message.userName}</h1>
        <h3 className='aboutme'>{message.about}</h3>
        <strong><p class="message">{message.message}</p></strong>
        <a href={message.url} class="outgoing">{message.url}</a>
        {form}
        <button onClick={removeMessage}>DELETE MESSAGE</button>
      </div>
    )

  } else {
    return <h1>Message Not Found</h1>
  }
}

export default Show
