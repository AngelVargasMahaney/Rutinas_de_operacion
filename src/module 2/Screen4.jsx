import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import { Avatar, Button, Layout } from '@ui-kitten/components';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { useNavigation } from "@react-navigation/native";
import AwesomeAlert from 'react-native-awesome-alerts';

import { postCreateData } from '../services/services';

const Rectangle_orange = require('../../assets/icons/Rectangle_orange.png')

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
   // startLoading()
    postCreateData(dataRutina).then((rpta) => {

      if (rpta.status === 200) {
        //setLoading(false)
        navigation.navigate('Save')

      } else {
        console.warn("Subida errónea")
        //setLoading(false)
      }
    }).catch(err => {
      console.log("ERROR EN EL SERVICIO CREARDATA")
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

  const [porcentajeCumplimiento, setPorcentajeCumplimiento] = useState(10)
  const calculandoPorcentaje = () => {

    const porcentaje = (((dataScreen4.cantTareasCompletas + dataScreen4.boolean_routine) * 100) / dataScreen4.cantTareasSubproceso)
    setPorcentajeCumplimiento(porcentaje);
  }
  const [variableColor, setVariableColor] = useState("#FFFFFF")

  const verificarPorcentaje = () => {
    if (porcentajeCumplimiento >= 0 && porcentajeCumplimiento <= 25) {
      setVariableColor("#FF0000")
    }
    if (porcentajeCumplimiento > 25 && porcentajeCumplimiento <= 50) {
      setVariableColor("#FF7000")
    }
    if (porcentajeCumplimiento > 50 && porcentajeCumplimiento <= 75) {
      setVariableColor("#FFE400")
    }
    if (porcentajeCumplimiento > 75 && porcentajeCumplimiento <= 100) {
      setVariableColor("#32FF00")
    }
  }
  console.log(variableColor)
  const startLoading = () => {
    setLoading(true);
    setVariableColor('#FFFFFF')
    setTimeout(() => {
      setLoading(false)
      verificarPorcentaje()
    }, 1000);
  };

  useEffect(() => {
    calculandoPorcentaje()
    startLoading()
  }, [])
  const [loading, setLoading] = useState(false);


  const [buttonState, setButtonState] = useState(true)

  return (
    <>
      <TemplateVersion2 />
      <View style={{ backgroundColor: 'white' }}>
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
                  style={styles.tittlesStyle, { color: '#01286b', fontSize: 13 }}
                  numberOfLines={3}
                ><Avatar
                  shape={"square"}
                  size={"tiny"}
                  style={{ width: 10, height: 10 }}
                  source={Rectangle_orange} >
                  </Avatar> AREA</Text></DataTable.Cell>
              <DataTable.Cell numeric style={{
                marginRight: -15.5,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}><Text numberOfLines={3} style={styles.tittlesStyle, { color: '#01286b', fontSize: 12 }}>
                  {dataScreen4.areaNombre}</Text></DataTable.Cell>
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
                marginRight: -15.5,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}><Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 12 }}>
                  {dataScreen4.subProcesoNombre}</Text></DataTable.Cell>
            </DataTable.Row >

            <DataTable.Row style={{ borderBottomWidth: 1, borderBottomColor: "#01286b" }} >

              <DataTable.Cell multiline={true} style={{ borderRightWidth: 1, borderRightColor: "#01286b" }} >
                <Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 13 }}>
                  <Avatar
                    shape={"square"}
                    size={"tiny"}
                    style={{ width: 10, height: 10 }}
                    source={Rectangle_orange} >
                  </Avatar> CANTIDAD DE TAREAS DEL SUB PROCESO</Text></DataTable.Cell>
              <DataTable.Cell numeric style={{
                marginRight: -15.5,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}><Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 12 }}>{dataScreen4.cantTareasSubproceso}</Text></DataTable.Cell>
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
                marginRight: -15.5,
                flex: 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}><Text style={styles.tittlesStyle, { color: '#01286b', fontSize: 12 }}>{dataScreen4.horasTotalesSubproceso}</Text></DataTable.Cell>
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
                    /> : <Text style={[styles.tittlesStyle, { color: variableColor > 50 ? 'blue' : 'white', fontSize: 12 }]}>{porcentajeCumplimiento}%</Text>
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
              }, { color: 'white' }, { marginBottom: 25 }]}
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
      </View>
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
    margin: 20,
    backgroundColor: 'white'
  },
  button: {
    borderRadius: 40,
    width: 200,
    height: 42,
    backgroundColor: '#01286B'
  },
});
