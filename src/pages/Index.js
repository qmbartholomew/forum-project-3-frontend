import { useState } from 'react'
import { Link } from 'react-router-dom'

const Index = (props) => {

  const [newForm, setNewForm] = useState({
    userName: '',
    about: '',
    date: '',
    time: '',
    message: '',
    url: '',
    startRating: 0
  })

  const handleChange = (event) => {
    const newState = {...newForm}
    newState[event.target.name] = event.target.value
    setNewForm(newState)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createMessage(newForm)
    setNewForm({
      userName: '',
      about: '',
      date: '',
      time: '',
      message: '',
      url: '',
      startRating: 0
    })
  }

  const form = (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={newForm.userName}
      name="userName"
      placeholder="Enter your user name"
      onChange={handleChange}
    />
    <input
      type="text"
      value={newForm.about}
      name="about"
      placeholder="About"
      onChange={handleChange}
    />
    <input
      type="text"
      value={newForm.message}
      name="message"
      placeholder="Your message"
      onChange={handleChange}
    />
    <input
      type="text"
      value={newForm.url}
      name="url"
      placeholder="Website URL"
      onChange={handleChange}
    />
    <input type="submit" value="Create Message" />
    </form>
  )

  if(props.message) {
    return (
      <div className='news'>
        {form}
        {props.message.map((message) => {
          return <div key={message._id} className='message'>
            <Link to={`/forum/${message._id}`}>
              <img src={message.img} alt={message.userName} className='user' />
              <h1 className='whoru'>{message.userName}</h1>
              <h3 className='aboutme'>{message.about}</h3>
              <strong><p class="message">{message.message}</p></strong>
              <a href="props.url" class="outgoing">{message.url}</a>
            </Link>
          </div>
        })}
      </div>
    )
  } else {
    return (
      <div className='news'>
        {form}
        <h1>Loading...</h1>
      </div>
    )
  }
}

export default Index
