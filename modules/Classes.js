import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import Class from './Class';

/**
 * The ClassList component displays a list of all classes that are available to be seen within the documentation, along
 * with a link to said classes where the user can peruse them at their own will.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const ClassList = (props) =>
{
    const listItems = [];
    // Get a list of keys that make up all of our classes
    let key_list = props.json;
    // And sort on the keys.
    for (let item in key_list.sort())
    {
        listItems.push(
            <li key={key_list[item].toString()}>
                <NavLink to={'/classes/' + key_list[item].toString()} activeStyle={{color: 'red'}}>
                    <abbr title={key_list[item].toString()} >{key_list[item].toString()}</abbr>
                </NavLink>
            </li>
        );
    }
    return (
        <ul>{listItems}</ul>
    );
};

function searchUpdated(term)
{
    this.setState({searchTerm: term});
}

/**
 * The Classes component displays a list of all available classes, then allows the routing to take place a step
 * further below. The routing is in three parts in order to work around the nested routes that do not allow more
 * variables to be set later down the line.
 *
 * @param parent_props
 * @param parent_state
 * @param parent_params
 * @returns {XML}
 */
class Classes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ''};
    }

    render()
    {
        //Filter all classes to what we search for.
        const filteredResults = Object.keys(this.props.json['classes']).filter(createFilter(this.state.searchTerm));

        //This contains a hack-y step to force resolution of two-stage routing. Yes, I know. I hate myself too.
        return (
            <div>
                <div className="col-xs-3 listings">
                    <h2>Classes</h2>
                    <SearchInput className="search-input" onChange={(term) => this.setState({searchTerm: term})}/>
                    <ClassList json={filteredResults}/>
                </div>
                <div className="col-xs-9 container">
                    <Switch>
                        <Route path="/classes/:className/variables/:variableName" component={
                            (child_props, child_state, child_params) => <Class {...this.props} {...child_props} />
                        }/>
                        <Route path="/classes/:className/functions/:functionName" component={
                            (child_props, child_state, child_params) => <Class {...this.props} {...child_props} />
                        }/>
                        <Route path="/classes/:className" component={
                            (child_props, child_state, child_params) => <Class {...this.props} {...child_props} />
                        }/>
                    </Switch>
                </div>
            </div>
        );
    }

}

export default Classes;
