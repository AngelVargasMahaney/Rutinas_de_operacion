import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import { Avatar, Button, Layout } from '@ui-kitten/components';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { useNavigation } from "@react-navigation/native";
import AwesomeAlert from 'react-native-awesome-alerts';

import { postCreateData } from '../services/services';

const Rectangle_orange = require('../../assets/icons/Rectangle_orange.png')

import AnimatedLoader from "react-native-animated-loader";

const loader = require('../../assets/loaders/waiting.json')

const Screen4 = (props) => {
  const dataScreen4 = props.route.params.miObjetoNuevo

  const dataRutina = {
    boolean_routine: dataScreen4.boolean_routine,
    comments: dataScreen4.comments,
    frequency: dataScreen4.frequency,
    area_id: dataScreen4.areaId,
    process_id: dataScreen4.processId,
    task_id: dataScreen4.taskId,
    both_person: dataScreen4.bothPerson,
  }


  const handleSubmit = () => {
    startLoader()
    postCreateData(dataRutina).then((rpta) => {
      console.log(dataRutina)
      console.log("Mir respuesta")
      console.log(rpta)

      if (rpta.status === 200) {
        setVisible(false)
        navigation.navigate('Save')

      } else {
        console.warn("Subida errónea")
        setVisible(false)
      }
    }).catch(err => {
      console.log("ERROR EN EL SERVICIO CREARDATA")
      setVisible(false)
      console.warn(err)
    })

  }

  console.log(dataRutina)
  const navigation = useNavigation();


  const [Estado, setEstado] = useState(false);
  const showAlert = () => {
    setEstado(true);
  };
  const hideAlert = () => {
    setEstado(false);
  };
  const porcentaje = (((dataScreen4.cantTareasCompletas + dataScreen4.boolean_routine) * 100) / dataScreen4.cantTareasSubproceso)


  const [variableColor, setVariableColor] = useState("#FFFFFF")

  const verificarPorcentaje = () => {
    if (porcentaje >= 0 && porcentaje < 25) {
      setVariableColor("#FF0000")
    }
    if (porcentaje >= 25 && porcentaje < 50) {
      setVariableColor("#FF7000")
    }
    if (porcentaje >= 50 && porcentaje <= 75) {
      setVariableColor("#FFE400")
    }
    if (porcentaje >= 75 && porcentaje <= 100) {
      setVariableColor("#32FF00")
    }
  }
  console.log(variableColor)
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      setVariableColor('#FFFFFF')
      verificarPorcentaje()
    }, 1000);
  };

  useEffect(() => {
    startLoading()
    verificarPorcentaje()
  }, [])
  const [loading, setLoading] = useState(false);

  const [buttonState, setButtonState] = useState(true)


  //loader

  const [visible, setVisible] = useState(false);

  const startLoader = () => {
    setVisible(true)
  };


  return (
    <>
      <ScrollView style={{ backgroundColor: 'white', marginTop: 22 }}>
        <TemplateVersion2 />
        <Layout style={styles.container} level=''>

          <DataTable style={{ borderWidth: 1, borderColor: "#01286b" }}>
            <DataTable.Header style={{ backgroundColor: '#01286b' }} >
              <DataTable.Title >
                <Text style={{ color: '#ffffff', fontSize: 14 }} >RESUMEN DE LAS TAREAS REALIZADAS</Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row style={{ borderBottomWidth: 1, borderBottomColor: "#01286b" }} >
              <DataTable.Cell style={{ borderRightWidth: 1, borderRightColor: "#01286b" }}>
                <Text
                  style={[styles.tittlesStyle, { color: '#01286b', fontSize: 13 }]}

                ><Avatar
                  shape={"square"}
                  size={"tiny"}
                  style={{ width: 10, height: 10 }}
                  source={Rectangle_orange} >
                  </Avatar> AREA</Text></DataTable.Cell>
              <DataTable.Cell style={{
                marginRight: -15.5,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={[styles.tittlesStyle, { color: '#01286b', fontSize: 12, textAlign: 'center', flexShrink: 1, flexWrap: 'wrap', marginVertical: 10 }]}>
                    {dataScreen4.areaNombre}
                  </Text>
                </View>


              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{ borderBottomWidth: 1, borderBottomColor: "#01286b" }} >

              <DataTable.Cell style={{ borderRightWidth: 1, borderRightColor: "#01286b" }}>
                <Text style={[styles.tittlesStyle, { color: '#01286b', fontSize: 13 }]}>
                  <Avatar
                    shape={"square"}
                    size={"tiny"}
                    style={{ width: 10, height: 10 }}
                    source={Rectangle_orange} >
                  </Avatar> SUB PROCESO</Text></DataTable.Cell>
              <DataTable.Cell style={{
                marginRight: -15.5,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <View style={{ flexDirection: 'row', flexShrink: 1, flexWrap: 'wrap' }}>
                  <Text style={[styles.tittlesStyle, { color: '#01286b', fontSize: 12, textAlign: 'center', marginVertical: 10 }]}>
                    {dataScreen4.subProcesoNombre}
                  </Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row >

            <DataTable.Row style={{ borderBottomWidth: 1, borderBottomColor: "#01286b" }} >

              <DataTable.Cell multiline={true} style={{ borderRightWidth: 1, borderRightColor: "#01286b" }} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar
                    shape={"square"}
                    size={"tiny"}
                    style={{ width: 10, height: 10, marginTop: -10 }}
                    source={Rectangle_orange} >
                  </Avatar>
                  <Text style={{ color: '#01286b', fontSize: 12, marginHorizontal: 3, flexShrink: 1, flexWrap: 'wrap', marginVertical: 10 }}>
                    CANTIDAD DE TAREAS DEL SUBPROCESO
                  </Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell multiline={true} numeric style={{
                marginRight: -15.5,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}><Text style={[styles.tittlesStyle, { color: '#01286b', fontSize: 12 }]}>{dataScreen4.cantTareasSubproceso}</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{ borderBottomWidth: 1, borderBottomColor: "#01286b" }} >

              <DataTable.Cell style={{ borderRightWidth: 1, borderRightColor: "#01286b", flexDirection: 'row' }} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar
                    shape={"square"}

                    size={"tiny"}
                    style={{ width: 10, height: 10, marginTop: -10 }}
                    source={Rectangle_orange} >
                  </Avatar>
                  <Text style={{ color: '#01286b', fontSize: 12, marginHorizontal: 3, flexShrink: 1, flexWrap: 'wrap', marginVertical: 10 }}>
                    HORAS TOTALES DE TURNO POR PERSONA
                  </Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell numeric style={{
                marginRight: -15.5,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}><Text style={[styles.tittlesStyle, { color: '#01286b', fontSize: 12 }]}>{dataScreen4.horasTotalesSubproceso}</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{ borderBottomWidth: 1, borderBottomColor: "#01286b", border: "1px solid #01286b" }} >

              <DataTable.Cell style={{ borderRightWidth: 1, borderRightColor: "#01286b" }} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar
                    shape={"square"}

                    size={"tiny"}
                    style={{ width: 10, height: 10, marginTop: -10 }}
                    source={Rectangle_orange} >
                  </Avatar>
                  <Text style={{ color: '#01286b', fontSize: 12, marginHorizontal: 3, flexShrink: 1, flexWrap: 'wrap', marginVertical: 10 }}>
                    % DE CUMPLIMIENTO DE TAREAS DEL SUB PROCESO
                  </Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell

                numeric style={{
                  marginRight: -15.5,
                  flex: 0.45,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: variableColor,

                }}>
                {
                  loading ?
                    <ActivityIndicator
                      //visibility of Overlay Loading Spinner
                      visible={loading}
                      //Text with the Spinner
                      size="small"
                      color="#AAAAAA"
                      //Text style of the Spinner Text
                      textStyle={styles.spinnerTextStyle}
                    /> : <Text style={[styles.tittlesStyle, { color: variableColor == '#FFE400' ? 'blue' : 'white', fontSize: 12 }]}>{porcentaje}%</Text>
                }

              </DataTable.Cell>
            </DataTable.Row>

          </DataTable>

          <View style={{ justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{ alignSelf: 'center', marginTop: 150 }}>
              <Button style={[styles.button, {
                backgroundColor: '#01286B',
              }, { color: 'white' }, { marginBottom: 25 }]}
                onPress={() => { navigation.goBack() }}
              >
                Atrás
              </Button>
              <Button style={[styles.button, {
                backgroundColor: '#ea3e18',
              }, { color: 'white' }, { marginBottom: 15 }]}
                onPress={() => showAlert()}
              >
                Guardar
              </Button>
              <AwesomeAlert
                show={Estado}
                showProgress={false}
                title="Iniciando Guardado"
                titleStyle={{ fontSize: 22, marginBottom: 10 }}
                messageStyle={{ fontSize: 18, marginBottom: 10 }}
                message="Esta seguro de guardar?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No"
                confirmText="Si"
                cancelButtonStyle={{ width: 100, alignItems: 'center', marginTop: 10 }}
                confirmButtonStyle={{ width: 100, alignItems: 'center' }}
                confirmButtonColor="#AEDEF4"
                cancelButtonColor="#DD6B55"
                onCancelPressed={() => {
                  hideAlert();
                }}
                onConfirmPressed={() => {
                  handleSubmit();
                  hideAlert();
                }} />
            </View>
          </View>
        </Layout>

        <AnimatedLoader
          visible={visible}
          overlayColor="white"
          animationStyle={styles.lottie}
          source={loader}
          speed={1}>
          <Text>Guardando Datos</Text>
        </AnimatedLoader>
        <View style={{ alignSelf: 'center', width: 90, height: 30, borderRadius: 40, margin: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECECEC', borderRadius: 40, }}>
          <Text style={{ color: '#01286B', textAlign: 'center', fontSize: 14 }}>
            Pág. 4 / 4
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

export default Screen4;

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  }, Container: {
    paddingTop: 20,
  },
  container: {
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'white'
  },
  button: {
    borderRadius: 40,
    width: 200,
    height: 42,
    backgroundColor: '#01286B',
    borderColor: 'transparent'
  },
});
