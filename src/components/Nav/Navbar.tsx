import React from 'react'
import {NavLink} from 'react-router-dom'

interface Props {

}

const Navbar: React.FC<Props> = () => {
        return <header className="head">
            <div className="head__section">
                <NavLink to='/' className="list-link">Home</NavLink>
                <NavLink to='/products' className="list-link">Product</NavLink>
                <NavLink to='/buy' className="list-link">Product</NavLink>
                <NavLink to='/buy' className="list-link">Product</NavLink>
                <NavLink to='/buy' className="list-link">Product</NavLink>

            </div>

        </header>
}

export default Navbar