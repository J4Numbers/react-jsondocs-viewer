import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// This is the main navigation between global functions, global variables, and classes.
import NavBar from './modules/NavBar';

// Home screen. Probably with some flavour.
import Home from './modules/Home';

//A list of all global variables in the documentation
import Variables from './modules/Variables';

// A list of all global functions in the documentation
import Functions from './modules/Functions';

// A list of all classes in the documentation
import Classes from './modules/Classes';

// The method for importing all the data that we parse through
import {read_docs} from './modules/Reader';


require('@babel/polyfill');

async function screen_render() {
    //Read in the JSON documentation
    let data = await read_docs('/json/docs.json');

    //Pass the documentation to all other routes.
    render(
        <BrowserRouter>
            <div>
                <Route path="/" component={NavBar} />
                <div className="row" style={{ marginRight: 0, marginLeft: 0}}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/variables" component={ (props, state, params) => <Variables json={data} /> } />
                        <Route path="/functions" component={ (props, state, params) => <Functions json={data} /> } />
                        <Route path="/classes" component={ (props, state, params) => <Classes json={data} /> } />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>,
      document.getElementById('root')
    );
}

//Do the thing.
screen_render();
