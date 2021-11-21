import React,{createContext, Dispatch, ReactElement, SetStateAction, useEffect, useState} from 'react'
import Signup from '../components/auth/Signup'

interface Props {

}

type ModalType = 'close' | 'signup' | 'signin' | 'reset_password'

type ModalState = {
    modal: ReactElement | null
    setModalType: Dispatch<SetStateAction<ModalType>>
}

type Modals = {
    [key in ModalType]: ReactElement | null
}

const ModalContext =  createContext<ModalState | undefined>(undefined)

const modals: Modals = {
    close: null,
    signup: <Signup />,
    signin: null,
    reset_password: null
}

const ModalContextProvider: React.FC<Props> = ({children}) => {
    const[modal,setModal]=useState<ReactElement | null>(null)
    const[modalType,setModalType] = useState<ModalType>('close')

    useEffect(() => {
        setModal(modals[modalType])
    }, [modalType])

        return <ModalContext.Provider value={{modal, setModalType}} >{children}</ModalContext.Provider>
}

export default ModalContextProvider