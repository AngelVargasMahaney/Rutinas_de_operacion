import { StyleSheet, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HStack, ScrollView, Spacer, Select } from 'native-base'
import { Avatar, Button, Card, IndexPath, Modal, Radio, RadioGroup, Text } from '@ui-kitten/components'
import DropDownPicker from 'react-native-dropdown-picker'

const ItemScreen2 = ({ item }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const width = useWindowDimensions().width
    const height = useWindowDimensions().height
    const [service, setService] = useState('')
    const tareasDetalladas = item.detail_tasks
    // console.log("Soy el screeen ITEMSCREEN2")
    // console.log(tareasDetalladas)
    const opcionesSelect1 = [
        {
            "idOption": 0,
            "optionDescription": "No",
        },
        {
            "idOption": 1,
            "optionDescription": "Si",
        },
    ]

    const [visible, setVisible] = useState(false);
    const [modalMasInfo, setModalMasInfo] = useState(false);

    const displayValue = opcionesSelect1[selectedIndex.row];
    // console.log(displayValue)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'false', value: 'No' },
        { label: 'true', value: 'Si' }
    ]);

    const [opcionSeleccionadaModalIndex, setOpcionSeleccionadaModalIndex] = useState(0)
    const [valorDelSelect, setValorDelSelect] = useState('Seleccione una Subtarea')
    const [subTareasPorId, setSubTareasPorId] = useState([])

    const listarSubTareas = (idSubtarea) => {
        // console.log(idSubtarea)
        const subProcess = tareasDetalladas.find((e) => (e.id) === idSubtarea)
        // console.log(subProcess)
        // console.log("dadwaawe")
        // setValorDelSelect(subProcess.name)
    }
    const [pruebaSelect, setPruebaSelect] = useState(0)
    const renderSelectOptions = (titulo) => (

        <SelectItem key={titulo.id} title={titulo.name} />
    )

    const [dataFiltrada, setDataFiltrada] = useState([])

    const obtenerDataSubtareaPorId = (idSubtarea) => {

        const miDataFiltrada = tareasDetalladas.find((e) => (e.id) === idSubtarea)
        // console.warn(miDataFiltrada)
        setDataFiltrada(miDataFiltrada)
    }


    return (
        <View space={1} justifyContent="space-between">

            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    <RadioGroup
                        selectedIndex={selectedIndex}
                        onChange={index => setSelectedIndex(index)}>
                        <Radio>Diario</Radio>
                        <Radio>Semanal</Radio>
                        <Radio>Mensual</Radio>
                    </RadioGroup>
                    <Button onPress={() => setVisible(false)}>
                        Aceptar
                    </Button>
                </Card>
            </Modal>

            <HStack style={{ marginVertical: 7 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text numberOfLines={3} style={[styles.tittlesStyle, { width: width / 2 }]} >


                        N° de personas que realizan la actividad</Text>
                </View>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.quantity_people}
                </Text>
            </HStack>
            <HStack style={{ marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                        Personal de Antapaccay</Text>
                </View>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.antapaccay_staff}
                </Text>
            </HStack>
            <HStack style={{ marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                        Contratistas</Text>
                </View>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.contractors}
                </Text>
            </HStack>
            <HStack style={{ marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                        Ambas Personas</Text>
                </View>
                <Spacer />
                {
                    item.antapaccay_staff !== 0 && item.contractors !== 0 ?

                        <Text style={styles.textRightStyle}>No</Text>
                        :
                        <Select selectedValue={service}
                            width="66"
                            height="8"
                            _dark={{
                                bg: "#ea3e18"
                            }}
                            _light={{
                                bg: "#ea3e18"
                            }}
                            style={styles.selectRightsStyle}
                                                        
                            accessibilityLabel="-"
                            placeholder="-"
                            _selectedItem={{
                                bg: "#ea3e18"
                            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="Si" value="1" />
                            <Select.Item label="No" value="0" />
                        </Select>


                }

            </HStack>
            {
                item.detail_tasks.length === 1 ? (
                    <>
                        <HStack style={{ marginVertical: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                <Avatar
                                    shape={"square"}
                                    size='tiny'
                                    style={{ width: 10, height: 10, marginTop: 5 }}
                                    source={require('../../assets/icons/Rectangle_orange.png')}
                                />
                                <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                    Frecuencia</Text>
                            </View>
                            <Spacer />
                            <Text style={styles.textRightStyle} onPress={() => setVisible(true)}>
                                D
                            </Text>
                        </HStack>
                        <HStack style={{ marginVertical: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                <Avatar
                                    shape={"square"}
                                    size='tiny'
                                    style={{ width: 10, height: 10, marginTop: 5 }}
                                    source={require('../../assets/icons/Rectangle_orange.png')}
                                />
                                <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                    N° de veces al Día</Text>
                            </View>
                            <Spacer />
                            <Text style={[styles.textRightStyle, {
                                backgroundColor: item.day_times < 1 ? '#ECECEC' : '#EA3E18',
                                color: item.day_times < 1 ? '#969696' : '#FFFFFF'
                            }]}>
                                {
                                    item.day_times >= 1 ?
                                        (item.day_times) : ('-')
                                }
                            </Text>
                        </HStack>
                        <HStack style={{ marginVertical: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                <Avatar
                                    shape={"square"}
                                    size='tiny'
                                    style={{ width: 10, height: 10, marginTop: 5 }}
                                    source={require('../../assets/icons/Rectangle_orange.png')}
                                />
                                <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                    N° de veces a la Semana</Text>
                            </View>
                            <Spacer />
                            <Text style={[styles.textRightStyle, {
                                backgroundColor: item.week_times < 1 ? '#ECECEC' : '#EA3E18',
                                color: item.week_times < 1 ? '#969696' : '#FFFFFF'
                            }]}>
                                {
                                    item.week_times >= 1 ? item.week_times : ('-')
                                }
                            </Text>
                        </HStack>
                        <HStack style={{ marginVertical: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                <Avatar
                                    shape={"square"}
                                    size='tiny'
                                    style={{ width: 10, height: 10, marginTop: 5 }}
                                    source={require('../../assets/icons/Rectangle_orange.png')}
                                />
                                <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                    N° de veces al Mes</Text>
                            </View>
                            <Spacer />
                            <Text style={[styles.textRightStyle, {
                                backgroundColor: item.month_times < 1 ? '#ECECEC' : '#EA3E18',
                                color: item.month_times < 1 ? '#969696' : '#FFFFFF'
                            }]}>
                                {
                                    item.month_times >= 1 ? item.month_times : ('-')
                                }
                            </Text>
                        </HStack>
                    </>
                ) : (
                    <HStack style={{ marginVertical: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                            <Avatar
                                shape={"square"}
                                size='tiny'
                                style={{ width: 10, height: 10, marginTop: 5 }}
                                source={require('../../assets/icons/Rectangle_orange.png')}
                            />
                            <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                Esta tarea posee 3 Subtareas, presione el botón + para mayor información</Text>
                        </View>
                        <Spacer />
                        <Text style={styles.textRightStyle} onPress={() => setModalMasInfo(true)}>
                            +
                        </Text>
                    </HStack>
                )
            }
            <HStack style={{ marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                        Tiempo de cada Acción(horas)</Text>
                </View>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.action_time}
                </Text>
            </HStack>
            <HStack style={{ marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginTop: 5 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    <Text style={[styles.tittlesStyle, { width: width / 2 }]} >
                        Horas Turno por Persona</Text>
                </View>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.person_turn}
                </Text>
            </HStack>


            <Modal
                visible={modalMasInfo}
                style={{ maxWidth: 300 }}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setModalMasInfo(false)}>
                <Card disabled={true}>

                    {/* <Select
                        value={valorDelSelect}
                        placeholder={"Seleccion una Subtarea"}
                        selectedIndex={opcionSeleccionadaModalIndex}
                        onSelect={(index) => {
                            // console.log(index);
                            setOpcionSeleccionadaModalIndex(index)
                            listarSubTareas((index.row))
                        }
                        }
                    >
                        {tareasDetalladas.map((obj) => renderSelectOptions(obj))}
                    </Select> */}
                    <Select
                        selectedValue={pruebaSelect}
                        minWidth="200"
                        accessibilityLabel="Seleccione la SubTarea"
                        placeholder="Seleccione la SubTarea"
                        _selectedItem={{
                            bg: "teal.600",
                            color: "red"
                        }}
                        mt={1}
                        onValueChange={itemValue => {
                            setPruebaSelect(itemValue)
                            obtenerDataSubtareaPorId(itemValue)
                        }}>
                        {
                            tareasDetalladas.map((obj) => {

                                return (
                                    <Select.Item
                                        key={obj.id}
                                        label={obj.name}
                                        value={obj.id}
                                    />
                                )
                            })
                        }
                    </Select>

                    <HStack style={{ marginVertical: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                            <Avatar
                                shape={"square"}
                                size='tiny'
                                style={{ width: 10, height: 10, marginTop: 5 }}
                                source={require('../../assets/icons/Rectangle_orange.png')}
                            />
                            <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                Frecuencia</Text>
                        </View>
                        <Spacer />
                        <Text style={styles.textRightStyle} onPress={() => setVisible(true)}>
                            D
                        </Text>
                    </HStack>
                    <HStack style={{ marginVertical: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                            <Avatar
                                shape={"square"}
                                size='tiny'
                                style={{ width: 10, height: 10, marginTop: 5 }}
                                source={require('../../assets/icons/Rectangle_orange.png')}
                            />
                            <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                N° de veces al Día</Text>
                        </View>
                        <Spacer />
                        <Text style={styles.textRightStyle}>
                            1
                        </Text>
                    </HStack>
                    <HStack style={{ marginVertical: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                            <Avatar
                                shape={"square"}
                                size='tiny'
                                style={{ width: 10, height: 10, marginTop: 5 }}
                                source={require('../../assets/icons/Rectangle_orange.png')}
                            />
                            <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                N° de veces a la Semana</Text>
                        </View>
                        <Spacer />
                        <Text style={[styles.textRightStyle, { backgroundColor: '#ECECEC' }, { color: '#969696' }]}>
                            -
                        </Text>
                    </HStack>
                    <HStack style={{ marginVertical: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                            <Avatar
                                shape={"square"}
                                size='tiny'
                                style={{ width: 10, height: 10, marginTop: 5 }}
                                source={require('../../assets/icons/Rectangle_orange.png')}
                            />
                            <Text style={[styles.tittlesStyle, { width: width / 2 }]} >


                                N° de veces al Mes</Text>
                        </View>
                        <Spacer />
                        <Text style={[styles.textRightStyle, { backgroundColor: '#ECECEC' }, { color: '#969696' }]}>
                            -
                        </Text>
                    </HStack>
                    <Button onPress={() => setModalMasInfo(false)}>
                        Aceptar
                    </Button>
                </Card>
            </Modal>


        </View>
    )
}

export default ItemScreen2

const styles = StyleSheet.create({
    selectStyles: {
        backgroundColor: '#EA3E18',
        fontSize: 16,
        color: '#FFFFFF',
        borderRadius: 5,
        textAlign: 'center',
        marginRight: 25,
        width: 40,
        height: 25,
    },
    tittlesStyle: {
        fontSize: 16,
        color: '#01286B',
        fontWeight: '400',
        marginLeft: 10,


    },
    textRightStyle: {
        marginTop: 10,
        marginRight: 25,
        color: '#FFFFFF',
        backgroundColor: '#EA3E18',
        width: 40,
        height: 25,
        textAlign: 'center',
        borderRadius: 5
    },
    selectRightsStyle: {
        marginTop: 10,
        marginRight: 25,
        color: '#FFFFFF',
        backgroundColor: '#EA3E18',
        width: 40,
        height: 25,
        borderRadius: 5
    }
})