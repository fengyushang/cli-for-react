import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,Switch} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Home from 'views/Home';
import store from './store';
import {Provider} from 'react-redux';

export const history = createHistory();

class App extends React.Component{
    render(){
        return <div>
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/home' component={Home}/>
                    </Switch>
            </Router>
        </Provider>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

if(process.env.NODE_ENV === 'development' && module.hot){
    module.hot.accept();
}