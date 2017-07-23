var React = require('react'),
    Nav = require('Nav');


var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        )
    }

});

module.exports = Main;