import {Dimensions, PixelRatio} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export const normalize = (size, base = 'width') => {
  const wscale = SCREEN_WIDTH / 375;
  const hscale = SCREEN_HEIGHT / 667;

  const newSize = base === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
