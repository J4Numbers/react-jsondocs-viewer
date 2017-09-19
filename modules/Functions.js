import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import SearchInput, {createFilter} from 'react-search-input'
import Function from './Function'

/**
 * The FunctionList component displays a list of all the global functions that are available, along with a link to said
 * functions where the user can peruse them at their own will.
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const FunctionList = (props) =>
{
    const listItems = [];

    // Get a list of keys that make up all of our functions
    let key_list = props.json;
    // And sort on the keys.
    for (let item in key_list.sort())
    {
        listItems.push(
            <li key={key_list[item].toString()}>
                <NavLink to={"/functions/" + key_list[item].toString()} activeStyle={{ color: 'red' }} >
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
 * The Functions component describes all the global functions that are available within the current documentation,
 * along with the routing information for further detail.
 *
 * @param parent_props
 * @param parent_state
 * @param parent_params
 * @returns {XML}
 */
class Functions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ''};
    }

    render() {
        //Filter all classes to what we search for.
        const filteredResults = Object.keys(this.props.json['functions']).filter(createFilter(this.state.searchTerm));
        return (
            <div>
                <div className="col-xs-3 listings">
                    <h2>Functions</h2>
                    <SearchInput className="search-input" onChange={(term) => this.setState({searchTerm: term})}/>
                    <FunctionList json={filteredResults}/>
                </div>
                <div className="col-xs-9 container" style={{marginTop: '10px'}}>
                    <Route path="/functions/:functionName" component={
                        (child_props, child_state, child_params) => <Function {...this.props} {...child_props} />
                    } />
                </div>
            </div>
        )
    }

}

export default Functions;
