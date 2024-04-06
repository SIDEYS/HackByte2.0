import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="bg-gray-800 text-white p-4" style={{backgroundColor: '#008080'}}>
          <ul className="flex space-x-10">
            <li onClick={()=>{navigate('/profile')}}>
              Profile

              
            </li>
            <li onClick={()=>{navigate('/gor')}}>
              Give car on rent
            </li>
            <li onClick={()=>{navigate('/history')}}>
              History
            </li>
            <li onClick={()=>{navigate('/about')}}>
              About us
            </li>
            <li>
              Sign out
            </li>
          </ul>
        </nav>
      );
}

export default Navbar;
