import './App.scss'
import { colors } from './constant/colors'
import Header from './tanalar/Header'
import { Stack } from '@mui/material'
import Navbar from './tanalar/navbar'
function App() {

  return (
    <Stack sx={{background:colors.secondary,height:"100vh"}} className='App'>
      <Header />
      <Navbar /> 
    </Stack>
  )
}

export default App
