import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {Avatar} from 'react-native-elements';

export type RoundInputProps = {
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
};

const RoundInput = (props: RoundInputProps) => {
  const validateChangedValue = (changedValue: string) => {
    if (isNaN(Number(changedValue))) {
      props.setErrorMsg('数値を入力してください');
      return false;
    }
    return true;
  };
  return (
    <View>
      <View style={style.rapper}>
        <Avatar
          rounded
          icon={{
            name: 'repeat',
            type: 'material-icons',
          }}
          overlayContainerStyle={style.avatarContainer}
          size={40}
          activeOpacity={1}
        />
        <Text style={style.label}>{'ラウンド回数:  '}</Text>
        <TouchableHighlight style={style.inputContainer}>
          <TextInput
            style={style.input}
            maxLength={2}
            keyboardType={'numeric'}
            value={String(props.round)}
            onChangeText={(round: string) => {
              if (validateChangedValue(round)) {
                props.setRound(Number(round));
              }
            }}
          />
        </TouchableHighlight>
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
  label: {
    fontSize: 25,
    color: 'white',
  },
  avatarContainer: {
    backgroundColor: '#00000000',
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: 'white',
  },
  input: {
    alignItems: 'center',
    color: 'white',
    paddingLeft: 6,
    fontSize: 25,
  },
  error: {
    color: 'red',
  },
});

export default RoundInput;
