import React from 'react'
import ReactMarkdown from 'react-markdown'

/**
 * The NamedVariableList exists to print information about global variables with
 * duplicated names (even though this is actually more impossible than the other
 * instance)
 * 
 * @param props
 * @return {XML}
 */
export default (props) => {
    const listItems = [];
    for (let item in props.jsonList)
    {
        listItems.push(
            <div className="jumbotron" key={props.jsonList[item]['name'].toString() + '_' + item}>
                <h3>{props.jsonList[item]['name']} | {props.jsonList[item]['type']}</h3>
                <ReactMarkdown source={props.jsonList[item]['desc']} />
            </div>
        );
    }
    return (
        <div>{listItems}</div>
    );
}
