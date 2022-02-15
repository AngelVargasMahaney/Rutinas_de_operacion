import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { Avatar, Layout } from '@ui-kitten/components';
import { Box, Button, TextArea } from 'native-base';

const Screen3 = () => {


  const [botonSi, setBotonSi] = useState(false)
  const [botonNo, setBotonNo] = useState(false)

  const verificarSeleccion = () => {

  }
  useEffect(() => {

  }, [botonSi, botonNo])


  const [activado, setActivado] = useState(false)
  const [textAreaValue, setTextoIngresado] = useState('')

  const ValueControllerTextInput = e => {
    setTextoIngresado(e.currentTarget.value);
  };

  console.log(botonSi);
  return (
    <>

      <TemplateVersion2 />
      <ScrollView>
        <Layout style={styles.container} level='1'>
          <View>
            <Text style={styles.tittlesStyle}>
              <Avatar
                shape={"square"}
                size='tiny'
                style={{ width: 10, height: 10 }}
                source={require('../../assets/icons/Rectangle_orange.png')}
              /> ¿Se completó la tarea rutinaria?
            </Text>
            <View style={styles.grupoSiRow}>
              <View style={styles.grupoSi}>
                <Button style={{backgroundColor:botonSi ? "#56ff85":"#ececec"}}
                onPress={()=>{
                  setBotonSi(true)
                  setBotonNo(false)
                }}>
                  SI
                </Button>
              </View>
              <View style={styles.grupoNoDirection}></View>
              <View style={styles.grupoNo}>
                <Button style={{backgroundColor:botonNo ? "#ff4e4e":"#ececec"}}
                onPress={()=>{
                  setBotonNo(true)
                  setBotonSi(false)
                }}>
                  NO
                </Button>
              </View>
            </View>

          </View>
        </Layout>
        {botonSi ?
          (
          <> 
            <Layout style={styles.container} level='1'>
              <Text style={styles.tittlesStyle}>
                <Avatar
                  shape={"square"}
                  size='tiny'
                  style={{ width: 10, height: 10 }}
                  source={require('../../assets/icons/Rectangle_orange.png')} /> Comentarios:
              </Text></Layout>
            <Box alignItems="center" w="100%">
              <TextArea placeholder="Escribe aqui..." value={textAreaValue} onChange={ValueControllerTextInput} w="75%" maxW="300" />
            </Box></>
          ) : null
        }
        {botonNo ?
          (
          <> 
            <Layout style={styles.container} level='1'>
              <Text style={styles.tittlesStyle}>
                <Avatar
                  shape={"square"}
                  size='tiny'
                  style={{ width: 10, height: 10 }}
                  source={require('../../assets/icons/Rectangle_orange.png')} /> Justificación/Observaciones:
              </Text></Layout>
            <Box alignItems="center" w="100%">
              <TextArea placeholder="Escribe aqui..." value={textAreaValue} onChange={ValueControllerTextInput} w="75%" maxW="300" />
            </Box></>
          ) : null
        }
      </ScrollView>
    </>
  );
};

export default Screen3;


const styles = StyleSheet.create({
  tittlesStyle: {
    fontSize: 15,
    color: '#01286B',
  },
  container: {
    justifyContent: 'center',
    margin: 30
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // filter: 'grayscale(100%)',

    width: 100,
    height: 100,
  },
  grupoSi: {
    width: "30%",
    marginLeft: 50,
    marginBottom: 10
  },
  buttonSi: {
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 14,
    justifyContent: "center",
    flex: 1
  },
  opciones: {
    color: "rgba(161,161,161,1)",
    fontSize: 30,
    alignSelf: "center"
  },
  grupoNoDirection: {
    flex: 1,
  },
  grupoNo: {
    width: "30%",
    marginRight: 50,
  },
  buttonNo: {
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 14,
    justifyContent: "center",
    flex: 1
  },
  grupoSiRow: {
    height: 76,
    flexDirection: "row",
    marginTop: 20,
    marginRight: 2
  }
});

