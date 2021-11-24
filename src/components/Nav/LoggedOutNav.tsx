import React from 'react'

//Import custom button
import Button from '../Button'

//Import modal context hook from state
import {useModalContext} from '../../state/modal-context'


interface Props {

}

const LoggedOutNav: React.FC<Props> = () => {
   const {setModalType} = useModalContext()

        return (
                   <ul className="navbar">
                       <div className="navbar__profile">
                            <Button className='btn--sign'>Sign In</Button>
                           <Button className='btn--sign' onClick={()=> setModalType('signup')}  >Sign Up</Button>
                       </div>
                   </ul>

        )
               
}

export default LoggedOutNav