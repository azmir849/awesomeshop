import React from 'react'
import  MainNav from './components/Nav/MainNav'
import UserDropDown from './components/Nav/UserDropDown'

import {useModalContext} from './state/modal-context'

interface Props {

}

const Layout: React.FC<Props> = ({children}) => {
      const {modal} =  useModalContext()
        return <div>
          <MainNav/>
          <UserDropDown/>

          <div className="page">{children}</div>
            {modal && modal}
        </div>
}

export default Layout