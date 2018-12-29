import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * The NavBar component handles the top-level navigation bar between variables, functions, and classes.
 *
 * @param props
 */
export default (props) => (
    <div>
        <nav className="navbar navbar-inverse navbar-static-top" style={{ marginBottom: 0 }}>
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">InformDocs</a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><NavLink exact to="/" activeStyle={{color: 'red'}}>Home</NavLink></li>
                        <li><NavLink to="/variables" activeStyle={{color: 'red'}}>Variables</NavLink></li>
                        <li><NavLink to="/functions" activeStyle={{color: 'red'}}>Functions</NavLink></li>
                        <li><NavLink to="/classes" activeStyle={{color: 'red'}}>Classes</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
        {props.children}
    </div>
);
