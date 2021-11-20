import React from 'react'
import {NavLink} from 'react-router-dom'

//Import custom button
import Button from '../Button'

interface Props {

}

const Navbar: React.FC<Props> = () => {
        return <header className="head">
            <div className="head__section">
               <div className="head__logo">
                   <NavLink to='/' >
                       <h2 className="header header--logo">AwesomeShop</h2>
                   </NavLink>
               </div>
               <div className="head__search">
                   <div className="search-input">
                       <input type="text" className="search" placeholder='Search' />
                   </div>
                   <Button className='btn--search'>SEARCH</Button>
               </div>
               <nav className="head__navbar">
                   <ul className="navbar">
                       <div className="navbar__lists"></div>
                       <div className="navbar__profile">
                           <Button className='btn--sign'>Sign In</Button>
                           <Button className='btn--sign'>Sign Up</Button>
                       </div>
                   </ul>
               </nav>

            </div>

        </header>
}

export default Navbar