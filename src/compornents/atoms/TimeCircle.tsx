import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import Svg, {Circle} from 'react-native-svg';
import numbers from '@src/images/numbers/index';
const colon = require('../../images/colon.png');

const TimeCircle = () => {
  return (
    <View style={style.circleStack}>
      <Svg viewBox="0 0 234.38 232.06" style={style.circle}>
        <Circle
          cx="118"
          cy="118"
          r="115"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
        />
      </Svg>
      <View style={style.timeView}>
        <Image source={numbers[0]} style={style.numberImage} />
        <Image source={numbers[2]} style={style.numberImage} />
        <Image source={colon} style={style.colonImage} />
        <Image source={numbers[4]} style={style.numberImage} />
        <Image source={numbers[3]} style={style.numberImage} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  circle: {
    top: 0,
    width: 240,
    height: 240,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleStack: {
    marginTop: 40,
    height: 250,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberImage: {width: 40, height: 40},
  colonImage: {width: 20, height: 40},
});

export default TimeCircle;
