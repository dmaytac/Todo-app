import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"

const Homepage =({isDarkMode,personal,business})=>{
    const color = isDarkMode ? 'white' : 'black'
    console.log(color,isDarkMode)
    return(
        <div className={`homepage-wrapper-${isDarkMode ? 'dark' : 'light'}`}>
            <NavLink  className={`navlink-homepage-${isDarkMode ? 'dark' : 'light'}`} style={{textDecoration:'none',color:'rgb(52,134,246)' }} to='/business'>Bussines<br/>
            <p style={{color:`${color}`}}>{business} To do</p></NavLink>

            <NavLink className={`navlink-homepage-${isDarkMode ? 'dark' : 'light'}`} style={{textDecoration:'none',color:'rgb(52,134,246)' }} to='/personal'>Personal<br/>
            <p style={{color:`${color}`}}>{personal} To do</p></NavLink>
            <Outlet />
        </div>
    )
}
export default Homepage