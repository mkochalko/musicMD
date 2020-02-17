import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import classes from './signup.module.css';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.signup(user, this.props.history);
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
        return (
        <div className={classes.page}>
                <div className={classes.mainlogo}>
                    <img src="/images/logo2white.png"></img>
                </div>
            <div className={classes.signupContainer}>
                <div className={classes.toLogIn}>
                    <h1>Returning Patient?</h1>
                    <h2>If you already have an account, log in here!</h2>
                        <Link to={"/"}>
                            <button className={classes.loginbtn}><span>Log In!</span></button>
                        </Link>
                </div>
                <div className={classes.signupFrom}>
                        <h1>Create Account</h1>
                        <h2>And come see the Music Doctor</h2>
                        <form onSubmit={this.handleSubmit} className={classes.form}>
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
                                ><span>Sign Up!</span></button>
                                <div className={classes.errors}>

                                    {this.renderErrors()}

                                </div>

                            </div>
                        </form>
                </div>
            </div>
          </div>
        );
    }

}

export default withRouter(SignupForm);
