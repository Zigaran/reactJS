import React, { Component } from 'react';
import { todos } from '../todos.json';


class NavBar extends Component{
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white"> 
                Tasks
                <span className="badge badge-pill badge-light ml-2"> 
                    {todos.length} 
                </span>
                </a>
             </nav>
        );
    }
}

export default NavBar;