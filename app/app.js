import { Component } from 'react';
import { View, Text } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getprops: this.props.name,
    }
  }
  render() {
    return(
      <View>
        <Text>THIS IS VIEW </Text>
      </View>
    );
  }
}
