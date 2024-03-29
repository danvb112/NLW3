import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import landing from './pages/landing'
import OrphanagesMap from './pages/orphanagesMap'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={landing} />
                <Route exact path='/app' component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;