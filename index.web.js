import { AppRegistry } from 'react-native';
import { App } from './app/App';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('app-root')
})

