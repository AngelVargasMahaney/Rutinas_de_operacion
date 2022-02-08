import { StyleSheet, Text, View, Animated, useWindowDimensions } from 'react-native';
import React from 'react';

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={{ flexDirection: 'row', height: 64 }}>
            {
                data.map((item, index) => {
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 200, 10],
                        extrapolate: 'clamp'
                    })
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })
                    return <Animated.View style={[
                        styles.dot,
                        {
                            width: dotWidth,
                            height: 20,
                            opacity,
                            textAlign: 'center'
                        }
                    ]} key={index}>
                        <Text style={{ color: 'white'}}>
                            {index + 1} / {data.length}
                        </Text>
                    </Animated.View>
                })
            }
        </View>
    );
};

export default Paginator;

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: "#493d8a",
        marginHorizontal: 8
    }
});
