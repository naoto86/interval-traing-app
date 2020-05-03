import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Svg, {Ellipse} from 'react-native-svg';
import ExerciseTimeInput from '@src/compornents/molecules/ExerciseTimeInput.tsx';
import PreparationTimeInput from '@src/compornents/molecules/PreparationTimeInput.tsx';
import RestTimeInput from '@src/compornents/molecules/RestTimeInput.tsx';
import RoundInput, {RoundInputProps} from '@src/compornents/atoms/RoundInput';
import colors from '@src/style/colors';
import LinearGradient from 'react-native-linear-gradient';

const TrainingSetTemplate = () => {
  const [round, setRound] = useState('08');
  const [errorMsg, setErrorMsg] = useState('');

  const roundInputProps: RoundInputProps = {
    round: round,
    setRound: setRound,
    errorMsg: errorMsg,
    setErrorMsg: setErrorMsg,
  };
  return (
    <LinearGradient
      colors={['#5433FF', '#20BDFF', '#A5FECB']}
      style={style.linearGradient}>
      <View style={style.main}>
        <View style={style.ellipseStack}>
          <Svg viewBox="0 0 234.38 232.06" style={style.ellipse}>
            <Ellipse
              strokeWidth={1}
              fill="rgba(230, 230, 230,1)"
              stroke="rgba(230, 230, 230,1)"
              cx={117}
              cy={116}
              rx={117}
              ry={116}
            />
          </Svg>
          <Text style={style.loremIpsum}>Lorem Ipsum</Text>
        </View>
        <PreparationTimeInput />
        <ExerciseTimeInput />
        <RestTimeInput />
        <RoundInput {...roundInputProps} />
        <Button title={'test'} />
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
  ellipse: {
    top: 0,
    width: 234,
    height: 234,
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
  ellipseStack: {
    marginTop: 40,
    height: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TrainingSetTemplate;
