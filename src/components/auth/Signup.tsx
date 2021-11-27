import React from 'react'

//Import custom button
import Button from '../Button'

//Import custom Input with error hamndler
import Input from '../Input'

//Import custom hook from state/modal-context
import { useModalContext } from '../../state/modal-context'

//Import react hook form
import { useForm } from 'react-hook-form'
import { SignupData, Provider } from '../../types/index'

//Import custom hooks
import { useAuthenticate } from '../hooks/index'

//Import fontAwesome Brand Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {

}

const Signup: React.FC<Props> = () => {
    const { setModalType } = useModalContext()
    const { signup, loading, error, socialLogin } = useAuthenticate()
    const { register, errors, handleSubmit } = useForm<SignupData>()

    const handleSignup = handleSubmit((data) => {
        // console.log(data)
        signup(data)
    })

    const handleSocialLogin = async (provider: Provider) => {
        // const response = await signup(data)

        // if(response) setModalType('close')

        socialLogin(provider)
    }


    return <>
        <div className="backdrop"  ></div>

        <div className="modal modal--auth-form">
            <div className="modal-close" onClick={() => setModalType('close')} >&times;</div>


            <h3 className="header--center paragraph--orange">
                Sign up to Aswesomeshop
            </h3>

            {/* Social media signup  */}

            <div className="social">
                <Button
                    className='social-btn social-btn--fb'
                    width='100%'
                    height='3rem'
                    onClick={() => handleSocialLogin('facebook')}
                >
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} size='1x' />
                    <span>Login with Facebook</span>
                </Button>
            </div>
            <div className="social">
                <Button
                    className='social-btn social-btn--google'
                    width='100%'
                    height='3rem'
                    onClick={() => handleSocialLogin('google')}
                >
                    <FontAwesomeIcon icon={['fab', 'google']} size='1x' />
                    <span>Login with Google</span>
                </Button>
            </div>

            <hr></hr>
            <p className="paragraph--center paragraph--focus paragraph--small">
                Or sign up with an email
            </p>


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

                <Button loading={loading} width='100%' style={{ margin: '0.5rem 0' }}>Submit</Button>
            </form>
            {error && <p className='paragraph paragraph--error'>{error}</p>}
            <p className="paragraph paragraph--focus paragraph--small">
                Already have an account?{' '}
                <span
                    className="paragraph--orange paragraph--link"
                    onClick={() => setModalType("signin")}
                >
                    Sign in
                </span>{' '}
            </p>
        </div>
    </>
}

export default Signup