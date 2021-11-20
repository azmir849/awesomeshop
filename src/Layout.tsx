import React from 'react'
import Navbar from './components/Nav/Navbar'

interface Props {

}

const Layout: React.FC<Props> = ({children}) => {
        return <div>
          <Navbar/>

          <div className="page">{children}</div>
            </div>
}

export default Layout