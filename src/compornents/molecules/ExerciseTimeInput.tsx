import React from 'react';
import {Avatar} from 'react-native-elements';
import TimeInput, {TimeInputProps} from '@src/compornents/atoms/TimeInput.tsx';
import {View, StyleSheet, Text} from 'react-native';

export type ExerciseTimeInputProps = Pick<
  TimeInputProps,
  'time' | 'setTime' | 'errorMsg' | 'setErrorMsg'
>;

const ExerciseTimeInput = (props: ExerciseTimeInputProps) => {
  const size = 25;

  const timeInputProps: TimeInputProps = {
    label: '運動',
    fontSize: size,
    time: props.time,
    setTime: props.setTime,
    errorMsg: props.errorMsg,
    setErrorMsg: props.setErrorMsg,
  };

  return (
    <View>
      <View style={style.rapper}>
        <Avatar
          rounded
          icon={{name: 'directions-run', color: 'white'}}
          size={40}
          overlayContainerStyle={style.avatarContainer}
        />
        <TimeInput {...timeInputProps} />
      </View>
      <View style={style.rapper}>
        <Text style={style.error}>{props.errorMsg}</Text>
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
  avatarContainer: {
    backgroundColor: '#00000000',
  },
  error: {
    color: 'red',
  },
});

export default ExerciseTimeInput;
