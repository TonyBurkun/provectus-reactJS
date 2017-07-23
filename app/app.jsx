var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    Main = require('Main'),
    Login = require('Login'),
    Registration = require('Registration'),
    Users = require('Users'),
    Posts = require('Posts');


// App css
require('style!css!sass!applicationStyles');

var requireLogin = function (nextState, replace, next) {
    var isTokenExist = localStorage.getItem('auth_token');
    if (!isTokenExist) {
        replace('/login');
    }
    next();
};

var redirectIfLoggedIn = function (nextState, replace, next) {
    var isTokenExist = localStorage.getItem('auth_token');

    if (isTokenExist) {
        replace('/users');
    }
    next();
};


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="users" component={Users} onEnter={requireLogin}/>
            <Route path="registration" component={Registration}/>
            <Route path="login" component={Login} onEnter={redirectIfLoggedIn}/>
            <IndexRoute component={Posts}/>
        </Route>
    </Router>,

    document.getElementById('app')
);
