<<<<<<< HEAD
import { StyleSheet, Text, View, useWindowDimensions, ScrollView,  } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Box, FlatList, HStack, Spacer, VStack } from 'native-base';
=======
import { StyleSheet, FlatList, Text, View, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Box, HStack, ScrollView, Spacer, VStack } from 'native-base';
>>>>>>> 8d7530af4d683d2a8fa21c0423e453c2b61f2657
import { Avatar, Button, Layout } from '@ui-kitten/components';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { tareaRutinariasOpcionesBd } from '../services/areasLista';
import ItemScreen2 from './ItemScreen2';
import NextButton from '../module 1/NextButton';
import { useNavigation } from '@react-navigation/native';

const Screen2 = (props) => {
  console.log("SOY EL SCREEN 2-> ");
  console.log(props);
  // console.log(props.route.params.value);
  // console.log(props.route.params.midataParaObjetoScreen2);
  const soyLaTarea = props.route.params.value
  let soyElObejtoTarea = props.route.params.midataParaObjetoScreen2  
  const [tareasOpciones, setTareasOpciones] = useState([])
  const traerTareasOpciones = () => {
    setTareasOpciones(soyElObejtoTarea)
  }
  useEffect(() => {
    traerTareasOpciones(soyElObejtoTarea)
  }, [])
console.log(tareasOpciones)
  //Propio tema, estilos, etc
  const [buttonState, setButtonState] = useState(false)

  const comprobarButtonState = () => {
    // console.log(groupValue)
    // if (groupValue.length !== 0) {
    //   setButtonState(false);
    // } else {
    //   setButtonState(true);
    // }
  }

  useEffect(() => {
    comprobarButtonState()
  }, [])
  const navigation = useNavigation();

  return (
<<<<<<< HEAD
   
      <>
      <TemplateVersion2 />
      <ScrollView style={{ backgroundColor: 'white' }}>
=======
    <>


>>>>>>> 8d7530af4d683d2a8fa21c0423e453c2b61f2657
      <Layout style={styles.container} level='1'>

        <View style={{ justifyContent: 'center' }}>
          {/* <Text style={styles.tittlesStyle}>
<<<<<<< HEAD
      <Avatar
        shape={"square"}
        size='tiny'
        style={{ width: 10, height: 10 }}
        source={require('../../assets/icons/Rectangle_orange.png')}
      />
      Número de Personas que realizan la actividad
    </Text> */}

          <FlatList data={tareasOpciones} renderItem={({ item }) => <>
            <ItemScreen2 item={item} />
            {/* <ItemScreen2 item={item} text={'Personal de Antapaccay'} tipoItem={1} />
        <ItemScreen2 item={item} text={'Contratistas'} tipoItem={1} />
        <ItemScreen2 item={item} text={'Ambas Personas'} tipoItem={2} />
        <ItemScreen2 item={item} text={'Frecuencia'} tipoItem={2} />
        <ItemScreen2 item={item} text={'N° Veces al Día'} tipoItem={1} />
        <ItemScreen2 item={item} text={'N° Veces a la Semana'} tipoItem={1} />
        <ItemScreen2 item={item} text={'N° Veces al Mes'} tipoItem={1} />
        <ItemScreen2 item={item} text={'Tiempo de cada Acción (horas)'} tipoItem={1} />
        <ItemScreen2 item={item} text={'Horas Turno por Persona'} tipoItem={1} /> */}
          </>}
            keyExtractor={item => item.idTareOpciones} />
          <View style={{ alignSelf: 'center', marginTop: 150 }}>
            <Button style={[styles.button, {
              backgroundColor: '#01286B',
            }, { color: 'white' }, { marginBottom: 25 }]}>
              Atrás
            </Button>
            <Button style={[styles.button, {
              backgroundColor: buttonState ? '#ECECEC' : '#01286B'
            }]} disabled={buttonState}>
              Siguiente
            </Button>
          </View>
=======
            <Avatar
              shape={"square"}
              size='tiny'
              style={{ width: 10, height: 10 }}
              source={require('../../assets/icons/Rectangle_orange.png')}
            />
            Número de Personas que realizan la actividad
          </Text> */}
          <FlatList ListHeaderComponent={<TemplateVersion2 />} showsHorizontalScrollIndicator={false} data={tareasOpciones} renderItem={({ item }) =>
            <ItemScreen2 item={item} />

          }
            keyExtractor={item => item.idTareOpciones} ListFooterComponent={<View style={{ alignSelf: 'center', marginTop: 150 }}>
              <Button onPress={() => navigation.navigate('Home')} style={[styles.button, {
                backgroundColor: '#01286B',
              }, { color: 'white' }, { marginBottom: 25 }]}>
                Atrás
              </Button>
              <Button style={[styles.button, {
                backgroundColor: buttonState ? '#ECECEC' : '#01286B'
              }]} disabled={buttonState}>
                Siguiente
              </Button>
            </View>} />
>>>>>>> 8d7530af4d683d2a8fa21c0423e453c2b61f2657
        </View>

      </Layout>
<<<<<<< HEAD
    </ScrollView></>
=======

    </>
>>>>>>> 8d7530af4d683d2a8fa21c0423e453c2b61f2657
  );
};

export default Screen2;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    width: 200,
    height: 42,
    backgroundColor: '#01286B'
  },
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
