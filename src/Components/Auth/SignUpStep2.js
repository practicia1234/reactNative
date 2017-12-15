import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { fieldChange } from '../../actions';
import { Button, Section, Input } from '../Helpers';

class SignUpStep2 extends Component {
  // Navigator information for this component
  static navigationOptions = {
    title: 'Sign Up [Step-2]',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 24,
      paddingRight: 50,
      alignSelf: 'center'
    },
  };

  // on email change call this method
  onFieldChange(e, text) {
    const fieldInfo = {
      actionType: e.actionType,
      value: text
    };
    this.props.fieldChange(fieldInfo); // fieldChange is the action creator
  }

  // Render start
  render() {
    //const { navigate } = this.props.navigation;
    const { userInfo } = this.props.navigation.state.params;
    console.log(this.props);
    // render will return some dom
    return (
      <View style={styles.contaoner}>
        <Text style={styles.headerText}> {userInfo.showText} </Text>
        <Section>
          <Input
            placeholder="email@gmail.com"
            onChangeText={this.onFieldChange.bind(this, { actionType: 'EMAIL_CHANGED' })}
            value={this.props.email}
          />
        </Section>
        <Section>
          <Input
            secureTextEntry
            placeholder="Password"
            onChangeText={this.onFieldChange.bind(this, { actionType: 'PASSWORD_CHANGED' })}
            value={this.props.password}
          />
        </Section>
        <Section>
          <Input
            placeholder="First Name"
            onChangeText={this.onFieldChange.bind(this, { actionType: 'FIRST_NAME' })}
            value={this.props.firstName}
          />
        </Section>
        <Section>
          <Input
            placeholder="Last Name"
            onChangeText={this.onFieldChange.bind(this, { actionType: 'LAST_NAME' })}
            value={this.props.lastName}
          />
        </Section>
        <Section>
          <Button style={styles.buttonLogin}>Submit</Button>
        </Section>
      </View>
    );
  }
}

const styles = {
  contaoner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#9DDAEE',
    flex: 1,
    padding: 10,
  },
  inputStyle: {
    height: 50,
    borderColor: '#BBBBBB',
    borderWidth: 0.7,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
};

const mapStateToProps = ({ auth }) => {
  return auth;
};

export default connect(mapStateToProps, { fieldChange })(SignUpStep2);
