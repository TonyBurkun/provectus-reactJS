var React = require('react'),
    {Link} = require('react-router');

var Login = React.createClass({
    onSubmit: function (event) {
        event.preventDefault();

        let email = this.refs.loginEmail.value,
            password = this.refs.loginPassword.value;

        if (email && password){

            if (!localStorage[email]){
                alert('The user does not exist');
                window.location.hash = '/registration';
            } else if (localStorage[email] === password){
                this.refs.loginEmail.value = '';
                this.refs.loginPassword.value = '';

                var currentDate = new Date;
                localStorage.setItem('auth_token', currentDate.getTime());
                window.location.hash = '/';
            } else {
                this.refs.loginPassword.value = '';
                alert('The password is incorrect');
            }



        }

    },

    render: function () {
        return (
            <section className="login-form identification-block">
                <div className="container">
                    <form ref='loginForm' className="identification-block__form col-xs-12" onSubmit={this.onSubmit}>
                        <h1 className="identification-block__title">Login</h1>
                        <div className="form-group">
                            <input ref='loginEmail' type="email" className="form-control" placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <input ref='loginPassword' type="password" className="form-control" placeholder="Password" required/>
                        </div>
                        <div className="form-group identification-block__buttons">
                            <button type="submit" className="btn btn-primary">Log in</button>
                            <Link to="/registration" className="btn btn-default">Registration</Link>
                        </div>

                    </form>
                </div>
            </section>
        )
    }
});

module.exports = Login;