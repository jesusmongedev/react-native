import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';

export const styles = StyleSheet.create({
  bg: {
    paddingHorizontal: 18,
    flex: 1,
    backgroundColor: colors.mainDarkColor,
  },
  calcContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  buttonsBg: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
