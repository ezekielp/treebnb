import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.logInWithDemoUser = this.logInWithDemoUser.bind(this);
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

    render() {

        let { formType, openModal } = this.props;

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
        let loginErrors = errors.invalid ? <div>{errors.invalid}.</div> : <></>;

        // Conditional for the First / Last name fields
        let nameFields;
        if (formType === 'Sign up') {
            nameFields = 
            <>
                <input
                    className="session-form-input"
                    type="text"
                    placeholder="First name"
                    value={this.state.first_name} 
                    onChange={this.handleUpdate("first_name")}/>
                <div className="error-message">
                    {firstNameErrors}
                </div>
                <input
                    className="session-form-input"
                    type="text"
                    placeholder="Last name"
                    value={this.state.last_name}
                    onChange={this.handleUpdate("last_name")}/>
                <div className="error-message">
                    {lastNameErrors}
                </div>
            </>
        } else {
            nameFields = <></>
        }

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

        return (
            <div className="session-container">
                <button
                    onClick={this.logInWithDemoUser}
                    className="session-form-demo-btn">
                    Login with demo user
                </button>
                <div className="session-form-or-container">
                    <hr/>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="session-form-input email-input">
                        <input
                            type="email"
                            value={this.state.email}
                            placeholder="Email Address" 
                            onChange={this.handleUpdate("email")} />
                        <i className="far fa-envelope"></i>
                    </div>
                    <div className="error-message">
                        {emailErrors}
                    </div>
                    {nameFields}
                    <div className="session-form-input password-input">
                        <input
                            type="password"
                            value={this.state.password}
                            placeholder={"Password"}
                            onChange={this.handleUpdate("password")}/>
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="error-message">
                        {passwordErrors}{loginErrors}
                    </div>
                    <input
                        className="session-form-submit-btn" 
                        type="submit"
                        value={formType}/>
                </form>
                <div className="bottom-message">
                    {bottomMessage}
                </div>
            </div>
        )
    }
}

export default SessionForm;