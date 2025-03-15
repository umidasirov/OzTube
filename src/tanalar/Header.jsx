import { Stack ,Box,TextField} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../constant/colors'
import logo from '../assets/icons/17407559549421zdr17yc/white_on_trans.png'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { useState } from 'react'
export default function Header({videoQuery,setVideoQuery,handleQueryChange}) {
  const [active,setActive] = useState(false)
  return (
    <Stack direction={'row'} spacing={6} alignItems={'center'} justifyContent={'space-between'} className={`yaxshi ${active?"active":''}`} sx={{background:colors.primary,zIndex:99,color:"#ffff",padding:"10px 20px",position:"fixed",width:"100%"}}>
        <Link className={`logo ${active ? "active":""}`} color="#0000" to="/"><span><SmartDisplayIcon /></span>OzTube</Link>  
        <div className='search-container'>  
          <input className={`search ${active ? "active" : ""}`} type='text' placeholder='Searching...' value={videoQuery} onChange={handleQueryChange}/>
            <button>  
              <i class={`fa-solid fa-${!active ? "magnifying-glass":"xmark"} searchl`} onClick={()=>setActive(!active)}></i>
            </button>
        </div>   
        <div className='none'>
        <Box />
        </div>
    </Stack>
  )
}