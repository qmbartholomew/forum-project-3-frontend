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
      value={newForm.image}
      className="imageInp"
      name="image"
      placeholder="Message Picture URL"
      onChange={handleChange}
    />
    <input
      type="text"
      value={newForm.message}
      className="messageInp"
      name="message"
      placeholder="Your message"
      onChange={handleChange}
    />
     <input
      type="text"
      value={newForm.userName}
      className="nameInp"
      name="userName"
      placeholder="Enter your user name"
      onChange={handleChange}
    />
    
    <input
      type="text"
      value={newForm.about}
      className="aboutInp"
      name="about"
      placeholder="About you ? WhoRU?"
      onChange={handleChange}
    />
    
    <input
      type="text"
      value={newForm.url}
      className="urlInp"
      name="url"
      placeholder="Website URL"
      onChange={handleChange}
    />
    <input type="submit" class="subInp" value="Create Message" />
    </form>
  )

  if(props.message) {
    return (
      <div id="pagewrap">
        <div class="leftMeta">
        {form}
        
        </div>
        <main>
      <div className='news'>
        
        {props.message.map((message) => {
          return <Link to={`/forum/${message._id}`} style={{textDecoration:"none"}}>
          <div key={message._id} className='message'>
            
              <img src={message.image} alt={message.userName} className='user' />
              <strong><p class="messageBox">{message.message}</p></strong>
              
              <h1 className='whoru'>{message.userName}</h1>
              <h3 className='aboutme'>{message.about}</h3>
              
              <a href="message.url" class="outgoing">{message.url}</a>
            
          </div>
          </Link>
        })}
      </div>
      </main>
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
