import React, { Component } from 'react';

class Nav extends Component {


    render() {
        return (
            <nav className="nav-wrap">
                <h1 className="nav-title">SJH To Do List</h1>
                <span className="nav-count">Success Count : {this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Nav;