import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { Card, Layout, Text, Avatar, Button } from '@ui-kitten/components';
import { areas } from '../services/areasLista';

const Screen1 = () => {
  const [areasData, setAreasData] = useState([]);
  const traerAreas = () => {
    //Aquí obtener las áreas desde el servicio
    setAreasData(areas)
  }

  const [pintarImagen, setPintarImagen] = useState({
    // filter: 'grayscale(100%)'
  });

  const [esteEsMiId, setEsteEsMiId] = useState("");
  const [selected, setSelected] = useState(false);

  const cambiarColor = (idCard) => {
    setEsteEsMiId(idCard)
    const despintarOtros = areas.map((obj, i) => {
      if (idCard == obj.id) {
        return {
          ...obj,
          selected: true
        }
      }
      return {
        ...obj,
        selected: false
      }
    })
    setAreasData(despintarOtros)
  }

  useEffect(() => {
    traerAreas()
  }, []);
  return (
    <>
      <TemplateVersion2 />
      <Layout style={styles.container} level='1'>
        {areasData.map((obj, i) => {
          return (
            <Card style={styles.card, {
              backgroundColor: obj.selected ? 'red' : 'blue'
            }} key={i} onPress={() => {
              cambiarColor(obj.id)
            }}>

              <Avatar
                style={[styles.logo]}
                shape={"square"}
                size='giant'
                resizeMode="contain"
                source={obj.image} />
              <Text style={{ textAlign: 'center', maxWidth: '100px', color: '#969696', fontSize: 14, fontWeight: 400, marginTop: 12 }}>
                {obj.selected ? 'Elegido' : obj.name}
              </Text>
            </Card>

          )
        })}

      </Layout>
    </>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  prueba: {

    position: 'absolute',
    zIndex: 1,
    width: 100,
    height: 100,
    borderRadius: 10

  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    // filter: 'grayscale(100%)',
    width: 100,
    height: 100,
  },

});
