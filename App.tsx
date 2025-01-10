import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/Home';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#000" // Fundo preto
        barStyle="light-content" // Ícones brancos
        translucent={false} // Não transparente
      />
      <Home />
    </>
  );
}