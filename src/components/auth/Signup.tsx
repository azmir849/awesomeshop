import React from 'react'

//Import custom button
import Button from '../Button'

interface Props {

}

const Signup: React.FC<Props> = () => {
        return <>
        <div className="backdrop"></div>

        <div className="modal modal--auth-form">
            <div className="modal-close">&times;</div>


          <h3 className="header--center paragraph--orange">
              Sign up to aswesomeshop
          </h3>

            <form className="form">
                <div className="form__input-container">
                    <label htmlFor="username" className="form__input-label">
                        Username
                    </label>
                    <input type="text" name="username" className="input" placeholder="Your Username" />
                </div>
                <div className="form__input-container">
                <label htmlFor="email" className="form__input-label">
                        Email
                    </label>
                    <input type="email" name="email" className="input" placeholder="Your Email" />
                </div>
                <div className="form__input-container">
                <label htmlFor="password" className="form__input-label">
                        Password
                    </label>
                    <input type="password" name="password" className="input" placeholder="Your Password" />
                </div>

                <Button width='100%' style={{margin: '0.5rem 0'}}>Submit</Button>
            </form>
        </div>
        </>
}

export default Signup