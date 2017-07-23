var React = require('react');

var User = React.createClass({
    render: function () {
        var {id, name, email, phone} = this.props;

        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
            </tr>
        )
    }
});

module.exports = User;