import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export type TimeInputProps = {
  label: string;
  fontSize: number;
  time: {minutes: string; seconds: string};
  setTime: React.Dispatch<
    React.SetStateAction<{minutes: string; seconds: string}>
  >;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  isAllowedZeroSecond?: boolean;
};

const TimeInput = (props: TimeInputProps) => {
  const validateChangedValue = (changedValue: string, isMinutes: boolean) => {
    if (isNaN(Number(changedValue))) {
      props.setErrorMsg('数値を入力してください');
      return false;
    }

    if (changedValue.length > 2) {
      return false;
    }

    const numberValue = Number(changedValue);
    if (isMinutes || props.isAllowedZeroSecond) {
      if (numberValue > 60) {
        props.setErrorMsg('60までの数値を入れてください');
        return false;
      }
    } else {
      if (numberValue > 60 || numberValue <= 0) {
        props.setErrorMsg('1から60までの数値を入れてください');
        //ここでfalseを返すと入力しづらいのでエラー文入れるだけで、trueにする
        return true;
      }
    }
    if (!Number.isInteger(numberValue)) {
      props.setErrorMsg('整数で入力してください');
      return false;
    }
    props.setErrorMsg('');
    return true;
  };

  const style = StyleSheet.create({
    rapper: {flexDirection: 'row'},
    label: {
      fontSize: props.fontSize,
      color: 'white',
    },
    timeContainer: {
      borderWidth: 2,
      borderColor: 'white',
    },
    minutes: {
      alignItems: 'center',
      color: 'white',
      paddingLeft: 6,
      fontSize: props.fontSize,
    },
    seconds: {
      alignItems: 'center',
      color: 'white',
      paddingRight: 6,
      fontSize: props.fontSize,
    },
  });

  return (
    <View style={style.rapper}>
      <Text style={style.label}>{`${props.label}(分:秒):  `}</Text>
      <TouchableHighlight style={style.timeContainer}>
        <TextInput
          style={style.minutes}
          maxLength={2}
          keyboardType={'numeric'}
          value={props.time.minutes}
          onChangeText={(minutes: string) => {
            if (validateChangedValue(minutes, true)) {
              props.setTime((s) => ({
                ...s,
                minutes: minutes,
              }));
            }
          }}
        />
      </TouchableHighlight>
      <Text style={style.label}>{':'}</Text>
      <TouchableHighlight style={style.timeContainer}>
        <TextInput
          style={style.seconds}
          maxLength={2}
          keyboardType={'numeric'}
          value={props.time.seconds}
          onChangeText={(seconds: string) => {
            if (validateChangedValue(seconds, false)) {
              props.setTime((s) => ({
                ...s,
                seconds: seconds,
              }));
            }
          }}
        />
      </TouchableHighlight>
    </View>
  );
};
TimeInput.defaultProps = {
  isAllowedZeroSecond: false,
};

export default TimeInput;
