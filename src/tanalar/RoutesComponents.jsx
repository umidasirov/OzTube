import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Content from './Content'

export default function RoutesComponents() {
  return (
    <div className='routes'>
        <Routes >
            <Route element={<Content/>} path='/'/>
        </Routes>
    </div>
  )
}
