import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './login.module.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user)
    }

    // Render the session errors if there are any
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
        let current = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
        return (
            <div className={classes.loginContainer}>
                <div className={classes.background}></div>

                <form onSubmit={this.handleSubmit}>
                    <div className={classes.inputContainer}>
                        <div className={classes.date}>{current}</div>

                        {/* <div className={classes.note}>
                            <div className={classes.musicMD}>Music MD</div>
                            <div className={classes.musicMD}>Get your prescription filled</div>
                        </div> */}
                            <div classname={classes.inputs}>
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
                       
                      
                        <input type="submit" value="GET YOUR PRESCRIPTION" className={classes.loginSubmit}/>
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);