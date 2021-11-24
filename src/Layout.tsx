import React from 'react'
import Navbar from './components/Nav/Navbar'
import Sidebar from './components/Nav/Sidebar'

import {useModalContext} from './state/modal-context'

interface Props {

}

const Layout: React.FC<Props> = ({children}) => {
      const {modal} =  useModalContext()
        return <div>
          <Navbar/>
          <Sidebar/>

          <div className="page">{children}</div>
            {modal && modal}
        </div>
}

export default Layout