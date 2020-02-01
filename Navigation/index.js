import React from 'react';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );

const AppContainer = createAppContainer(RootStack);


export default class Navigation extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
