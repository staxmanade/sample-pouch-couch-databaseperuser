import React from 'react';

export default class LoginStatus extends React.Component {

    constructor(props) {
        super(props);
        this.refreshState = this.refreshState.bind(this);
        this.state = {
            loggedIn: null
        };
    }

    componentDidMount() {
        this.refreshState();

        this.props.authService.on('remoteDatabaseConnectionChange', this.refreshState);
    }

    refreshState() {
        this.props.authService.getCurrentUser().then(user => {
            this.setState({
                loggedIn: !!user.name,
                user: user
            });
        }, err => {
            this.setState({
                loggedIn: false,
                errorMessage: JSON.stringify(err, null, '  ')
            });
        })
    }

    render() {

        var visualState = "checking...";
        var visualStateStyle = { backgroundColor: "yellow" };
        if (this.state.loggedIn === false) {

            if (this.state.errorMessage) {
                visualState = this.state.errorMessage;
            } else {
                visualState = "Not logged in.";
            }
            visualStateStyle = { backgroundColor: "red" };
        } else if (this.state.loggedIn === true) {
            visualState = `${this.state.user.name} is logged in.`;
            visualStateStyle = { backgroundColor: "green" };
        }

        return (
            <div>
                <fieldset style={{ maxWidth: 400 }}>
                    <legend>Loggin status: </legend>
                    <code style={visualStateStyle}>{visualState}</code>
                    <br />
                    <code>{JSON.stringify(this.state.user, null, '  ')}</code>
                    <br />
                    {this.state.loggedIn ? <button onClick={this.props.onLogout}>Logout</button> : null}
                    <button onClick={this.refreshState}>Reload Status</button>
                </fieldset>
            </div>
        );
    }
}