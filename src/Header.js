import React from 'react';
import './App.css'
import Parentsilder from './Silder/Parentsilder';
function Header(props) {
  return (
    <div className='Header'>
      <div>
        <Parentsilder  />
      </div>
    </div>
  )

}

export default Header;