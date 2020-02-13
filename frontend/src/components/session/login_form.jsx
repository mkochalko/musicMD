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
            <div className={classes.page}>
                <div className={classes.signupContainer}>
       
                    <div className={classes.signupFrom}>
                        <h1>Create Account</h1>
                        <h2>And come see the Music Doctor</h2>
                        <form onSubmit={this.handleSubmit} className="signupForm">
                            <div className={classes.inputContainer}>
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update("email")}
                                    placeholder="Email"
                                    className={classes.Input}
                                />
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update("username")}
                                    placeholder="Username"
                                    className={classes.Input}
                                />
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update("password")}
                                    placeholder="Password"
                                    className={classes.Input}
                                />
                                <input
                                    type="password"
                                    value={this.state.password2}
                                    onChange={this.update("password2")}
                                    placeholder="Confirm Password"
                                    className={classes.Input}
                                />
                                <button
                                    text="slasd"
                                    type="submit"
                                    value="Sign UP for Music MD"
                                    className={classes.loginbtn}
                                ><span>Log in!</span></button>
                                <div className={classes.errors}>

                                    {this.renderErrors()}

                                </div>

                            </div>
                        </form>
                    </div>
                    <div className={classes.toLogIn}>
                        <h1>Welcome Back</h1>
                        <h2>If you already have an account, log in here!</h2>
                        <Link to={"/"}>
                            <button className={classes.loginbtn}><span>Sign Up!</span></button>
                        </Link>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default withRouter(LoginForm);