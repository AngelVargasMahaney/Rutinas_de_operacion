import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Screen2 = () => {
  return (
    <View style={styles.Screen1Style}>
      <Text>Screen 2</Text>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  Screen1Style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
