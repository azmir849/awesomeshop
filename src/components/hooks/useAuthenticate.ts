//Import auth context api
import {useAuthContext, openUserDropDown} from '../../state/auth-context'

import {useAsyncCall} from './useAsyncCall'
import { SignupData } from "../../types"

//Import firebase
import { auth } from '../../firebase/config'

export const useAuthenticate = () => {
        const {authState:{isUserDropDownOpen},authDispatch} =   useAuthContext()
        const {loading, setLoading, error, setError, successMsg, setSuccessMsg} =  useAsyncCall()
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

    const signin = async (data: Omit<SignupData, 'username'>) => {
        const{email,password} = data
        try {
        const response =  await auth.signInWithEmailAndPassword(email,password)

        if(!response) {
            setError('Sorry, Something went wrong')
            setLoading(false)
            return
        }

        return response
        } catch (err) {
            const {message} = err as {message: string}

            setError(message)
            setLoading(false)
        }
    }

    const resetPassword = (data: Omit<SignupData, 'username' | 'password'>) => {
        setLoading(true)

        auth.sendPasswordResetEmail(data.email).then(() => {
            setSuccessMsg('Please check your mail to reset your password')
            setLoading(false)

        }).catch(err =>{
            const {message} = err as {message: string}

            setError(message)
            setLoading(false)
        })
    }

    return {signup, signin, signout, loading, error, resetPassword, successMsg}

}