import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import colors from '@src/style/colors';

export type RoundInputProps = {
  round: string;
  setRound: React.Dispatch<React.SetStateAction<string>>;
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
          icon={{name: 'rest', color: 'white', type: 'antdesign'}}
          size={40}
          overlayContainerStyle={style.avterContainer}
        />
        <Text style={style.label}>{`ラウンド回数:  `}</Text>
        <TouchableHighlight>
          <TextInput
            style={style.input}
            maxLength={2}
            keyboardType={'numeric'}
            value={props.round}
            onChangeText={(round: string) => {
              if (validateChangedValue(round)) {
                props.setRound(round);
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
  input: {
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    paddingLeft: 6,
    fontSize: 25,
  },
  error: {
    color: 'red',
  },
  avterContainer: {
    backgroundColor: colors.lightBlue,
  },
});

export default RoundInput;
