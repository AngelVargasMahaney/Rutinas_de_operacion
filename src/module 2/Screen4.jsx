import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { DataTable } from 'react-native-paper';
import { Avatar, Button, Layout } from '@ui-kitten/components';
import TemplateVersion2 from '../Template/TemplateVersion2';
const Rectangle_orange = require('../../assets/icons/Rectangle_orange.png')

const Screen4 = () => {

  const [porcentajeCumplimiento, setPorcentajeCumplimiento] = useState('10%')

  const [buttonState, setButtonState] = useState(true)

  return (
    <>
      <TemplateVersion2 />
      <Layout style={styles.container} level=''>
        <View >
          <DataTable style={{ borderWidth: 1, borderColor: "#01286b" }}>
            <DataTable.Header style={{ backgroundColor: '#01286b' }} >
              <DataTable.Title >
                <Text style={{ color: '#ffffff', fontSize: 14 }}>RESUMEN DE LAS TAREAS REALIZADAS</Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row style={{ borderBottomWidth: 1, borderBottomColor: "#01286b" }} >
              <DataTable.Cell style={{ borderRightWidth: 1, borderRightColor: "#01286b" }}>
                <Text
                  style={styles.tittlesStyle, { color: '#01286b', fontSize: 13 }}
                  numberOfLines={3}
                ><Avatar
                  shape={"square"}
                  size={"tiny"}
                  style={{ width: 10, height: 10 }}
                  source={Rectangle_orange} >
                  </Avatar> AREA</Text></DataTable.Cell>
              <DataTable.Cell numeric style={{
                marginRight: -20,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}><Text numberOfLines={3} style={styles.tittlesStyle, { color: '#01286b', fontSize: 12 }}>
                  Chancado Primario</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{ borderBottomWidth: 1, borderBottomColor: "#01286b" }} >

              <DataTable.Cell style={{ borderRightWidth: 1, borderRightColor: "#01286b" }}>
                <Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 13 }}>
                  <Avatar
                    shape={"square"}
                    size={"tiny"}
                    style={{ width: 10, height: 10 }}
                    source={Rectangle_orange} >
                  </Avatar> SUB PROCESO</Text></DataTable.Cell>
              <DataTable.Cell numeric style={{
                marginRight: -20,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}><Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 12 }}>
                  Operación sala control chancado</Text></DataTable.Cell>
            </DataTable.Row >

            <DataTable.Row style={{ borderBottomWidth: 1, borderBottomColor: "#01286b" }} >

              <DataTable.Cell style={{ borderRightWidth: 1, borderRightColor: "#01286b" }} >
                <Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 13 }}>
                  <Avatar
                    shape={"square"}
                    size={"tiny"}
                    style={{ width: 10, height: 10 }}
                    source={Rectangle_orange} >
                  </Avatar> CANTIDAD DE TAREAS DEL SUB PROCESO</Text></DataTable.Cell>
              <DataTable.Cell numeric style={{
                marginRight: -20,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}><Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 12 }}>10</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{ borderBottomWidth: 1, borderBottomColor: "#01286b" }} >

              <DataTable.Cell style={{ borderRightWidth: 1, borderRightColor: "#01286b" }} >
                <Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 13 }}><Avatar
                  shape={"square"}
                  size={"tiny"}
                  style={{ width: 10, height: 10 }}
                  source={Rectangle_orange} >
                </Avatar> HORAS TOTALES DE TURNO POR PERSONA</Text></DataTable.Cell>
              <DataTable.Cell numeric style={{
                marginRight: -20,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}><Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 12 }}>11.84</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{ borderBottomWidth: 1, borderBottomColor: "#01286b" }} style={{ border: "1px solid #01286b" }}>

              <DataTable.Cell style={{ borderRightWidth: 1, borderRightColor: "#01286b" }} >
                <Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 13 }}><Avatar
                  shape={"square"}
                  size={"tiny"}
                  style={{ width: 10, height: 10 }}
                  source={Rectangle_orange} >
                </Avatar> % DE CUMPLIMIENTO DE TAREAS DEL SUB PROCESO</Text></DataTable.Cell>
              <DataTable.Cell

                numeric style={{
                  marginRight: -20,
                  flex: 0.45,
                  justifyContent: 'center',
                  alignItems: 'center',

                }}><Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 12, left: 10 }}>{porcentajeCumplimiento}</Text></DataTable.Cell>
            </DataTable.Row>

          </DataTable>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <View style={{ alignSelf: 'center', marginTop: 150 }}>
            <Button style={[styles.button, {
              backgroundColor: '#01286B',
            }, { color: 'white' }, { marginBottom: 25 }]}>
              Atrás
            </Button>
            <Button style={[styles.button, {
              backgroundColor: '#ea3e18',
            }, { color: 'white' }, { marginBottom: 25 }]}>
              Guardar
            </Button>
          </View>
        </View>
      </Layout>
    </>
  );
}

export default Screen4;

const styles = StyleSheet.create({
  Container: {
    paddingTop: 20,
  },
  container: {
    justifyContent: 'center',
    margin: 20
  },
  button: {
    borderRadius: 40,
    width: 200,
    height: 42,
    backgroundColor: '#01286B'
  },
});
