import React from 'react'

//Import Navlink
import {NavLink} from 'react-router-dom'

//Import custom button
import Button from '../Button'

//Import auth-context api
import {useAuthContext} from '../../state/auth-context'

interface Props {

}

const Sidebar: React.FC<Props> = () => {
    const {authState: {authUser}} = useAuthContext()
    
        return <div className="page page--sidebar">
            <div className="backdrop">
                <div className="sidebar sidebar-show">
                    <div className="sidebar__section sidebar__section--profile">
                        <h3 className="header--center header--sidebar">
                            {authUser?.displayName}
                        </h3>
                        <h3 className="header--center header--sidebar">
                            {authUser?.email}
                        </h3>
                    </div>
                    {/* Client user */}
                    <div className="sidebar__section sidebar__section--nav">
                        <li className="list">
                            <NavLink to='/products' className='list-link' >
                                PRODUCTS
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink to='/buy/my-cart' className='list-link' >
                               MY CART
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink to='/orders/my-orders' className='list-link' >
                                MY ORDERS
                            </NavLink>
                        </li>
                    </div>
                    {/* Admin users */}
                    {/* <div className="sidebar__section"></div>
                    <div className="sidebar__section"></div> */}

                    {/* Logout */}
                    <div className="sidebar__section">
                        <Button className='btn--sidebar-signout'>Sign out</Button>
                    </div>

                    {/* Close Sidebar */}
                    <div className="sidebar__section">
                        <Button className='sidebar__close'>&times;</Button>
                    </div>
                </div>
            </div>
        </div>
}

export default Sidebar