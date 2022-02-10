import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { Card, Layout, Text, Avatar, Button, Icon, Select, SelectItem, CheckBox } from '@ui-kitten/components';
import { areasBd, subProcesosBd, tareaRutinariasBD } from '../services/areasLista';
import { ScrollView } from 'native-base';


const Screen1 = () => {
  const [areasData, setAreasData] = useState([]);
  const [subProcesos, setSubProcesos] = useState([])
  const [subProcesosPorId, setSubProcesosPorId] = useState([]);
  const [tareasRutinarias, setTareasRutinarias] = useState([])
  const [tareasRutinariasPorId, setTareasRutinariasPorId] = useState([])
  const traerAreas = () => {
    //Aquí obtener las áreas desde el servicio
    setAreasData(areasBd)
  }
  const traerSubProcesos = () => {
    setSubProcesos(subProcesosBd)
  }
  const traerTareasRutinarias = () => {
    setTareasRutinarias(tareaRutinariasBD)
  }

  const [pintarImagen, setPintarImagen] = useState({
    // filter: 'grayscale(100%)'
  });

  const [esteEsMiId, setEsteEsMiId] = useState("");
  const [selected, setSelected] = useState(false);

  const cambiarColor = (idCard) => {
    setEsteEsMiId(idCard)
    const despintarOtros = areasBd.map((obj, i) => {
      if (idCard == obj.id) {
        return {
          ...obj,
          selected: true
        }
      }
      return {
        ...obj,
        selected: false
      }
    })
    setAreasData(despintarOtros)
  }

  useEffect(() => {
    traerAreas()
    traerSubProcesos()
    traerTareasRutinarias()
  }, []);

  const traerSubProcesosMetodo = (idCard) => {
    const trayendo = subProcesos.find(function (e) {
      return e.idArea === idCard
    })
    setSubProcesosPorId(trayendo.subProcess)
  }

  const traerTareasRutinariasMetodo = (idCard) => {

    const trayendoTareas = tareasRutinarias.find(function (e) {
      return e.idSubProcess === idCard
    })
    // console.log(trayendoTareas)
    setTareasRutinariasPorId(trayendoTareas.tareasAll)
  }

  const [selectedIndex, setSelectedIndex] = useState(0);
  const displayValue = subProcesosPorId[selectedIndex.row];

  const renderOption = (title) => (
    //  traerTareasRutinariasMetodo(displayValue)
    <SelectItem key={title} title={title} />
  );

  // checks
  const [activeChecked, setActiveChecked] = useState(true);

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
              />
              ÁREA
            </Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
              {areasData.map((obj, i) => {
                return (
                  <Card key={obj.id} style={styles.card} onPress={() => {
                    traerSubProcesosMetodo(obj.id)
                    cambiarColor(obj.id)
                    setSelectedIndex(0)

                  }}>
                    <Avatar
                      style={[styles.logo,
                      { backgroundColor: obj.selected ? 'red' : null }
                      ]}
                      shape={"square"}
                      size='giant'
                      resizeMode="contain"
                      source={obj.image} />

                    <Text style={{ textAlign: 'center', maxWidth: 100, color: obj.selected ? '#01286B' : '#969696', fontSize: 14, fontWeight: "400", marginTop: 12 }}>
                      {obj.name}
                    </Text>
                  </Card>
                )
              })
              }

            </View>

          </View>
          {/* View de los SubProcesos */}
          <View>
            <Text style={styles.tittlesStyle}>
              <Avatar
                shape={"square"}
                size='tiny'
                style={{ width: 10, height: 10 }}
                source={require('../../assets/icons/Rectangle_orange.png')}
              />
              SUB PROCESO
            </Text>
            <Select
              placeholder='Seleccione un SubProceso'
              value={displayValue}

              selectedIndex={selectedIndex}
              onSelect={(index) => {
                console.log(index.row);
                setSelectedIndex(index)
                traerTareasRutinariasMetodo(index.row)
              }
              }>
              {subProcesosPorId.map(renderOption)}
            </Select>
          </View>
          {/* View de las Tareas Rutinarias */}
          <View>
            <Text style={styles.tittlesStyle}>
              <Avatar
                shape={"square"}
                size='tiny'
                style={{ width: 10, height: 10 }}
                source={require('../../assets/icons/Rectangle_orange.png')}
              />
              TAREAS RUTINARIAS

            </Text>
            {
              tareasRutinariasPorId.map((obj, index) => {

                return (
                  displayValue === undefined ? null : 
                  
                  <Text key={index}>{index + 1}. {obj.description}</Text>
                )
              })
            }


          </View>
        </Layout>

      </ScrollView>

    </>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  tittlesStyle: {
    fontSize: 17,
    color: '#01286B',
    fontWeight: '600'
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
  }

});
