var React = require('react'),
    {Link} = require('react-router');

var Logout = React.createClass({
    handleTap: function () {
        var isTokenExist = localStorage.getItem('auth_token');

        if (isTokenExist) {
            localStorage.removeItem('auth_token');
            window.location.hash = '/';
        }
    },

    render: function () {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link className="navbar-right navbar-link" onClick={this.handleTap}>Logout</Link>
                </li>
            </ul>

        )
    }
});

module.exports = Logout;