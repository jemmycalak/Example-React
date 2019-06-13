import {AppRegistry} from 'react-native';
import React from 'react';
import App from './components/App';
import {name as appName} from './app.json';

//import for redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './components/src/reducers';

//set for register redux
const store = createStore(reducer);
const AppContainer = () =>
    <Provider store={store}>
        <App/>
    </Provider>;

AppRegistry.registerComponent(appName, () => AppContainer);
