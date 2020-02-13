import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import classes from './login.module.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user)
    }

    handleDemo(e) {
        e.preventDefault();

        let user = {
            email: 'WillFerrell@gmail.com',
            password: 'AfternoonDelight',
        };

        this.props.login(user)
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let today = new Date();
        let current = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
        return (
            
            <div className={classes.loginContainer}>
                <div className={classes.background}></div>

                <form onSubmit={this.handleLogin}>
                    <div className={classes.inputContainer}>
                        <div className={classes.date}>{current}</div>

                            <div className={classes.inputs}>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email"
                                    className={classes.emailInput}
                                />
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    className={classes.passwordInput}
                                />
                            </div>
                        <input type="submit" value="GET YOUR PRESCRIPTION (LOG IN)" className={classes.loginSubmit} />
                    </div>

                </form>
                    <Link className={classes.login} to={"/signup"}>
                        <div>Sign Up</div>
                    </Link>
                <div className={classes.buttons}>
                    <form onSubmit={this.handleDemo}>
                        <input type="submit" value="EMERGENCY PRESCRIPTION (DEMO)" className={classes.demoSubmit} />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);