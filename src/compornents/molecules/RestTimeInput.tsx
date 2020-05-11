import React from 'react';
import {Avatar} from 'react-native-elements';
import TimeInput, {TimeInputProps} from '@src/compornents/atoms/TimeInput.tsx';
import {View, StyleSheet, Text} from 'react-native';

export type RestTimeInputProps = Pick<
  TimeInputProps,
  'time' | 'setTime' | 'errorMsg' | 'setErrorMsg'
>;

const RestTimeInput = (props: RestTimeInputProps) => {
  const size = 25;

  const timeInputProps: TimeInputProps = {
    label: '休憩',
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
          icon={{name: 'rest', color: 'white', type: 'antdesign'}}
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

export default RestTimeInput;
