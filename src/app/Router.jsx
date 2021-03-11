import { Router as BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from '../pages/HomePage';
import ResultsPage from '../pages/ResultsPage';
import RepositoryPage from '../pages/RepositoryPage';

const history = createBrowserHistory();

const Routes = {
    home: '/',
    search: '/search/page=:page',
    repository: '/results/:login/:name'
}

function Router() {
     return (
         <BrowserRouter history={history}>
            <Switch>
                <Route exact path={Routes.home} component={HomePage} />
                <Route exact path={Routes.search} component={ResultsPage} />
                <Route path={Routes.repository} component={RepositoryPage} />
                <Route render={() => <Redirect to={Routes.home} />} />
            </Switch>
         </BrowserRouter>
     )
 }

export default Router