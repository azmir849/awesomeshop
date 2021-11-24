import React from 'react'

//Import custom button
import Button from '../Button'

//Import auth-context api
import {useAuthContext} from '../../state/auth-context'

//Import DropDowns
import ClientDropDown from './ClientDropDown'
import AdminDropDown from './AdminDropDown'

interface Props {

}

const UserDropDown: React.FC<Props> = () => {
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
                    <ClientDropDown/>


                    {/* Admin users */}
                   <AdminDropDown/>

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

export default UserDropDown