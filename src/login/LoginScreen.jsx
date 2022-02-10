import { StyleSheet, Text, View, useWindowDimensions, ImageBackground, Dimensions, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { Box, Button, FormControl, Icon, Input, NativeBaseProvider, Stack, WarningOutlineIcon } from 'native-base';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";





const image = require('../../assets/backgrounds/Pantalla_login.png')
const logo_blanco = require('../../assets/logos/Logo_blanco.png')
const LoginScreen = () => {

    return (

        <ScrollView style={{ flex: 1, backgroundColor: '#02286B' }}>

            <ImageBackground source={image} style={styles.image}>

                <View style={styles.portadaView}>
                    <Text style={styles.portadaViewText}>
                        RUT-OP
                    </Text>
                    <Text style={styles.portadaViewTextSmall}>
                        Registro de Rutinas Operacionales
                    </Text>
                    <Image source={logo_blanco} style={styles.logo_blanco} />
                </View>

            </ImageBackground>

            {/* Aqui sigue el cuerpo de bienvenida */}
            <View style={styles.bodyContainer}>

                <View style={{ padding: 40 }}>
                    <Text style={{ color: "white", fontSize: 34, fontWeight: 500, fontFamily: 'Roboto', ineHeight: 28.13 }}>
                        Bienvenido
                    </Text>

                    <Text style={{ color: 'white', fontWeight: 300, fontFamily: 'Roboto', fontSize: 14, lineHeight: 16.41 }}>
                        Iniciar Sesión para Continuar
                    </Text>
                    <>
                        <View style={{ marginTop: 50 }}>

                            <FormControl>

                                <Stack space={5}>

                                    <Stack backgroundColor={"#023285"} style={styles.cajasTexto}>

                                        <FormControl.Label _text={{ color: '#669EFF', fontWeight: 400, fontSize: 14 }}>USUARIO</FormControl.Label>



                                        <Input fontSize={16} color={'white'} variant="underlined" InputLeftElement={<Icon as={<FontAwesomeIcon name="user" style={styles.iconUser} />} size={2} />} p={2} placeholder="usuarioantapaccay1" />
                                    </Stack>
                                    <Stack backgroundColor={"#023285"} style={styles.cajasTexto}>
                                        <FormControl.Label _text={{ color: '#669EFF', fontWeight: 400, fontSize: 14 }}>CONTRASEÑA</FormControl.Label>
                                        <Input fontSize={16} color={'white'} variant="underlined" InputLeftElement={<Icon as={<FontAwesomeIcon name="lock" style={styles.iconUser} />} size={2} />} p={2} placeholder="*******" />
                                    </Stack>
                                    <Button onPress={() => console.log("hello world")} backgroundColor={'white'} _text={{ color: '#01286B' }}>INGRESAR</Button>
                                </Stack>

                            </FormControl>


                        </View>
                    </>
                </View>
                <View  style={{ flex:1, justifyContent: 'center', alignItems: 'flex-end', marginRight:30, marginBottom:20 }}>
                    <Text style={{ color: "white", textAlign:'center', fontSize: 11, fontWeight: 300, fontFamily: 'Roboto', ineHeight: 12.89 }}>
                        Versión 1.0
                    </Text>
                </View>
            </View>

        </ScrollView>


    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    cajasTexto: {
        padding: 10
    },
    inputLogin: {
        color: 'red',
    },
    labelsStyle: {
        color: '#669EFF'
    },
    iconUser: {
        color: "white",
        fontSize: 15,
        height: 15,
        width: 19,
        marginLeft: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#01286B'

    },
    portadaView: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(1, 40, 107, 0.5)',


    },
    logo_blanco: {
        width: 147.61,
        height: 81.78,
        marginTop: 70
    },
    portadaViewText: {
        color: 'white',
        fontSize: 64,
        textAlign: 'center',
    },
    portadaViewTextSmall: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    image: {
        height: Dimensions.get('window').height / 1.7,
    },
    bodyContainer: {
        flex: 0.5,
        backgroundColor: '#01286B',
    }
});
