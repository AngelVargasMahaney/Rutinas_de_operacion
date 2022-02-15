import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { HStack, Spacer } from 'native-base'
import { Avatar, Select, SelectItem, Text } from '@ui-kitten/components'
import DropDownPicker from 'react-native-dropdown-picker'

const ItemScreen2 = ({ item }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

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

    const displayValue = opcionesSelect1[selectedIndex.row];
    console.log(displayValue)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'false', value: 'No' },
        { label: 'true', value: 'Si' }
    ]);
    return (
        <>
            <HStack space={1} justifyContent="space-between" >
                <Text style={styles.tittlesStyle}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginRight: 7 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    Número de Personas que realizan la actividad
                </Text>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.actPersona}
                </Text>
            </HStack>
            <HStack space={1} justifyContent="space-between">
                <Text style={styles.tittlesStyle}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginRight: 7 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    Personal de Antapaccay
                </Text>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.actPersona}
                </Text>
            </HStack>
            <HStack space={1} justifyContent="space-between">
                <Text style={styles.tittlesStyle}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginRight: 7 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    Contratistas
                </Text>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.actPersona}
                </Text>
            </HStack>
            <HStack space={1} justifyContent="space-between" marginY={5}>
                <Text style={styles.tittlesStyle}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginRight: 7 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    Ambas Personas
                </Text>
                <Spacer />
                <View>
                    <DropDownPicker
                        style={styles.selectStyles}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        arrowIconStyle={{
                            width: 20,
                            height: 20,
                            backgroundColor: 'blue',
                            
                        }}

                        placeholder={'0'}
                        placeholderStyle={{
                            color: '#FFFFFF'
                        }}
                    />
                    {/* <Select
                        style={styles.selectStyles}
      
                        size='small'
                        placeholder="Default"
                        value={displayValue?.optionDescription}
                        selectedIndex={selectedIndex}
                        onSelect={(index) => setSelectedIndex(index)}>
                        {opcionesSelect1.map((item, i) => (
                            <SelectItem
                                title={item.optionDescription}
                                key={i} />
                        ))}
                    </Select> */}
                </View>
            </HStack>
            <HStack space={1} justifyContent="space-between">
                <Text style={styles.tittlesStyle}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginRight: 7 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    Frecuencia
                </Text>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.actPersona}
                </Text>
            </HStack>
            <HStack space={1} justifyContent="space-between">
                <Text style={styles.tittlesStyle}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginRight: 7 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    N° Veces al Día
                </Text>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.actPersona}
                </Text>
            </HStack>
            <HStack space={1} justifyContent="space-between">
                <Text style={styles.tittlesStyle}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginRight: 7 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    N° Veces a la Semana
                </Text>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.actPersona}
                </Text>
            </HStack>
            <HStack space={1} justifyContent="space-between">
                <Text style={styles.tittlesStyle}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginRight: 7 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    N° Veces al Mes
                </Text>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.actPersona}
                </Text>
            </HStack>
            <HStack space={1} justifyContent="space-between">
                <Text style={styles.tittlesStyle}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginRight: 7 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    Tiempo de cada Acción (horas)
                </Text>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.actPersona}
                </Text>
            </HStack>
            <HStack space={1} justifyContent="space-between">
                <Text style={styles.tittlesStyle}>
                    <Avatar
                        shape={"square"}
                        size='tiny'
                        style={{ width: 10, height: 10, marginRight: 7 }}
                        source={require('../../assets/icons/Rectangle_orange.png')}
                    />
                    Horas Turno por Persona
                </Text>
                <Spacer />
                <Text style={styles.textRightStyle}>
                    {item.actPersona}
                </Text>
            </HStack>
        </>
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
        marginLeft: 25,
        marginTop: 10
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