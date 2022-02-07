import { Button, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';

const NextButton = ({ scrollToNext }) => {
    return (
        <TouchableHighlight
            style={styles.submit}
            onPress={scrollToNext}
            underlayColor='#fff'>
            <Text style={[styles.submitText]}>Siguiente</Text>
        </TouchableHighlight>
    );
};

export default NextButton;

const styles = StyleSheet.create({

    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    }
});
