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
            <div className={classes.signupContainer}>
                <div className={classes.toLogIn}>
                    <h1>Welcome Back</h1>
                    <h2>If you already have an account, log in here!</h2>
                </div>
                <div className={classes.signupFrom}>
                    <p>form</p>
                </div>
            </div>
          </div>
        );
    }

}

export default withRouter(SignupForm);
