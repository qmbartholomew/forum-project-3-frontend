import { useState } from 'react'
import { Link } from 'react-router-dom'

const Index = (props) => {
  if(props.message) {
    return (
      <div className='news'>
        {props.message.map((message) => {
          return <div key={message._id} className='message'>
            <Link to={`/forum/${message._id}`}>
              <img src={message.img} className='user' />
              <h1 className='whoru'>{message.userName}</h1>
              <h3 className='aboutme'>{message.about}</h3>
              <p className='date'>{message.date}</p>
              <p className='date'>{message.time}</p>
              <strong><p class="message">{message.message}</p></strong>
              <a href="props.url" class="outgoing">{message.url}</a>
            </Link>
          </div>
        })}
      </div>
    )
  }
}

export default Index
