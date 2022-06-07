import React, { useContext } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { IconContext } from 'react-icons';

import { AuthContext } from '../../helpers';
import { SidebarData } from './navbar-data';
import './navbar.css';

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (currentUser) ?
   (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        
        <nav className='nav-menu active'>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>   
            </li>
            {SidebarData.map((item, index) => {
              return item.allowedRoles.includes(currentUser.role) ?
               (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                   
                  </Link>
                </li>
              ) : null;
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  ) : navigate('/');
}

export default Navbar;