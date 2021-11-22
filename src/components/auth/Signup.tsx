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

const Signup: React.FC<Props> = () => {
        const {setModalType} = useModalContext()
        const {signup,loading,error} = useAuthenticate()
        const{register,errors, handleSubmit} = useForm<SignupData>()

        const handleSignup = handleSubmit((data)=>{
            console.log(data)
            signup(data)
            // window.alert('Submitted successfully')
            setModalType('close')
        })

       
        return <>
        <div className="backdrop"  ></div>

        <div className="modal modal--auth-form">
            <div className="modal-close" onClick={()=> setModalType('close') } >&times;</div>


          <h3 className="header--center paragraph--orange">
              Sign up to Aswesomeshop
          </h3>

            <form className="form" onSubmit={handleSignup}>
                <Input 
                label='Username'
                name="username"
                placeholder='Your Username' 
                error={errors.username?.message}
                ref={register({  
                    required: 'Username is required',
                    minLength: {
                        value: 3,
                        message: 'Username must be at least 3 characters'
                    },
                    maxLength: {
                        value: 20,
                        message: 'Username must not be greater than 20 characters'
                    },

                    }
                )}
                />

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
            <Input 
                label='Password'
                name="password"
                type='password'
                placeholder='Your Password' 
                error={errors.password?.message}
                ref={register({  
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                    },
                    maxLength: {
                        value: 50,
                        message: 'Password must not be greater than 50 characters'
                    },

                    }
                )}
                />

                <Button loading={loading} width='100%' style={{margin: '0.5rem 0'}}>Submit</Button>
            </form>

            {error && <p className='paragraph paragraph--error'>{error}</p>}
        </div>
        </>
}

export default Signup