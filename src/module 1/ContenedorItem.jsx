import { StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native';
import React from 'react';

const ContenedorItem = ({ item }) => {
    const { width } = useWindowDimensions()

    const Component = item.component[1]
    return (
        <View style={styles.container, { width }}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />

            <View style={{ flex: 0.3 }}>
                {item.component}
            </View>
        </View>
    );
};

export default ContenedorItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
    }
});
