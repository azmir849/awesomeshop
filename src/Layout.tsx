import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import  MainNav from './components/Nav/MainNav'
import UserDropDown from './components/Nav/UserDropDown'

import {useModalContext} from './state/modal-context'

//Import Auth context api
import {useAuthContext,openUserDropDown} from './state/auth-context'

interface Props {

}

const Layout: React.FC<Props> = ({children}) => {
    const {authState: {isUserDropDownOpen},authDispatch} = useAuthContext()
    const {modal} =  useModalContext()
    const location = useLocation()

    useEffect (()=> {
      if(isUserDropDownOpen) authDispatch(openUserDropDown(false))

    },[location.pathname])


        return <div>
          <MainNav/>
          {isUserDropDownOpen && <UserDropDown/>}

          <div className="page">{children}</div>
            {modal && modal}
        </div>
}

export default Layout