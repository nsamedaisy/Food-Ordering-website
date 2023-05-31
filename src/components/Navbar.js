import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false)
  const menuOptions = [
    {
      text: 'Home',
    },
    {
      text: 'About',
    },
    {
      text: 'Menu',
    },
    {
      text: 'Contact',
    },
    {
      text: 'Cart',
    },
  ];

  return (
    <nav>
      <div classname = 'nav-logo-container'>
        {/* <img src = {logo} alt='' /> */}
      </div>
      <div className= 'navbar-links-container' >
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/cart'>Cart</Link>
        <button className ='primary-button'>
          Order Now
        </button>
      </div>
      <div className='navbar-menu-container'>
        <bars onClick ={() => setOpenMenu(true)} />
      </div>
    </nav>
  )
}

export default Navbar