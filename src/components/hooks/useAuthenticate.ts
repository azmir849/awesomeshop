//Import auth context api
import {useAuthContext, openUserDropDown} from '../../state/auth-context'

import {useAsyncCall} from './useAsyncCall'
import { SignupData } from "../../types"

//Import firebase
import { auth } from '../../firebase/config'

export const useAuthenticate = () => {
        const {authState:{isUserDropDownOpen},authDispatch} =   useAuthContext()
        const {loading,setLoading,error,setError} =  useAsyncCall()
        const signup = async (data: SignupData)=>{
        const {username, email, password} = data
        
        try {
            setLoading(true)
          const response =   await auth.createUserWithEmailAndPassword(email, password)

          if(response){
              auth.currentUser?.updateProfile({
                  displayName: username
              })
              setLoading(false)
              console.log('User-->',response)
          }

        } catch (err) {
            const { message } = err as {message: string}

            setError(message)
            setLoading(false)
        }

    }

    const signout = () => {
        auth.signOut().then(() => {
                if(isUserDropDownOpen) authDispatch(openUserDropDown(false))
        }).catch(err => alert('Sorry!, Something went wrong'))
    }

    return {signup,signout,loading,error}

}