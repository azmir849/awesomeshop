import React from "react";

//Import custom button
import Button from "../Button";

//Import custom Input with error hamndler
import Input from "../Input";

//Import custom hook from state/modal-context
import { useModalContext } from "../../state/modal-context";

//Import react hook form
import { useForm } from "react-hook-form";
import { SignupData } from "../../types/index";

//Import custom hooks
import { useAuthenticate } from "../hooks/index";

interface Props { }

const Signin: React.FC<Props> = () => {
    const { setModalType } = useModalContext();
    const { signin, loading, error } = useAuthenticate();
    const { register, errors, handleSubmit } =
        useForm<Omit<SignupData, "username">>();

    const handleSignin = handleSubmit(async (data) => {
        const response = await signin(data);

        if (response) setModalType("close");

        // console.log(data)
        // signup(data)
        // window.alert('Submitted successfully')
        // setModalType('close')
    });

    return (
        <>
            <div className="backdrop"></div>

            <div className="modal modal--auth-form">
                <div className="modal-close" onClick={() => setModalType("close")}>
                    &times;
                </div>

                <h3 className="header--center paragraph--orange">
                    Sign in to Aswesomeshop
                </h3>

                <form className="form" onSubmit={handleSignin}>
                    <Input
                        label="Email"
                        name="email"
                        placeholder="Your Email"
                        error={errors.email?.message}
                        ref={register({
                            required: "Email is required",
                            // pattern: {
                            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            //     message: 'Your email is in wrong format'
                            // }
                        })}
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Your Password"
                        error={errors.password?.message}
                        ref={register({
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                            maxLength: {
                                value: 50,
                                message: "Password must not be greater than 50 characters",
                            },
                        })}
                    />

                    <Button loading={loading} width="100%" style={{ margin: "0.5rem 0" }}>
                        Submit
                    </Button>
                </form>
                {error && <p className="paragraph paragraph--error">{error}</p>}
                <p className="paragraph paragraph--focus paragraph--small">
                    Don't have an account yet?{" "}
                    <span
                        className="paragraph--orange paragraph--link"
                        onClick={() => setModalType("signup")}
                    >
                        Sign up
                    </span>
                </p>

                <p className="paragraph paragraph--focus paragraph--small">
                    Forgot your password? Click{" "}
                    <span
                        className="paragraph--orange paragraph--link"
                        onClick={() => setModalType("reset_password")}
                    >
                        here
                    </span>
                </p>
            </div>
        </>
    );
};

export default Signin;
