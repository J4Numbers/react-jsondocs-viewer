import React from 'react'
import {Switch, Route, NavLink} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import NamedVariableList from './NamedVariableList'
import NamedFunctionList from './NamedFunctionList'

/**
 * The ClassVariable component describes a variable within a class. If the variable exists, then we display its
 * name, type, and description. Otherwise, we show a blank screen.
 *
 * @param props
 * @param state
 * @param params
 * @returns {XML}
 * @constructor
 */
const ClassVariable = (props, state, params) => {
    if (!props.json['classes'][props.match.params.className]['variables'][props.match.params.variableName])
    {
        return (
            <div></div>
        );
    }
    else
    {
        return (
            <NamedVariableList jsonList={props.json['classes'][props.match.params.className]['variables'][props.match.params.variableName]} />
        );
    }
};

/**
 * The ClassFunction component describes a function within a class. If the variable exists, we display its name,
 * description, a list of all its parameters (in order), and what it returns. If it doesn't exist, we don't show
 * anything.
 *
 * @param props
 * @param state
 * @param params
 * @returns {XML}
 * @constructor
 */
const ClassFunction = (props, state, params) => {
    if (!props.json['classes'][props.match.params.className]['functions'][props.match.params.functionName])
    {
        return (
            <div></div>
        );
    }
    else
    {
        return (
            <NamedFunctionList jsonList={props.json['classes'][props.match.params.className]['functions'][props.match.params.functionName]} />
        );
    }
};

/**
 * The ClassFunctionList component displays all the functions that are available within the current class by laying
 * them out into an unordered list. These are just links to the descriptions of their respective functions.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const ClassFunctionList = (props) =>
{
    const listItems = [];
    for (var item in props.json['classes'][props.match.params.className]['functions'])
    {
        listItems.push(
            <li key={item.toString()}>
                <NavLink exact to={"/classes/" + props.match.params.className.toString() + "/functions/" +
                                    item.toString()} activeStyle={{ color: 'red' }}>
                    {item.toString()}
                </NavLink>
            </li>
        );
    }
    return (
        <ul>{listItems}</ul>
    );
};

/**
 * The ClassVariableList component displays a list of all documented variables within the current class. This
 * component provides links to the description of each of these.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const ClassVariableList = (props) =>
{
    const listItems = [];
    for (var item in props.json['classes'][props.match.params.className]['variables'])
    {
        listItems.push(
            <li key={item.toString()}>
                <NavLink exact to={"/classes/" + props.match.params.className.toString() + "/variables/" +
                                    item.toString()} activeStyle={{ color: 'red' }}>
                    {item.toString()}
                </NavLink>
            </li>
        );
    }
    return (
        <ul>{listItems}</ul>
    );
};

/**
 * The Class component describes a single class. This is made up of the class name, the class description, and the
 * class variables and functions (if applicable).
 *
 * @param parent_props
 * @param parent_state
 * @param parent_params
 * @returns {XML}
 */
export default (parent_props, parent_state, parent_params) => {
    if (!parent_props.json['classes'][parent_props.match.params.className])
    {
        return (
            <div></div>
        );
    }
    else
    {
        //Resolve between function descriptions and variable descriptions within the routing.
        return (
            <div>
                <h3>{parent_props.match.params.className} (inherits {parent_props.json['classes'][parent_props.match.params.className]['inherits']})</h3>
                <ReactMarkdown source={parent_props.json['classes'][parent_props.match.params.className]['desc']} />
                <h4>Class Variables</h4>
                <ClassVariableList {...parent_props} />
                <h4>Class Functions</h4>
                <ClassFunctionList {...parent_props} />
                <Switch>
                    <Route path="/classes/:className/functions/:functionName" component={
                        (child_props, child_state, child_params) => <ClassFunction {...child_props} {...parent_props}/>
                    } />
                    <Route path="/classes/:className/variables/:variableName" component={
                        (child_props, child_state, child_params) => <ClassVariable {...child_props} {...parent_props}/>
                    } />
                </Switch>
            </div>
        );
    }
}
