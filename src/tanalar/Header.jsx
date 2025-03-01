import { Stack ,Box,TextField} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../constant/colors'
import logo from '../assets/icons/17407559549421zdr17yc/white_on_trans.png'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
export default function Header() {
  return (
    <Stack direction={'row'} spacing={6} alignItems={'center'} justifyContent={'space-between'} sx={{background:colors.primary,zIndex:999,color:"#ffff",padding:"10px 20px",}}>
        <Link className='logo' color="#0000" to="/"><span><SmartDisplayIcon /></span>OzTube</Link>     
          <input className='search' type='text' placeholder='Searching...'/>
        <Box />
    </Stack>
  )
}
