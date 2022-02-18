
import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';

const ModalComponent = (props) => {
    console.log(props)

    // const containerStyle = { backgroundColor: 'white', padding: 20 };

    // return (
    //     <Provider>

    //         <Modal visible={props.visible} onDismiss={props.onClose} contentContainerStyle={containerStyle}>
    //             <Text>{props.id}</Text>
    //         </Modal>

    //     </Provider>
    // );
    let todeArray = props.objetoParaModal
    let miArrayModal = []



    return (
        <View style={styles.container}>

            <Modal
                visible={props.visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={props.onClose}>
                <Card disabled={true}>

                    {
                        todeArray.map((obj, index) => {
                            console.log(obj)
                            return(
                                <Text>{obj.name}</Text>
                            )
                        })
                    }

                   
                </Card>
            </Modal>

        </View>
    );
}

export default ModalComponent
const styles = StyleSheet.create({
    container: {
        minHeight: 192,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

