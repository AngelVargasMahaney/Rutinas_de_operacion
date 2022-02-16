import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Layout } from '@ui-kitten/components'
import TemplateVersion2Oscuro from '../Template/TemplateVersion2Oscuro'

const ScreenSave = () => {
    return (
        <><TemplateVersion2Oscuro />
            <ScrollView style={styles.Container} >
                <Layout style={styles.container}  level='1'>
                    <View >

                    </View>
                </Layout>
            </ScrollView></>
    )
}

export default ScreenSave

const styles = StyleSheet.create({
    Container: {
        paddingTop: 20,
        backgroundColor: '#01286b',
    },
    container: {
        justifyContent: 'center',
        margin: 20,

       
    },
})