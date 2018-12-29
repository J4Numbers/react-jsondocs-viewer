import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * The ReturnField class takes information about the return field of a function (global or class), and returns a
 * nicely formatted XML structure that can be shown to the users.
 *
 * @param props
 * @returns {XML}
 */
export default (props) =>
{
    if (!props.func_returns)
    {
        return <p></p>;
    }
    else
    {
        return (
            <p>
                <span style={{fontWeight: 'strong'}}>Returns:</span> &lt; {props.func_returns['type']} &gt;
                <ReactMarkdown source={props.func_returns['desc']} />
            </p>
        );
    }
};
