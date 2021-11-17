import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

function Main(props) {


    const URL = 'https://qb-bookmarkd-backend.herokuapp.com/bookmarkd/'

    
    return (
        <main>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/bookmarkd/:id' element={<Show />} />
            </Routes>
        </main>
    )
}

export default Main
