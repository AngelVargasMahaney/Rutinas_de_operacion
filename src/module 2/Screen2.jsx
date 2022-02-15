import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Box, FlatList, HStack, ScrollView, Spacer, VStack } from 'native-base';
import { Avatar, Layout } from '@ui-kitten/components';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { tareaRutinariasOpcionesBd } from '../services/areasLista';
import ItemScreen2 from './ItemScreen2';

const Screen2 = () => {

  const [tareasOpciones, setTareasOpciones] = useState([])
  const traerTareasOpciones = () => {
    setTareasOpciones(tareaRutinariasOpcionesBd)
  }
  useEffect(() => {
    traerTareasOpciones()
  }, [])


  return (
    <>
      <TemplateVersion2 />
      <Layout style={styles.container} level='1'>
        <View style={{ justifyContent: 'center'}}>
          {/* <Text style={styles.tittlesStyle}>
            <Avatar
              shape={"square"}
              size='tiny'
              style={{ width: 10, height: 10 }}
              source={require('../../assets/icons/Rectangle_orange.png')}
            />
            Número de Personas que realizan la actividad
          </Text> */}

          <FlatList data={tareasOpciones} renderItem={({ item }) =>
            <>
              <ItemScreen2 item={item}/>
              {/* <ItemScreen2 item={item} text={'Personal de Antapaccay'} tipoItem={1} />
              <ItemScreen2 item={item} text={'Contratistas'} tipoItem={1} />
              <ItemScreen2 item={item} text={'Ambas Personas'} tipoItem={2} />
              <ItemScreen2 item={item} text={'Frecuencia'} tipoItem={2} />
              <ItemScreen2 item={item} text={'N° Veces al Día'} tipoItem={1} />
              <ItemScreen2 item={item} text={'N° Veces a la Semana'} tipoItem={1} />
              <ItemScreen2 item={item} text={'N° Veces al Mes'} tipoItem={1} />
              <ItemScreen2 item={item} text={'Tiempo de cada Acción (horas)'} tipoItem={1} />
              <ItemScreen2 item={item} text={'Horas Turno por Persona'} tipoItem={1} /> */}
            </>
          }
            keyExtractor={item => item.idTareOpciones} />

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
    fontWeight: '400',

  },
});
