import React from 'react';
import { withRouter } from 'react-router-dom';
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
            this.props.history.push('/login');
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

            <div className={classes.signupContainer}>
                <iframe width="1" height="1" src="https://www.youtube.com/embed/q4k1IK_o59M?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className={classes.background}></div>

                <form onSubmit={this.handleSubmit} className={classes.signupForm}>
                    <div className={classes.inputContainer}>

                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className={classes.emailInput}
                        />
                        <br />
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                            className={classes.usernameInput}
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className={classes.passwordInput}
                        />
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                            className={classes.passwordInput}
                        />
                        <br />
                        <input type="submit" value="GET YOUR PRESCRIPTION" className={classes.signupSubmit} />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }

    // render() {
    //     return (
    //         <div className="signup-form-container">
    //             <form onSubmit={this.handleSubmit}>
    //                 <div className="signup-form">
    //                     <br />
    //                     <input type="text"
    //                         value={this.state.email}
    //                         onChange={this.update('email')}
    //                         placeholder="Email"
    //                     />
    //                     <br />
    //                     <input type="text"
    //                         value={this.state.username}
    //                         onChange={this.update('username')}
    //                         placeholder="Username"
    //                     />
    //                     <br />
    //                     <input type="password"
    //                         value={this.state.password}
    //                         onChange={this.update('password')}
    //                         placeholder="Password"
    //                     />
    //                     <br />
    //                     <input type="password"
    //                         value={this.state.password2}
    //                         onChange={this.update('password2')}
    //                         placeholder="Confirm Password"
    //                     />
    //                     <br />
    //                     <input type="submit" value="Submit" />
    //                     {this.renderErrors()}
    //                 </div>
    //             </form>
    //         </div>
    //     );
    // }
}

export default withRouter(SignupForm);