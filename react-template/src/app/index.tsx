import * as React from 'react';
import { Route, Switch } from 'react-router';
import { HomeScreen } from 'app/Containers/HomeScreen/HomeScreen';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
    <Switch>
        <Route path="/" component={HomeScreen} />
    </Switch>
));
