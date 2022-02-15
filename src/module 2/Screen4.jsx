import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { DataTable } from 'react-native-paper';
import { Avatar } from '@ui-kitten/components';
import TemplateVersion2 from '../Template/TemplateVersion2';
const Rectangle_orange = require('../../assets/icons/Rectangle_orange.png')

const Screen4 = () => {

  const [porcentajeCumplimiento, setPorcentajeCumplimiento] = useState('10%')

  return (
    <>
      <TemplateVersion2 />

      <View style={styles.Container}>
        <DataTable style={{ borderWidth: 1 }}>
          <DataTable.Header >
            <DataTable.Title style={{ backgroundColor: '#f1f8ff', justifyContent: 'center', alignItems: 'center' }}>RESUMEN DE LAS TAREAS REALIZADAS</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row >
            {/* falta agregar text */}
            <DataTable.Cell >
              <Text style={styles.tittlesStyle}><Avatar
                shape={"square"}
                size={"tiny"}
                style={{ with: 10, height: 10 }}
                source={Rectangle_orange} >
              </Avatar> AREA</Text></DataTable.Cell>
            <DataTable.Cell numeric>Chancado Primario</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row >

            <DataTable.Cell >
              <Text style={styles.tittlesStyle}>
                <Avatar
                  shape={"square"}
                  size={"tiny"}
                  style={{ with: 10, height: 10 }}
                  source={Rectangle_orange} >
                </Avatar> SUB PROCESO</Text></DataTable.Cell>
            <DataTable.Cell numeric >Operación sala control chancado</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>

            <DataTable.Cell >
              <Text style={styles.tittlesStyle}>
                <Avatar
                  shape={"square"}
                  size={"tiny"}
                  style={{ with: 10, height: 10 }}
                  source={Rectangle_orange} >
                </Avatar> CANTIDAD DE TAREAS DEL SUB PROCESO</Text></DataTable.Cell>
            <DataTable.Cell numeric>10</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>

            <DataTable.Cell>
              <Text style={styles.tittlesStyle}><Avatar
                shape={"square"}
                size={"tiny"}
                style={{ with: 10, height: 10 }}
                source={Rectangle_orange} >
              </Avatar> HORAS TOTALES DE TURNO POR PERSONA</Text></DataTable.Cell>
            <DataTable.Cell numeric>11.84</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>

            <DataTable.Cell>
              <Text style={styles.tittlesStyle}><Avatar
                shape={"square"}
                size={"tiny"}
                style={{ with: 10, height: 10 }}
                source={Rectangle_orange} >
              </Avatar> % DE CUMPLIMIENTO DE TAREAS DEL SUB PROCESO</Text></DataTable.Cell>
            <DataTable.Cell numeric>{porcentajeCumplimiento}</DataTable.Cell>
          </DataTable.Row>

        </DataTable>
      </View>
    </>
  );
}

export default Screen4;

const styles = StyleSheet.create({
  Container: {
    paddingTop: 20,
  },
});
