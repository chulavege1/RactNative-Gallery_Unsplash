import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Import pages libery
import Navigation from './Navigation/index';
// Redux
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return <Navigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App