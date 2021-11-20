import React from 'react'

//Import custom button
import Button from '../Button'

//Import custom Input with error hamndler
import Input from '../Input'

//Import react hook form
import {useForm} from 'react-hook-form'

interface Props {

}

const Signup: React.FC<Props> = () => {

        const{register,errors, handleSubmit} = useForm<{
            username: string,
            email : string,
            password: string
        }>()

        const handleSignup = handleSubmit((data)=>{
            console.log(data)
        })

        return <>
        <div className="backdrop"></div>

        <div className="modal modal--auth-form">
            <div className="modal-close">&times;</div>


          <h3 className="header--center paragraph--orange">
              Sign up to aswesomeshop
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

                <Button width='100%' style={{margin: '0.5rem 0'}}>Submit</Button>
            </form>
        </div>
        </>
}

export default Signup