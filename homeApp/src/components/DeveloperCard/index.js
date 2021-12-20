import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export const DeveloperCard = ({name, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};
