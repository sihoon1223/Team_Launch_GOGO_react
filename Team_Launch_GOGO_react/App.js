import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';

import MainStack from './components/navigation/MainStack';
import LoadingScreen from './components/screen/LoadingScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    // loading screen (splash view) 0.5 second
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
  }

  render() {
    const {isLoading} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          {isLoading ? <LoadingScreen /> : <MainStack />}
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  statusBar: {
    backgroundColor: '#fcfcfc',
  },
});
