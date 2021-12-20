import {StyleSheet} from 'react-native';
import {colors, normalize} from 'homeapp/src/constants';

export default StyleSheet.create({
  card: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(10),
    backgroundColor: colors.green,
    borderRadius: normalize(10)
  },
});
