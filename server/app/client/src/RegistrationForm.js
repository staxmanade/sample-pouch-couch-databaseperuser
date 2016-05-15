import React from 'react';

export default class RegistrationForm extends React.Component {
    register(e) {
        e.preventDefault();

        // Get values via this.refs
        var data = {
            username: this.refs.username.value,
            password: this.refs.password.value,
            email: this.refs.email.value,
        };

        this.props.onRegister(data);
    }
    render() {

        return <div>
            <fieldset style={{ maxWidth: 400 }}>
                <legend>Register New Account: </legend>

                {this.props.registrationError ? (<div style={{ color: "red" }}>{this.props.registrationError}</div>) : null}
                <label>Username: </label>
                <input type="text" ref="username" defaultValue={this.props.name} />
                <br />
                <br />

                <label>Password: </label>
                <input type="password" ref="password" defaultValue={this.props.password} />
                <br />
                <br />

                <label>Email: </label>
                <input type="email" ref="email" defaultValue={this.props.email} />
                <br />
                <br />

                <button onClick={this.register.bind(this) }>Save and Continue</button>
            </fieldset>
        </div>
    }
}