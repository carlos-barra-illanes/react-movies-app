import React from 'react'
import '../assets/css/Header.css'

const Header = () => {
    return (
        <span className="header" onClick={() => window.scroll(0, 0)}> 🎬 CHARFLIX 🎥</span>
    )
}

export default Header
