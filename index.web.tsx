import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import data from './app.json';

AppRegistry.registerComponent(data.name, () => App);

AppRegistry.runApplication(data.name, {
    rootTag: document.getElementById('react-native-web-app'),
});