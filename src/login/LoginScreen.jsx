import { StyleSheet, Text, View, useWindowDimensions, ImageBackground, Dimensions, ScrollView, Image } from 'react-native';
import React from 'react';


const image = require('../../assets/backgrounds/Pantalla_login.png')
const logo_blanco = require('../../assets/logos/Logo_blanco.png')
const LoginScreen = () => {

    return (

        <ScrollView style={{ flex: 1, backgroundColor: '#01286B' }}>

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
                    <Text style={{ color: "white", fontSize: 34, fontWeight:'500', fontFamily:'Roboto'}}>
                        Bienvenido
                    </Text>
                    <Text style={{color: 'white', fontWeight:'300', fontFamily:'Roboto', }}>
                        Iniciar Sesión para Continuar
                    </Text>
                    <View style={{ marginTop: 50 }}>
                     
                    </View>
                </View>
            </View>
        </ScrollView>


    );
};

export default LoginScreen;

const styles = StyleSheet.create({
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
        marginTop: 30
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
