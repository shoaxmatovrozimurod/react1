import React from 'react'
import Logo from "./images/logo.png"

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="header__container">
                <img src={Logo} alt="logo" />
            </div>
        </div>
    </header>
  )
}

export default Header