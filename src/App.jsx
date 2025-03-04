import './App.scss'
import { colors } from './constant/colors'
import Header from './tanalar/Header'
import Navbar from './tanalar/navbar'
import { Stack } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import RoutesComponents from './tanalar/RoutesComponents'

function App() {
  return (
    <Stack sx={{ background: colors.secondary }} className='App'>
      <Header />
      <Navbar />
      <RoutesComponents />
    </Stack>
  )
}

export default App