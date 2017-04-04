import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class App extends Component {
  constructor(props) {
    console.log('THIS IS PROPS',props);
    super(props);
    this.state = {
      getprops: this.props.name,
    }
  }

    componentDidMount() {
      this.props.initialName
    }
  render() {
    return(
      <View>
        <Text>THIS IS VIEW </Text>
      </View>
    );
  }
}
