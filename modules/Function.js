import React from 'react'
import ReactMarkdown from 'react-markdown'

import NamedFunctionList from './NamedFunctionList'

/**
 * The Function component describes a single global function. If the function does not exist, then we don't show
 * anything, but if it does, we show the name, description, parameter list, and the return descriptor.
 *
 * @param props
 * @param state
 * @param params
 * @returns {XML}
 */
export default (props, state, params) => {
    if (!props.json['functions'][props.match.params.functionName])
    {
        return (
            <div></div>
        );
    }
    else
    {
        return (
            <NamedFunctionList jsonList={props.json['functions'][props.match.params.functionName]} />
        );
    }
}
