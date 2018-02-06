"use strict";

var React = require("react");
var Link = require("react-router").Link;

var Page_404 = React.createClass({
    render: function() {
        return (
            <div>
                <h1>404 Page Not Found</h1>
                <p>Whoops! Sorry, there nothing to see here.</p>
                <p><Link to="app">Back to home</Link></p>
            </div>
        );
    }
});

module.exports = Page_404;