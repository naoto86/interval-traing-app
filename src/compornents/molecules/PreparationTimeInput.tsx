import React from 'react';
import {Avatar} from 'react-native-elements';
import TimeInput, {TimeInputProps} from '@src/compornents/atoms/TimeInput.tsx';
import {View, StyleSheet, Text} from 'react-native';

export type PreparationTimeInputProps = Pick<
  TimeInputProps,
  'time' | 'setTime' | 'errorMsg' | 'setErrorMsg'
>;

const PreparationTimeInput = (props: PreparationTimeInputProps) => {
  const size = 25;

  const timeInputProps: TimeInputProps = {
    label: '準備',
    fontSize: size,
    time: props.time,
    setTime: props.setTime,
    errorMsg: props.errorMsg,
    setErrorMsg: props.setErrorMsg,
    isAllowedZeroSecond: true,
  };

  return (
    <View>
      <View style={style.rapper}>
        <Avatar
          rounded
          icon={{name: 'dashboard', color: 'white', type: 'antdesign'}}
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
  error: {
    color: 'red',
  },
  avatarContainer: {
    backgroundColor: '#00000000',
  },
});

export default PreparationTimeInput;
