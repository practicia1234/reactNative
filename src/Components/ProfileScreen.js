
import React, { Component } from 'react';
import {
  Button,
} from 'react-native';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Home Screen"
        onPress={() =>
          navigate('Home', { name: 'Jane' })
        }
      />
    );
  }
}

export default ProfileScreen;
