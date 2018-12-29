import React from 'react';
import ReactMarkdown from 'react-markdown';

import NamedVariableList from './NamedVariableList';

/**
 * The Variable component describes a single global variable within the context of the documentation. If the variable
 * doesn't exist, we don't show anything, but otherwise, we show its name, type, and description.
 *
 * @param props
 * @param state
 * @param params
 * @returns {XML}
 */
export default (props, state, params) => {
    if (!props.json['variables'][props.match.params.variableName])
    {
        return (
            <div></div>
        );
    }
    else
    {
        return (
            <NamedVariableList jsonList={props.json['variables'][props.match.params.variableName]} />
        );
    }
};
