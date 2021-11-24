import React from 'react'
import {NavLink} from 'react-router-dom'

//Import custom button
import Button from '../Button'


//Import auth context hook from state
import {useAuthContext} from '../../state/auth-context'


//Import LoggedInNav and LoggedOutNav 
import LoggedInNav from './LoggedInNav'
import LoggedOutNav from './LoggedOutNav'



interface Props {

}

const MainNav: React.FC<Props> = () => {
   const {authState: {authUser}} = useAuthContext()


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
                {!authUser ? <LoggedOutNav/> : <LoggedInNav/>}
               </nav>

            </div>

        </header>
}

export default MainNav