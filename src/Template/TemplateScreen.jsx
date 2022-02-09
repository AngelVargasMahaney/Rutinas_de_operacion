import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";


const image = require('../../assets/backgrounds/Pantalla_login.png')
const logo_color = require('../../assets/logos/Logo_color.png')
function TemplateScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.rutOp}>RUT-OP</Text>
      <View style={styles.rutOpFiller}></View>
      <Image
        source={logo_color}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  rutOp: {
    fontFamily: "roboto-700",
    color: "rgba(1,40,107,1)",
    fontSize: 30,
    marginLeft: 25,
    marginTop: 81
  },
  rutOpFiller: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    width: 146,
    height: 96,
    marginRight: 26,
    marginTop: 51
  }
});

export default TemplateScreen;