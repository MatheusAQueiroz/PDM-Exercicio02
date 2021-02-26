import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const numerosPossiveis = Array.from(Array(60).keys());
  let numeros = [];
  for (let i = 0; i < 6; i++) {
    let n = Math.floor(Math.random() * (60 - i));
    numeros = [...numeros, numerosPossiveis[n]];
    numerosPossiveis.splice(n,1);
  }

  return (
    <View style={styles.container}>
      <Text>{numeros.join(' - ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
