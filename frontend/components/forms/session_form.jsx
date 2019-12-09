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

    render() {

        // Ternary for the header

        // Ternary for the First / Last name fields

        // Ternary for bottom message
        // "Already have a TreeBnB account? Log in"
        // "Don't have an account? Sign up"

        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.email}
                        placeholder="Email Address" 
                        onChange={this.handleUpdate("email")} />
                    <label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleUpdate("password")}/>
                    </label>
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default SessionForm;