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

const ResetPassword: React.FC<Props> = () => {
    const { setModalType } = useModalContext();
    const { loading, error, resetPassword, successMsg } = useAuthenticate();
    const { register, errors, handleSubmit } =
        useForm<Omit<SignupData, "username" | "password">>();

    const handleResetPassword = handleSubmit((data) => resetPassword(data));

    return (
        <>
            <div className="backdrop"></div>

            <div className="modal modal--auth-form">
                <div className="modal-close" onClick={() => setModalType("close")}>
                    &times;
                </div>

                <h3 className="header--center paragraph--orange">
                    Enter email to reset your password
                </h3>

                <form className="form" onSubmit={handleResetPassword}>
                    <Input
                        name="email"
                        placeholder="Your Email"
                        error={errors.email?.message}
                        ref={register({
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Your email is in wrong format",
                            },
                        })}
                    />

                    <Button loading={loading} width="100%" style={{ margin: "0.5rem 0" }}>
                        Submit
                    </Button>

                    {error && <p className="paragraph paragraph--error">{error}</p>}
                </form>

                <p className="paragraph--success">{successMsg}</p>

                <p className="paragraph paragraph--focus paragraph--small">
                    Go Back to{" "}
                    <span
                        className="paragraph--orange paragraph--link"
                        onClick={() => setModalType("signin")}
                    >
                        Sign in
                    </span>{" "}
                    page
                </p>
            </div>
        </>
    );
};

export default ResetPassword;
