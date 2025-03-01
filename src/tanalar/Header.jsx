import { Stack ,Box,TextField} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../constant/colors'
import logo from '../assets/icons/17407559549421zdr17yc/white_on_trans.png'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { useState } from 'react'
export default function Header() {
  const [active,setActive] = useState(false)
  return (
    <Stack direction={'row'} spacing={6} alignItems={'center'} justifyContent={'space-between'} sx={{background:colors.primary,zIndex:999,color:"#ffff",padding:"10px 20px",position:"fixed",width:"100%"}}>
        <Link className='logo' color="#0000" to="/"><span><SmartDisplayIcon /></span>OzTube</Link>  
        <div className='search-container'>  
          <input className={`search ${active?"active":''}`} type='text' placeholder='Searching...'/>
            <button>  
              <i class="fa-solid fa-magnifying-glass searchl" onClick={()=>setActive(!active)}></i>
            </button>
        </div>   
        <div className='none'>
        <Box />
        </div>
    </Stack>
  )
}
