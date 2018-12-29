import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import Variable from './Variable';

/**
 * The VariableList component displays a list of all the global variables that are available, along with a link to said
 * variables where the user can peruse them at their own will.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const VariableList = (props) =>
{
    const listItems = [];
    // Get a list of keys that make up all of our functions
    let key_list = props.json;
    // And sort on the keys.
    for (let item in key_list.sort())
    {
        listItems.push(
            <li key={key_list[item].toString()}>
                <NavLink to={'/variables/' + key_list[item].toString()} activeStyle={{ color: 'red' }}>
                    <abbr title={key_list[item].toString()} >{key_list[item].toString()}</abbr>
                </NavLink>
            </li>
        );
    }
    return (
        <ul>{listItems}</ul>
    );
};

/**
 * The Variables component describes all the global variables that are available within the current documentation,
 * along with the routing information for further detail.
 *
 * @param parent_props
 * @param parent_state
 * @param parent_params
 * @returns {XML}
 */
class Variables extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ''};
    }

    render() {
        //Filter all classes to what we search for.
        const filteredResults = Object.keys(this.props.json['variables']).filter(createFilter(this.state.searchTerm));
        return (
            <div>
                <div className="col-xs-3 listings">
                    <h2>Variables</h2>
                    <SearchInput className="search-input" onChange={(term) => this.setState({searchTerm: term})}/>
                    <VariableList json={filteredResults}/>
                </div>
                <div className="col-xs-9 container" style={{paddingTop:'10px'}}>
                    <Route path="/variables/:variableName" component={
                        (child_props, child_state, child_params) => <Variable {...this.props} {...child_props} />
                    }/>
                </div>
            </div>
        );
    }

}

export default Variables;
