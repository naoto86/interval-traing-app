import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {
  Card,
  Input,
  Icon,
  Button,
  ButtonGroup,
  ListItem,
} from 'react-native-elements';
import Modal from 'react-native-modal';

export type TrainingMenuModalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  menuMode: number;
  setMenuMode: React.Dispatch<React.SetStateAction<number>>;
  trainingMenus: [{no: number; menu: string}];
  setTrainingMenus: React.Dispatch<React.SetStateAction<any>>;
};

export const ONLY_ONE_MODE = {
  no: 0,
  name: '一種類のみ',
};

export const MULTIPLE_MODE = {
  no: 1,
  name: '複数',
};

export const MENU_MODES = [ONLY_ONE_MODE, MULTIPLE_MODE];

const TrainingMenuModal: React.FC<TrainingMenuModalProps> = (props) => {
  console.log(props.trainingMenus);
  const buttons = MENU_MODES.map((m) => m.name);
  const [selectedMenuMode, setSelectedMenuMode] = useState(props.menuMode);
  const mainColor = '#1E9600';
  const styles = StyleSheet.create({
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    textColor: {
      color: mainColor,
    },
    buttonBackgroundColor: {
      backgroundColor: mainColor,
    },
    buttonBorder: {
      borderColor: mainColor,
    },
    customMargin: {marginBottom: 10},
    listView: {
      height: 500,
    },
  });
  const RenderInput = (si: number) => {
    if (si === 0) {
      return <Input placeholder="aaaaa" />;
    } else {
      return (
        <View>
          <ScrollView style={styles.listView}>
            {props.trainingMenus.map((m, i) => {
              return (
                <ListItem
                  key={i}
                  Component={() => <Input label={`${m.no}ラウンド目`} />}
                />
              );
            })}
          </ScrollView>
        </View>
      );
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal isVisible={props.modalVisible}>
        <Card title="トレーニングメニュー" titleStyle={styles.textColor}>
          <Text style={styles.textColor}>
            ラウンドごとにするトレーニングをメモできます。
          </Text>
          <ButtonGroup
            onPress={setSelectedMenuMode}
            selectedIndex={selectedMenuMode}
            buttons={buttons}
            textStyle={styles.textColor}
            selectedButtonStyle={styles.buttonBackgroundColor}
          />
          <View style={styles.customMargin}>
            {RenderInput(selectedMenuMode)}
          </View>
          <Button
            buttonStyle={styles.buttonBorder}
            titleStyle={styles.textColor}
            type="outline"
            icon={<Icon name="code" color="#ffffff" />}
            onPress={() => {
              props.setModalVisible(false);
            }}
            title="閉じる"
          />
        </Card>
      </Modal>
    </View>
  );
};

TrainingMenuModal.defaultProps = {
  menuMode: ONLY_ONE_MODE.no,
};

export default TrainingMenuModal;
