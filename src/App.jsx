import './App.scss'
import { colors } from './constant/colors'
import Header from './tanalar/Header'
import Navbar from './tanalar/Navbar'
import { Stack } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Stack sx={{ background: colors.secondary }} className='App'>
      <Header />
      <Navbar />
        <div className="content">
          <Routes>
            {/* Указываем правильный компонент, который должен отобразиться на главной странице */}
            <Route path='/' element={<div>Главная страница</div>} />
            {/* Пример добавления других маршрутов */}
            {/* <Route path='/about' element={<About />} /> */}
          </Routes>
        </div>
    </Stack>
  )
}

export default App