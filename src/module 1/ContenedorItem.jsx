import { StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native';
import React from 'react';

const ContenedorItem = ({ item }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={styles.container, { width }}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />

            <View style={{ flex: 0.3 }}>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
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
