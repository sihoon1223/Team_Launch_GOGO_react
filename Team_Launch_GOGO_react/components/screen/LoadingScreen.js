import React from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';

export default function loading() {
  return Platform.OS === 'web' ? (
    <View>
      <Text style={styles.text_web}>Loading</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>팀점긔긔</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer_text}>
          Copyright 2020 팀점긔긔. All rights reserved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#fcfcfc',
  },
  title: {
    marginTop: 200,
    backgroundColor: 'pink',
  },
  title_text: {fontSize: 50},
  text_web: {
    color: '#2c2c2c',
    fontSize: 20,
  },
  footer: {},
  footer_text: {
    fontSize: 12,
    color: 'gray',
  },
});
