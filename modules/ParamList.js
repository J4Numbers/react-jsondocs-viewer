import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * The ParamList component is a worker method for when we're dealing with the parameters of functions (both global
 * and class). We take the function parameters, and return them in a nicely-dressed-up fashion.
 *
 * @param props
 * @returns {XML}
 */
export default (props) =>
{
    const listItems = [];
    for (var item in props.func_params)
    {
        listItems.push(
            <li key={props.func_params[item]['name'] + '_' + item.toString()}>
                {item.toString()} => &lt; {props.func_params[item]['name']} | {props.func_params[item]['type']} &gt;
                <ReactMarkdown source={props.func_params[item]['desc']} />
            </li>
        );
    }
    return (
        <ul>{listItems}</ul>
    );
};