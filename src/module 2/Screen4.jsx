import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import { Avatar, Button, Layout } from '@ui-kitten/components';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { useNavigation } from "@react-navigation/native";
import AwesomeAlert from 'react-native-awesome-alerts';
const Rectangle_orange = require('../../assets/icons/Rectangle_orange.png')

const Screen4 = (props) => {
  const dataScreen4 = props.route.params.dataScreen4
  console.log(dataScreen4)
  const navigation = useNavigation();


  const [Estado, setEstado] = useState(false);
  const showAlert = () => {
    setEstado(true);
  };
  const hideAlert = () => {
    setEstado(false);
  };

  const [porcentajeCumplimiento, setPorcentajeCumplimiento] = useState(10)
  const [variableColor, setVariableColor] = useState("#32FF00")

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

  useEffect(() => {
    verificarPorcentaje()
  })


  const [buttonState, setButtonState] = useState(true)

  return (
    <>
      <TemplateVersion2 />
      <View style={{ backgroundColor: "white" }}>
        <Layout style={styles.container} level=''>
          <View >
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
                    Chancado Primario</Text></DataTable.Cell>
              </DataTable.Row>

            </DataTable>
          </View>
          <View style={{ justifyContent: 'center' }}>
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
                  navigation.navigate('Save')
                  hideAlert();
                }} />
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
                    navigation.navigate('Save')
                    hideAlert();
                  }} />
              </View>
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
    margin: 20
  },
  button: {
    borderRadius: 40,
    width: 200,
    height: 42,
    backgroundColor: '#01286B'
  },
});
