import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableWithoutFeedback, Dimensions, Modal, Button, View, Text } from 'react-native';

import ImagePicked from '../components/ImagePicked';

export default class HomeScreen extends React.Component {
    state = {
      modalVisible: false,
      modalImage: require('../img/1.jpg'),
      images: [
        require('../img/1.jpg'),
        require('../img/2.jpg'),
        require('../img/3.jpg'),
        require('../img/4.jpg'),
        require('../img/5.jpg'),
        require('../img/6.jpg'),
        require('../img/7.jpg'),
        
      ]
    }
    setModalVisible(visible, imageKey) {
      this.setState({ modalImage: this.state.images[imageKey] }); 
      this.setState({ modalVisible: visible });
    }
    getImage() {
      return this.state.modalImage;
    }
  render() {
    const images = this.state.images.map((val, key) => {
      return <TouchableWithoutFeedback key={key}
        onPress={() => {this.setModalVisible(true, key)}}>
        <View style={styles.imagewrap}>
          <ImagePicked imgsource={val}></ImagePicked>
        </View>
      </TouchableWithoutFeedback>
    });

    return (
      <View style={styles.container}>
        {images}
      </View>
    );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height / 4.35) - 12,
    width: (Dimensions.get('window').width / 2)  -4,
    backgroundColor: '#fff',
  }
});

AppRegistry.registerComponent('ImageGallery', () => ImageGallery);
 

