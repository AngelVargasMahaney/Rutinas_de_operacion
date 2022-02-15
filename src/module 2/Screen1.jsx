import { StyleSheet, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { Card, Layout, Text, Avatar, Button, Icon, Select, SelectItem, ButtonGroup, useTheme } from '@ui-kitten/components';
import { areasBd, subProcesosBd, tareaRutinariasBD } from '../services/areasLista';
import { Checkbox, ScrollView } from 'native-base';
import { getAllAreas } from '../services/services';
import { AuthContext } from '../context/authState';


const Screen1 = () => {
  const [areasData, setAreasData] = useState([]);
  const [subProcesos, setSubProcesos] = useState([])
  const [subProcesosPorId, setSubProcesosPorId] = useState([]);
  const [tareasRutinarias, setTareasRutinarias] = useState([])
  const [tareasRutinariasPorId, setTareasRutinariasPorId] = useState([])


  const traerAreas = () => {
    //Aquí obtener las áreas desde el servicio
    setAreasData(areasBd)
    getAllAreas().then((rpta)=>{
      console.warn(rpta)
    })
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
  const [groupValue, setGroupValue] = useState([]);

  // console.log('Se eligieron los siguientes checks' + groupValue)
  // console.log('Cantidad de casillas marcadas' + groupValue.length)

  //Propio tema, estilos, etc
  const [buttonState, setButtonState] = useState(true)

  const comprobarButtonState = () => {
    // console.log(groupValue)
    if (groupValue.length !== 0) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }

  useEffect(() => {
    comprobarButtonState()
  }, [groupValue.length])


  return (
    <View style={{ backgroundColor: 'white' }}>
      <TemplateVersion2 />
      {/* <Scrollview> */}
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
                    {
                      opacity: obj.selected ? 1 : 0.3
                    }
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
          <View>
            <Checkbox.Group
              defaultValue={groupValue}
              colorScheme={'orange'}
              accessibilityLabel="pick an item" onChange={values => {
                setGroupValue(values || []);

              }}>
              {
                tareasRutinariasPorId.map((obj, index) => {
                  return (
                    displayValue === undefined ? null :
                      (
                        <Checkbox value={obj.idTarea} key={obj.idTarea} my="1">
                          <Text> {index + 1}. {obj.description}</Text>
                        </Checkbox>

                      )
                  )
                })
              }
            </Checkbox.Group>
          </View>
          <View style={{ alignSelf: 'center', marginTop: 50 }}>
            <Button style={[styles.button, {
              backgroundColor: buttonState ? '#ECECEC' : '#01286B'
            }]} disabled={buttonState}>
              Siguiente
            </Button>
          </View>
          {/* {
              tareasRutinariasPorId.map((obj, index) => {

                return (
                  // displayValue === undefined ? null :
                  //   <Text key={index}>{index + 1}. {obj.description}</Text>
                  

                )
              })
            } */}
        </View>
      </Layout>

      {/* </Scrollview> */}
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    width: 200,
    height: 42,
    backgroundColor: '#01286B'
  },
  group: {
    marginVertical: 4,
  },
  option: {
    marginVertical: 4,
    marginHorizontal: 12,

  },
  tittlesStyle: {
    fontSize: 17,
    color: '#01286B',
    fontWeight: '600'
  },
  container: {
    justifyContent: 'center',
    // margin: 30
    margin: 10,
    backgroundColor: '#FFFFFF'
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
  },
  logo: {
    // filter: 'grayscale(100%)',
    width: 100,
    height: 100,
  }

});
