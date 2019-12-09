import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.logInWithDemoUser = this.logInWithDemoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let { email, password, firstName, lastName } = this.state;
        let userObject = this.props.formType === "Log in" ? { email, password } : { email, password, firstName, lastName };
        this.props.submitForm(userObject);
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

        let { formType } = this.props;

        // Conditional for the First / Last name fields
        let nameFields;
        if (formType === 'Sign up') {
            nameFields = 
            <>
                <input
                    type="text"
                    placeholder="First name"
                    value={this.state.firstName} />
                <input
                    type="text"
                    placeholder="Last name"
                    value={this.state.firstName} />
            </>
        } else {
            nameFields = <></>
        }

        // Ternary for bottom message
        // "Already have a TreeBnB account? Log in"
        // "Don't have an account? Sign up"

        return (
            <div>
                <button onClick={this.logInWithDemoUser}>
                    Login with demo user
                </button>
                <p>or</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.email}
                        placeholder="Email Address" 
                        onChange={this.handleUpdate("email")} />
                    {nameFields}
                    <input
                        type="password"
                        value={this.state.password}
                        placeholder={}
                        onChange={this.handleUpdate("password")}/>
                    <input type="submit" value={formType}/>
                </form>
            </div>
        )
    }
}

export default SessionForm;