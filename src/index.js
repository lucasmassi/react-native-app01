import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactoTronConfig';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#ff8a24" />
      <Routes />
    </>
  );
};

export default App;
