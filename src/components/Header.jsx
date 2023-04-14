import React from 'react'

const Header = ({title, image, children}) => {
  return (
    <header className='header'>
      <div className="header_container">
        <div className="header_container-bg">
          <img src={image} alt='Header Background Pic'/>
        </div>
        <div className="header_content">
          <h3>{title}</h3>
          <p>{children}</p>
        </div>
      </div>
    </header>
  )
}

export default Header