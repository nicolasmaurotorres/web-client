import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
if (localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken); // for realoding 
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}


ReactDOM.render(
<Provider store={store}>
    <Routes />
</Provider>, document.getElementById('root'));

registerServiceWorker();