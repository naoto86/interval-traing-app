import React, {useState} from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';
import {Card, Input, Icon, Button, ButtonGroup} from 'react-native-elements';

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
  const buttons = MENU_MODES.map((m) => m.name);
  const [selectedMenuMode, setSelectedMenuMode] = useState(props.menuMode);
  const mainColor = '#1E9600';
  const styles = StyleSheet.create({
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
  });
  const RenderInput = (si: number) => {
    if (si === 0) {
      return <Input placeholder="aaaaa" />;
    } else {
      return <Input placeholder="bbbbbb" />;
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(false);
      }}>
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
        <View style={styles.customMargin}>{RenderInput(selectedMenuMode)}</View>
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
  );
};

TrainingMenuModal.defaultProps = {
  menuMode: ONLY_ONE_MODE.no,
};

export default TrainingMenuModal;
