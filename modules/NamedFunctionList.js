import React from 'react'
import ReactMarkdown from 'react-markdown'

import ParamList from './ParamList'
import ReturnField from './ReturnField'

/**
 * The NamedFunctionList exists to print out information on many functions which
 * share the same name within the codebase
 * 
 * @param props
 * @return {XML}
 */
export default (props) =>
{
    const listItems = [];
    for (let item in props.jsonList)
    {
        listItems.push(
            <div className="jumbotron" key={props.jsonList[item]['name'].toString() + '_' + item}>
                <h3>{props.jsonList[item]['name']}</h3>
                <ReactMarkdown source={props.jsonList[item]['desc']} />
                <h4>Params</h4>
                <ParamList func_params={props.jsonList[item]['params']} />
                <h4>Returns</h4>
                <ReturnField func_returns={props.jsonList[item]['return']} />
            </div>
        );
    }
    return (
        <div>{listItems}</div>
    );
}
