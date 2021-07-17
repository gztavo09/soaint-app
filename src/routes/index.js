import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState';

import Layout from '../layouts/master-page'
import Home from '../pages/inicio';
import Detail from '../pages/detail';
import Success from '../pages/success'
import ErrorPage from '../pages/error'

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/detail/:id" component={Detail} />
                        <Route exact path="/success" component={Success} />
                        <Route component={ErrorPage} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;