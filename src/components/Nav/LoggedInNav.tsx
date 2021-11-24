import React from 'react'
import {NavLink} from 'react-router-dom'

//Import fonawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

//Import auth context api
import {useAuthContext, openUserDropDown} from '../../state/auth-context'



interface Props {

}

const LoggedInNav: React.FC<Props> = () => {
    const {authDispatch} = useAuthContext()
        return (
            <ul className="navbar">
                <div className="navbar__lists">
                    <li className="list list--cart">
                        <NavLink to='/buy/my-cart'>
                            <FontAwesomeIcon icon={['fas','cart-arrow-down']} color='white' size='lg' />
                        </NavLink>
                        <div className="cart-qty">0</div>
                    </li>
                 </div>

                <div className="navbar__profile">
                 <div className='profile'>
                        <FontAwesomeIcon 
                        onMouseOver={()=> authDispatch(openUserDropDown(true)) }
                        icon={['fas','user-circle']} 
                        color='white' 
                        size='2x' />
                    </div>
                </div>
            </ul>

        )
              
          
}

export default LoggedInNav