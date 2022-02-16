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
    getAllAreas().then((rpta) => {
      console.log(rpta)
      console.log(rpta.data.data)
      setAreasData(rpta.data.data)
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
    const despintarOtros = areasData.map((obj, i) => {

      console.log(idCard)

      if (idCard === obj.id) {
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
    console.log(despintarOtros)
    setAreasData(despintarOtros)
  }
  const [estaEsMiArea, setEstaEsMiArea] = useState(0)
  useEffect(() => {
    traerAreas()
    traerSubProcesos()
    traerTareasRutinarias()
  }, []);
  const traerSubProcesosMetodo = (idCard) => {
    // console.log(idCard)
    // console.log(areasData[idCard-1])
    // const trayendo = areasData.find(function (e) {
    //   return e.idArea === idCard
    // })
    // console.log(idCard + "SEAW")
    const trayendo = areasData.find((e) => (e.id) === idCard)
    // console.log(trayendo.processes_complete)
    setSubProcesosPorId(trayendo.processes_complete)
    setEstaEsMiArea(trayendo.id)
    // console.log(estaEsMiArea)
  }

  const [prueba, setPrueba] = useState([])
  const onSelectIdArea = (idArea, index) => {
    let dataFiltrada = subProcesosPorId[index].tasks
    console.log(dataFiltrada)
    setTareasRutinariasPorId(dataFiltrada)

  }


  const traerTareasRutinariasMetodo = (idCard) => {

    //  console.log('cerdo') 
    // const trayendoTareas = tareasRutinarias.find(function (e) {
    //   return e.idSubProcess === idCard
    // })
    // // console.log(trayendoTareas)
    // setTareasRutinariasPorId(trayendoTareas.tareasAll)
  }

  const [selectedIndex, setSelectedIndex] = useState(0);
  // console.log(selectedIndex)
  // const displayValue = subProcesosPorId[selectedIndex.row];
  // console.log(selectedIndex.row)

  const [displayValue, setDisplayValue] = useState('Seleccione un SubProceso')
  const [displayID, setDisplayID] = useState(0)

  const listarSubprocesos = (idSubProcess) => {
    console.log(subProcesosPorId)
    const subProcess = subProcesosPorId.find((e) => (e.id) === idSubProcess)
    console.log(subProcess)
    setDisplayValue(subProcess.name)
    setPrueba(subProcess)
    setDisplayID(subProcess.id)
  }



  const renderOption = (title) => (
    //  traerTareasRutinariasMetodo(displayValue)
    // console.log(title),
    <SelectItem key={title.id} title={title.name} />
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
                  setDisplayValue('Seleccione un SubProceso')

                }}>
                  <Avatar
                    style={[styles.logo,
                    {
                      opacity: obj.selected ? 1 : 0.3,
                    }
                    ]}

                    size='giant'
                    resizeMode="contain"
                    source={obj.url_image} />

                  <Text style={{ textAlign: 'center', maxWidth: 100, color: obj.selected ? '#01286B' : '#969696', fontSize: 14, fontWeight: "400", marginTop: 5 }}>
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
            onSelect={(index, i) => {
              // console.log((index.row) + 1);

              setSelectedIndex(index)

              if (estaEsMiArea === 1) {
                listarSubprocesos((index.row) + 1)
              } else if (estaEsMiArea === 2) {
                listarSubprocesos((index.row) + 5)
              } else if (estaEsMiArea === 3) {
                listarSubprocesos((index.row) + 14)
              }
              traerTareasRutinariasMetodo((index.row) + 1)

              onSelectIdArea(estaEsMiArea, index.row)

            }
            }
          >
            {
              // subProcesosPorId.map((obj, index) =>{
              //   console.log(obj)
              //   renderOption(obj.name)
              // })
              subProcesosPorId.map((obj) => renderOption(obj))
            }
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
                    displayValue === 'Seleccione un SubProceso' ? null :
                      (
                        <Checkbox value={obj.id} key={obj.id} my="1">
                          <Text> {index + 1}. {obj.detail_tasks[0].name}</Text>
                          {/* <Text> Tarea N° {index + 1}</Text> */}
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
    borderRadius: 18
  }

});
