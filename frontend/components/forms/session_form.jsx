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
        this.props.loginDemoUser();
    }

    render() {

        let { formType, openModal } = this.props;

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
                <input
                    className="session-form-input"
                    type="text"
                    placeholder="Last name"
                    value={this.state.last_name}
                    onChange={this.handleUpdate("last_name")}/>
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
                    <span onClick={() => openModal('Log in')}> Log in</span>
                </div>
            )
        } else {
            bottomMessage = (
                <div className="session-message">
                    Don't have an account?
                    <span onClick={() => openModal('Sign up')}> Sign up</span>
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
                    <input
                        className="session-form-input"
                        type="email"
                        value={this.state.email}
                        placeholder="Email Address" 
                        onChange={this.handleUpdate("email")} />
                    {nameFields}
                    <input
                        className="session-form-input"
                        type="password"
                        value={this.state.password}
                        placeholder={"Password"}
                        onChange={this.handleUpdate("password")}/>
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