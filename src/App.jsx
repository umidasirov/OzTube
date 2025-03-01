import './App.scss'
import { colors } from './constant/colors'
import Header from './tanalar/Header'
import { Stack } from '@mui/material'
function App() {

  return (
    <Stack sx={{background:colors.secondary,height:"100vh"}}>
    <Header />
    </Stack>
  )
}

export default App
