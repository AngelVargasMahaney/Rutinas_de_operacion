import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'native-base';
import { Avatar, Layout } from '@ui-kitten/components';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { tareaRutinariasOpcionesBd } from '../services/areasLista';
import { DataTable } from 'react-native-paper';

const Screen2 = () => {
  const [tareasOpciones, setTareasOpciones] = useState([])
  const traerTareasOpciones = () => {
    setTareasOpciones(tareaRutinariasOpcionesBd)
  }
  return (
    <>
      <TemplateVersion2 />
      <Layout style={styles.container} level='1'>
        <View>
          {/* <Text style={styles.tittlesStyle}>
            <Avatar
              shape={"square"}
              size='tiny'
              style={{ width: 10, height: 10 }}
              source={require('../../assets/icons/Rectangle_orange.png')}
            />
            Número de Personas que realizan la actividad
          </Text> */}
          <DataTable>
            <></>
          </DataTable>
        </View>
      </Layout>
    </>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10
  },
  tittlesStyle: {
    fontSize: 16,
    color: '#01286B',
    fontWeight: '400'
  },
});
