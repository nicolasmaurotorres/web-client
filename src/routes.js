import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './App';
import Greetings from './components/Greetings'
import SignupPage from './components/signup/signupPage';
import SigninPage from './components/signin/signinPage';
import NewEventPage from './components/events/NewEventPage';

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div> {/*required only 1 child as DIV*/}
                    <Route path="/" component={ App } />
                    <Route path="/" exact component={ Greetings } />

                    <Route path="/signup" exact component={ SignupPage } />
                    <Route path="/signin" exact component={ SigninPage } />
                    <Route path="/new-event" exact component={ NewEventPage } />
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;