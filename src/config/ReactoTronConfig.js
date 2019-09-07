import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({
    enable: true,
    port: 9090,
    host: '192.168.0.90',
  })
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
}
