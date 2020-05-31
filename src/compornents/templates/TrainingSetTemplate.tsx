import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Divider} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import ExerciseTimeInput, {
  ExerciseTimeInputProps,
} from '@src/compornents/molecules/ExerciseTimeInput.tsx';
import PreparationTimeInput, {
  PreparationTimeInputProps,
} from '@src/compornents/molecules/PreparationTimeInput.tsx';
import RestTimeInput, {
  RestTimeInputProps,
} from '@src/compornents/molecules/RestTimeInput.tsx';
import RoundInput, {RoundInputProps} from '@src/compornents/atoms/RoundInput';
import TrainingMenuModal, {
  TrainingMenuModalProps,
} from '@src/compornents/atoms/TrainingMenuModal.tsx';
import TimeCircle from '@src/compornents/atoms/TimeCircle';
import gradients from '@src/style/gradients';

export type TrainingSetTemplateProps = {
  preparationTime: PreparationTimeInputProps;
  exerciseTime: ExerciseTimeInputProps;
  restTime: RestTimeInputProps;
  round: RoundInputProps;
  trainingMenu: Pick<
    TrainingMenuModalProps,
    'menuMode' | 'setMenuMode' | 'trainingMenus' | 'setTrainingMenus'
  >;
};

const TrainingSetTemplate = (props: TrainingSetTemplateProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LinearGradient colors={gradients.rainbowBlue} style={style.linearGradient}>
      <View style={style.main}>
        <TimeCircle />
        <PreparationTimeInput {...props.preparationTime} />
        <ExerciseTimeInput {...props.exerciseTime} />
        <RestTimeInput {...props.restTime} />
        <RoundInput
          {...props.round}
          setTrainingMenus={props.trainingMenu.setTrainingMenus}
        />
        <Divider style={style.divider} />
        <View style={style.buttonRow}>
          <Button
            title="トレーニングメニュー"
            type="outline"
            icon={{name: 'menu', size: 15, color: 'white'}}
            containerStyle={style.buttonContainer}
            titleStyle={style.buttonTitle}
            buttonStyle={style.button}
            onPress={() => {
              setModalVisible(true);
            }}
          />
          <Button
            title={'決定'}
            type="outline"
            containerStyle={style.buttonContainer}
            titleStyle={style.buttonTitle}
            buttonStyle={style.button}
          />
        </View>
        <TrainingMenuModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          {...props.trainingMenu}
        />
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
