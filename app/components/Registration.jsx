var React = require('react'),
    {Link} = require('react-router');

var Registration = React.createClass({

    onSubmit: function (event) {
        event.preventDefault();

        let registerEmail = this.refs.registerEmail.value,
            registerPassword = this.refs.registerPassword.value,
            registerConfirmPassword = this.refs.registerConfirmPassword.value;

        if (registerEmail && registerPassword && registerConfirmPassword) {
            if (registerPassword === registerConfirmPassword) {

                if (!localStorage[registerEmail]){
                    localStorage[registerEmail] = registerPassword;
                    alert('The user was created successfully. Use login form in order to log in');
                    this.refs.registerEmail.value = '';
                    this.refs.registerPassword.value = '';
                    this.refs.registerConfirmPassword.value = '';
                } else {
                    alert('The user has already existed');
                }

                window.location.hash = '/login';
            } else {
                alert('Entered passwords are not equal');
                this.refs.registerPassword.value = '';
                this.refs.registerConfirmPassword.value = '';
            }
        }


    },
    render: function () {
        return (
            <section className="registration-form identification-block">
                <div className="container">
                    <form ref='registerForm' className="identification-block__form col-xs-12" onSubmit={this.onSubmit}>
                        <h1 className="identification-block__title">Registration</h1>
                        <div className="form-group">
                            <input ref='registerEmail' type="email" className="form-control" placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <input ref='registerPassword' type="password" className="form-control" placeholder="Password" required/>
                        </div>
                        <div className="form-group">
                            <input ref='registerConfirmPassword' type="password" className="form-control" placeholder="Confirm Password" required/>
                        </div>
                        <div className="form-group identification-block__buttons">
                            <button type="submit" className="btn btn-primary">Registration</button>
                            <Link to="/login" className="btn btn-default">Log in</Link>
                        </div>

                    </form>
                </div>
            </section>
        )
    }
});

module.exports = Registration;