import React, {useState} from 'react';
import {Avatar} from 'react-native-elements';
import TimeInput, {TimeInputProps} from '@src/compornents/atoms/TimeInput.tsx';
import {View, StyleSheet, Text} from 'react-native';
import colors from '@src/style/colors';

const ExerciseTimeInput = () => {
  const [time, setTime] = useState({minutes: '00', seconds: '06'});
  const [errorMsg, setErrorMsg] = useState('');
  0;
  const size = 25;

  const timeInputProps: TimeInputProps = {
    label: '休憩',
    fontSize: size,
    time: time,
    setTime: setTime,
    errorMsg: errorMsg,
    setErrorMsg: setErrorMsg,
  };

  return (
    <View>
      <View style={style.rapper}>
        <Avatar
          rounded
          icon={{name: 'rest', color: 'white', type: 'antdesign'}}
          size={40}
          overlayContainerStyle={style.avterContainer}
        />
        <TimeInput {...timeInputProps} />
      </View>
      <View style={style.rapper}>
        <Text style={style.error}>{errorMsg}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  rapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
  },
  avterContainer: {
    backgroundColor: colors.lightBlue,
  },
});

export default ExerciseTimeInput;
