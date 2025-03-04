import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";
export default function Navbar(props) {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/"><i class="fa-solid fa-house"></i> <span>Main</span></NavLink>
        <NavLink to="/music"><i class="fa-solid fa-music"></i><span>Music</span></NavLink>
        <NavLink to="/sport"><i class="fa-solid fa-volleyball"></i><span>Sport</span></NavLink>
        <NavLink to="/news"><i class="fa-solid fa-newspaper"></i><span>News</span></NavLink>
      </nav>
    </div>
  )
}