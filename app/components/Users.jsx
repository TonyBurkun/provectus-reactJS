var React = require('react'),
    Nav = require('Nav'),
    usersList = require('usersList'),
    User = require('User');

var Users = React.createClass({

    getInitialState: function () {
        return {
            isLoading: false,
            users: {},
            errorMessage: undefined
        };
    },

    componentDidMount: function () {
        var that = this;
        usersList.getUsersList().then(function (response) {
            that.setState({
                users: response,
                isLoading: true
            });
        }, function (error) {
            that.setState({
                isLoading: false,
                errorMessage: error.message
            });
            alert(errorMessage);
        });

    },


    render: function () {

        var {users, isLoading} = this.state;

        function renderUsers() {
            if (isLoading) {
                return users.map(function (item) {
                    return (
                        <User key={item.id} {...item}/>

                    )
                })
            }
        }

        return (
            <section>
                <Nav/>
               <div className="container">
                   <div className="table-responsive">
                       <table className="table">
                           <thead>
                           <tr>
                               <th>#</th>
                               <th>Name</th>
                               <th>Email</th>
                               <th>Phone</th>
                           </tr>
                           </thead>
                           <tbody>
                           {renderUsers()}
                           </tbody>
                       </table>
                   </div>
               </div>
            </section>
        )
    }
});

module.exports = Users;