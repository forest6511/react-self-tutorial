var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// Load app.css
//require('style!css!applicationStyle') // normal css
require('style!css!sass!applicationStyle') // sass

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);
