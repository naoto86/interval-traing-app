import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Image} from 'react-native-elements';
import Svg, {Circle} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import ExerciseTimeInput from '@src/compornents/molecules/ExerciseTimeInput.tsx';
import PreparationTimeInput from '@src/compornents/molecules/PreparationTimeInput.tsx';
import RestTimeInput from '@src/compornents/molecules/RestTimeInput.tsx';
import RoundInput, {RoundInputProps} from '@src/compornents/atoms/RoundInput';
import numbers from '@src/images/numbers/index';
import gradients from '@src/style/gradients';

const TrainingSetTemplate = () => {
  const [round, setRound] = useState('08');
  const [errorMsg, setErrorMsg] = useState('');

  const roundInputProps: RoundInputProps = {
    round: round,
    setRound: setRound,
    errorMsg: errorMsg,
    setErrorMsg: setErrorMsg,
  };
  const colon = require('../../images/colon.png');
  return (
    <LinearGradient colors={gradients.rainbowBlue} style={style.linearGradient}>
      <View style={style.main}>
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
          <Image source={numbers[0]} style={style.numberImage} />
          <Image source={numbers[0]} style={style.numberImage} />
          <Image source={colon} style={style.colonImage} />
          <Image source={numbers[0]} style={style.numberImage} />
          <Image source={numbers[0]} style={style.numberImage} />
        </View>
        <PreparationTimeInput />
        <ExerciseTimeInput />
        <RestTimeInput />
        <RoundInput {...roundInputProps} />
        <Button
          title={'決定'}
          type="outline"
          containerStyle={style.buttonContainer}
          titleStyle={style.buttonTitle}
          buttonStyle={style.button}
        />
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  main: {
    flex: 1,
  },
  circle: {
    top: 0,
    width: 240,
    height: 240,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loremIpsum: {
    top: 106,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#121212',
    position: 'absolute',
  },
  circleStack: {
    marginTop: 40,
    height: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberImage: {width: 40, height: 40},
  colonImage: {width: 20, height: 40},
  buttonContainer: {
    margin: 50,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    borderColor: 'white',
  },
});

export default TrainingSetTemplate;
