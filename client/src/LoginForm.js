import React from 'react';

export default class LoginForm extends React.Component {

    constructor() {
        super();

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();

        var data = {
            username: this.refs.username.value,
            password: this.refs.password.value,
        };
        this.props.onLogin(data);
    }

    render() {
        return (<div>
            <form onSubmit={this.onFormSubmit}>
                <fieldset style={{ maxWidth: 400 }}>
                    <legend>Login: </legend>
                    {this.props.loginError ? (<div style={{ color: "red" }}>{this.props.loginError}</div>) : null}
                    <label>Username: </label>
                    <input type="text" ref="username" defaultValue={this.props.name} />
                    <br />
                    <br />

                    <label>Password: </label>
                    <input type="password" ref="password" defaultValue={this.props.password} />
                    <br />
                    <br />

                    <button type="submit">Login</button>
                </fieldset>
            </form>
        </div>);
    }
}
