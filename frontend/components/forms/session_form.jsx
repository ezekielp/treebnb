import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            emailInputBorderFocused: false,
            passwordInputBorderFocused: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.logInWithDemoUser = this.logInWithDemoUser.bind(this);
        this.toggleEmailInputBorderColor = this.toggleEmailInputBorderColor.bind(this);
        this.togglePasswordInputBorderColor = this.togglePasswordInputBorderColor.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let { email, password, first_name, last_name } = this.state;
        let userObject = this.props.formType === "Log in" ? { email, password } : { email, password, first_name, last_name };
        this.props.submitForm(userObject)
            .then(() => this.props.closeModal());
    }

    handleUpdate(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    logInWithDemoUser() {
        this.props.loginDemoUser()
            .then(() => this.props.closeModal());
    }

    toggleEmailInputBorderColor() {
        this.setState({ emailInputBorderFocused: !this.state.emailInputBorderFocused });
    }

    togglePasswordInputBorderColor() {
        this.setState({ passwordInputBorderFocused: !this.state.passwordInputBorderFocused });
    }

    render() {

        let { formType, openModal } = this.props;

        // Conditonal for top error message (trying to book without being logged in)

        // Conditionals for rendering errors
        let errors;
        if (this.props.errors) {
            errors = this.props.errors;
        } else {
            errors = {};
        }
        let emailErrors = errors.email ? <div>{errors.email}.</div> : <></>;
        let passwordErrors = errors.password ? <div>{errors.password}.</div> : <></>;
        let firstNameErrors = errors.first ? <div>{errors.first}.</div> : <></>;
        let lastNameErrors = errors.last ? <div>{errors.last}.</div> : <></>;


        // Conditional for bottom message
        let bottomMessage;
        if (formType === 'Sign up') {
            bottomMessage = (
                <div className="session-message">
                    Already have a Treebnb account?
                    <span className="blue-link-text" onClick={() => openModal('Log in')}>Log in</span>
                </div>
            )
        } else {
            bottomMessage = (
                <div className="session-message">
                    Don't have an account?
                    <span className="blue-link-text" onClick={() => openModal('Sign up')}>Sign up</span>
                </div>
            )
        }


        // Conditionals for input container border color class
        let emailInputBorderColorClass = this.state.emailInputBorderFocused ? "input-outline-blue" : "";
        let passwordInputBorderColorClass = this.state.passwordInputBorderFocused ? "input-outline-blue" : "";


        // Conditional for the First / Last name fields
        let nameFields, signUpTransferButton, messageContainer;

        if (formType === 'Sign up') {
            if (this.props.message) {
                messageContainer = this.props.message;
                nameFields = <></>;
                signUpTransferButton =
                    <>
                        <div
                            id="sign-up-with-email-btn"
                            className="session-form-submit-btn"
                            onClick={() => openModal('Sign up')}>
                            <i className="far fa-envelope sign-up-with-email-envelope"></i>
                            <div>Sign up with Email</div>
                        </div>
                    </>;
            } else {
                messageContainer = <></>;
                nameFields =
                    <>
                        <input
                            className="session-form-input"
                            type="text"
                            placeholder="First name"
                            value={this.state.first_name}
                            onChange={this.handleUpdate("first_name")} />
                        <div className="error-message">
                            {firstNameErrors}
                        </div>
                        <input
                            className="session-form-input"
                            type="text"
                            placeholder="Last name"
                            value={this.state.last_name}
                            onChange={this.handleUpdate("last_name")} />
                        <div className="error-message">
                            {lastNameErrors}
                        </div>
                    </>;
                signUpTransferButton = <></>
            }
        } else {
            nameFields = <></>;
            signUpTransferButton = <></>;
            messageContainer = <></>;
        }

        let actualSessionForm =
            <form onSubmit={this.handleSubmit}>
                <div
                    id={`${emailInputBorderColorClass}`}
                    className={`session-form-input email-input`}
                >
                    <input
                        type="email"
                        value={this.state.email}
                        placeholder="Email Address"
                        onChange={this.handleUpdate("email")}
                        onFocus={() => this.toggleEmailInputBorderColor()}
                        onBlur={() => this.toggleEmailInputBorderColor()} />
                    <i className="far fa-envelope"></i>
                </div>
                <div className="error-message">
                    {emailErrors}
                </div>
                {nameFields}
                <div
                    id={`${passwordInputBorderColorClass}`}
                    className={`session-form-input email-input`}>
                    <input
                        type="password"
                        value={this.state.password}
                        placeholder={"Password"}
                        onChange={this.handleUpdate("password")}
                        onFocus={() => this.togglePasswordInputBorderColor()}
                        onBlur={() => this.togglePasswordInputBorderColor()} />
                    <i className="fas fa-lock"></i>
                </div>
                <div className="error-message">
                    {passwordErrors}
                </div>
                <input
                    className="session-form-submit-btn"
                    type="submit"
                    value={formType} />
            </form>;

        if (this.props.message) {
            actualSessionForm = <></>;
        }

        return (
            <div className="session-container">
                {messageContainer}
                <button
                    onClick={this.logInWithDemoUser}
                    className="session-form-demo-btn">
                    Login with demo user
                </button>
                <div className="session-form-or-container">
                    <hr/>
                </div>
                {actualSessionForm}
                {signUpTransferButton}
                <div className="bottom-message">
                    {bottomMessage}
                </div>
            </div>
        )
    }
}

export default SessionForm;