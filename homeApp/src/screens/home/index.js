import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';

export const Home = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.backgroundStyle} />
    </>
  );
};
