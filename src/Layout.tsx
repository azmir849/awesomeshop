import React from 'react'
import Navbar from './components/Nav/Navbar'
import SignUp from './components/auth/Signup'

interface Props {

}

const Layout: React.FC<Props> = ({children}) => {
        return <div>
          <Navbar/>

          <div className="page">{children}</div>

          <SignUp/>
            </div>
}

export default Layout