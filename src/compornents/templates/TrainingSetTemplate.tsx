import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import ExerciseTimeInput from '@src/compornents/molecules/ExerciseTimeInput.tsx';
import PreparationTimeInput from '@src/compornents/molecules/PreparationTimeInput.tsx';
import RestTimeInput from '@src/compornents/molecules/RestTimeInput.tsx';
import RoundInput, {RoundInputProps} from '@src/compornents/atoms/RoundInput';
import TimeCircle from '@src/compornents/atoms/TimeCircle';
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
  return (
    <LinearGradient colors={gradients.rainbowBlue} style={style.linearGradient}>
      <View style={style.main}>
        <TimeCircle />
        <PreparationTimeInput />
        <ExerciseTimeInput />
        <RestTimeInput />
        <RoundInput {...roundInputProps} />
        <Divider style={style.divider} />
        <View style={style.buttonRow}>
          <Button
            title="トレーニングメニュー"
            type="outline"
            icon={{name: 'menu', size: 15, color: 'white'}}
            containerStyle={style.buttonContainer}
            titleStyle={style.buttonTitle}
            buttonStyle={style.button}
          />
          <Button
            title={'決定'}
            type="outline"
            containerStyle={style.buttonContainer}
            titleStyle={style.buttonTitle}
            buttonStyle={style.button}
          />
        </View>
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
  divider: {
    backgroundColor: 'white',
  },
  buttonRow: {
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 40,
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
