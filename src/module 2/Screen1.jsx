import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Screen1 = () => {
  return (
    <View style={styles.Screen1Style}>
      <Text>Screen 1</Text>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  Screen1Style: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
