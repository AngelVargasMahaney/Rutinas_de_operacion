import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import TemplateVersion2 from '../Template/TemplateVersion2';
import { Card, Layout, Text, Avatar, Button, Icon } from '@ui-kitten/components';
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

      <Layout style={styles.mainContainer}>


        <Text style={styles.tittlesStyle}>
          <Avatar source={require('../../assets/icons/Rectangle_orange.png')} style={{width:10,height:10}} />
          ÁREA</Text>
        <Layout style={styles.container} level='1'>
          {areasData.map((obj, i) => {
            return (
              <Card key={obj.id} style={styles.card} onPress={() => {
                cambiarColor(obj.id)
              }}>
                <Avatar
                  style={styles.logo}
                  shape={"square"}
                  size='giant'
                  resizeMode="contain"
                  source={obj.image} />
                {obj.selected ? null : <Avatar
                  style={styles.logo2}
                  shape={"square"}
                  size='giant'
                  resizeMode="contain"
                  source={obj.image} />}

                <Text style={{ textAlign: 'center', maxWidth: 100, color: '#969696', fontSize: 14, fontWeight: 400, marginTop: 12 }}>
                  {obj.name}
                </Text>
              </Card>
            )
          })}

        </Layout>
      </Layout>

    </>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  tittlesStyle: {
    fontSize: 17,
    color: '#01286B',
    fontWeight: '600'
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
  logo2: {
    tintColor: 'dark',
    opacity: '0.5',
    position: 'absolute',
    width: 100,
    height: 100,
  }

});
