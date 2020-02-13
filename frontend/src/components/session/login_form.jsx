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
                        <h1>Log In</h1>
                        <h2>The Doctor Will Be In Soon</h2>
                        <form onSubmit={this.handleLogin} className="signupForm">
                            <div className={classes.inputContainer}>
                                <input 
                                    type="text" 
                                    value={this.state.email}   
                                    onChange={this.update('email')} 
                                    placeholder="Email"
                                />
                                <input 
                                    type="password" 
                                    value={this.state.password} 
                                    onChange={this.update('password')} 
                                    placeholder="Password"
                                />
                   
                                <button
                                    type="submit"
                                    className={classes.loginbtn}>
                                    <span>Log in!</span>
                                </button>
                                <button
                                    type="submit"
                                    className={classes.loginbtn}>
                                    <span>Demo User</span>
                                </button>
                        
                                <div className={classes.errors}>

                                    {this.renderErrors()}

                                </div>

                            </div>
                        </form>
                    </div>
                    <div className={classes.toSignIn}>
                        <h1>New Patient?</h1>
                        <h2>If you dont't have an account, sign up here!</h2>
                        <Link to={"/signup"}>
                            <button className={classes.loginbtn}><span>Sign Up!</span></button>
                        </Link>


                    </div>
                </div>
            </div>
            
        );
    }
}

export default withRouter(LoginForm);