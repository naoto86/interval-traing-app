import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';
import {TrainingMenu} from '@src/lib/state/useTrainingMenusState.ts';
export type RoundInputProps = {
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setTrainingMenus: React.Dispatch<React.SetStateAction<any>>;
};

const RoundInput = (props: RoundInputProps) => {
  const validateChangedValue = (changedValue: number) => {
    if (changedValue === 0) {
      props.setErrorMsg('1以上の数値を入力してください');
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

        <NumericInput
          totalHeight={50}
          totalWidth={100}
          minValue={1}
          containerStyle={style.inputContainer}
          inputStyle={style.input}
          value={props.round}
          iconStyle={style.numericInputIcon}
          rightButtonBackgroundColor="#0FFF95"
          leftButtonBackgroundColor="#06BA63"
          onChange={(round: number) => {
            if (validateChangedValue(round)) {
              props.setRound(round);
              props.setTrainingMenus((s: TrainingMenu[]) => {
                if (s.length > round) {
                  // 減ったぶんを後ろから削除
                  s.pop();
                } else if (s.length < round) {
                  // 増えた分を後ろに追加;
                  s.push({no: s.length + 1, menu: ''});
                }
                return s;
              });
            }
          }}
        />
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
  numericInputIcon: {
    color: 'white',
  },
  error: {
    color: 'red',
  },
});

export default RoundInput;
