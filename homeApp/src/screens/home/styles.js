import {StyleSheet} from 'react-native';
import {colors, normalize} from 'homeapp/src/constants';

export default StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  list: {flex: 1, paddingHorizontal: normalize(10)},
  separator: {height: normalize(10)},
});
