import React from 'react'
import logo from '../assets/Group 2.png'
import rocket from '../assets/Vector.png'
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
        <nav className='bg-color'>
          <div className="logo"><img src={logo} alt="Company logo" /></div>
          <div className="menu">
            <ul>
              <li className='txt-primary'>Home</li>
              <li className='txt-secondary'>Ecosystem</li>
              <li className='txt-secondary'>About Us</li>
              <li className='txt-secondary'>News</li>
              <li className='txt-secondary'>Contact</li>
              <li className='txt-secondary'>Winners</li>
            </ul>
          </div>
          <div className="launch">
            <button className='btn-secondary' onClick={()=> navigate('/launch')}>Launch App <img src={rocket} alt="Company logo" /></button>
          </div>
        </nav>

        
    </div>
  )
}

export default Navbar