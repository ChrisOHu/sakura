import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions
} from 'react-native'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    window.fetch = fetch
  }

  componentDidMount() { }

  render() {
    const { status } = this.state

    return (
      <View style={styles.root} >
        <Text style={styles.intro} >
          Sakura 🌸 🌞
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  intro: {
  }
})

