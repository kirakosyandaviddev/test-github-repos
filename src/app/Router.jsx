import { Router as BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from '../pages/HomePage';
import ResultsPage from '../pages/ResultsPage';

const history = createBrowserHistory();

const Routes = {
    home: '/',
    results: '/results'
}

function Router() {
     return (
         <BrowserRouter history={history}>
            <Switch>
                <Route exact path={Routes.home} component={HomePage} />
                <Route path={Routes.results} component={ResultsPage} />
                <Route render={() => <Redirect to={Routes.home} />} />
            </Switch>
         </BrowserRouter>
     )
 }

export default Router