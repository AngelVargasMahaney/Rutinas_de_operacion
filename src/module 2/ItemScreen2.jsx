import { StyleSheet, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { HStack, Spacer } from 'native-base'
import { Avatar, Button, Card, Modal, Radio, RadioGroup, Select, SelectItem, Text } from '@ui-kitten/components'
import DropDownPicker from 'react-native-dropdown-picker'

const ItemScreen2 = ({ item }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const width = useWindowDimensions().width

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

    const [visible, setVisible] = React.useState(false);

    const displayValue = opcionesSelect1[selectedIndex.row];
    console.log(displayValue)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'false', value: 'No' },
        { label: 'true', value: 'Si' }
    ]);
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


                        Personal de Antapaccay</Text>
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


                        Contratistas</Text>
                </View>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    0
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
                <Text style={styles.textRightStyle}>
                    No
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
                    8.5
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
                    8.5
                </Text>
            </HStack>


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
    }
})