import React,{createContext, Dispatch, useReducer, useContext} from 'react'

interface Props {

}


const AuthStateContext =  createContext(undefined)

const AuthContextProvider: React.FC<Props> = ({children}) => {
        return <div>{children}</div>
}

export default AuthContextProvider