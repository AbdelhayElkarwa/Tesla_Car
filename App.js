import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import CarItem from './component/CarItem';
import cars from './component/cars';
import Header from './component/Header';

export default function App() {

  return (

    <View style={styles.container}>
      <Header />
      {/* to show only one car */}
      {/* <CarItem name='Model S' title='Order online for ' subtitle='Touchless Delivery'
        image={require('./assets/images/ModelS.jpeg')} /> */}
      <View style={{ width: '100%' }}>
        {/* to show list of car from list */}
        <FlatList
          key={Math.random()}
          data={cars}
          renderItem={({ item }) => <CarItem car={item} />}
          //to make one photo show only in screen 
          snapToAlignment={'start'}
          decelerationRate={'normal'}

          snapToInterval={Dimensions.get('window').height + 32}
          //to hide scroll
          showsVerticalScrollIndicator={false}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
