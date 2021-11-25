import React from 'react'

//Import custom button
import Button from '../Button'

//Import custom Input with error hamndler
import Input from '../Input'

//Import custom hook from state/modal-context
import {useModalContext} from '../../state/modal-context'

//Import react hook form
import {useForm} from 'react-hook-form'
import { SignupData } from '../../types/index'

//Import custom hooks
import{useAuthenticate} from '../hooks/index'

interface Props {

}

const ResetPassword: React.FC<Props> = () => {
        const {setModalType} = useModalContext()
        const {loading,error} = useAuthenticate()
        const{register,errors, handleSubmit} = useForm<Omit<SignupData, 'username' | 'password'>>()

        const handleResetPassword = handleSubmit( async (data)=>{
            // const response = await signin(data)

            // if(response) setModalType('close')

            // console.log(data)
            // signup(data)
            // window.alert('Submitted successfully')
            // setModalType('close')
        })

       
        return <>
        <div className="backdrop"  ></div>

        <div className="modal modal--auth-form">
            <div className="modal-close" onClick={()=> setModalType('close') } >&times;</div>


          <h3 className="header--center paragraph--orange">
              Sign in to Aswesomeshop
          </h3>

            <form className="form" onSubmit={handleResetPassword}>    
            <Input 
                label='Email'
                name="email"
                placeholder='Your Email' 
                error={errors.email?.message}
                ref={register({  
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Your email is in wrong format'
                    }

                    }
                )}
                />         

                <Button loading={loading} width='100%' style={{margin: '0.5rem 0'}}>Submit</Button>
            </form>

            {error && <p className='paragraph paragraph--error'>{error}</p>}
        </div>
        </>
}

export default ResetPassword