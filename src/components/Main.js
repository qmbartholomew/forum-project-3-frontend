import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

function Main(props) {

    const [message, setMessage] = useState(null)

    const URL = 'https://penguin-project-3-backend.herokuapp.com/forum/'

    const getMessage = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setMessage(data)
    }

    const createMessage = async (message) => {
        await fetch(URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
    }

    const updateMessage = async (message, id) => {
        await fetch(URL + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        getMessage()
    }

    const deleteMessage = async (id) => {
        await fetch(URL + id, {
            method: 'delete'
        }) 
        getMessage()
    }

    useEffect(() => {getMessage()}, [])
    
    return (
        <main>
            <Routes>
                <Route path='/' element={<Index message={message} createMessage={createMessage} />} />
                <Route path='/forum/:id' element={<Show message={message} updateMessage={updateMessage} deleteMessage={deleteMessage} />} />
            </Routes>
        </main>
    )
}

export default Main
