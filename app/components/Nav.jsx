var React = require('react'),
    {Link, IndexLink} = require('react-router'),
    Logout = require('Logout');

var Nav = React.createClass({

    // handleTap: function () {
    //     var isTokenExist = localStorage.getItem('auth_token');
    //
    //     if (isTokenExist) {
    //         localStorage.removeItem('auth_token');
    //         window.location.hash = '/';
    //     } else {
    //         window.location.hash = '/login';
    //     }
    // },

    render: function () {
        var isTokenExist = localStorage.getItem('auth_token');
        var showUsersItem = function () {
            if (isTokenExist) {
                return (
                    <li>
                        <Link to="/users" className="navbar-right navbar-link" activeClassName='active'>Users</Link>
                    </li>
                )
            }
        };

        var showButton = function () {
            if (isTokenExist) {
                return (
                    <Logout/>
                )

            } else {
                return (
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/login" className="navbar-right navbar-link" activeClassName='active' >Login</Link>
                        </li>
                        <li>
                            <Link to="/registration" className="navbar-right navbar-link" activeClassName='active' >Registration</Link>
                        </li>
                    </ul>
                )

            }
        };


        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <span className="navbar-brand">
                            Provectus Test
                        </span>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-left">
                            <li>
                                <IndexLink to="/" className="navbar-right navbar-link" activeClassName='active'>News</IndexLink>
                            </li>
                            {showUsersItem()}
                        </ul>
                        {showButton()}
                    </div>

                </div>
            </nav>

        )
    }
});

module.exports = Nav;