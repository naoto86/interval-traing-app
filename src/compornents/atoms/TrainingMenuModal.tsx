import React, {useState} from 'react';
import {Alert, Modal, View, Text, StyleSheet} from 'react-native';
import {Card, Input, Icon, Button, ButtonGroup} from 'react-native-elements';

type TrainingMenuModalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  menuMode: string;
  setMenuMode: React.Dispatch<React.SetStateAction<string>>;
  roundData: [{no: number; menu: string}];
  setRoundData: React.Dispatch<React.SetStateAction<any>>;
};

const TrainingMenuModal = (props: TrainingMenuModalProps) => {
  const buttons = ['一種類のみ', '複数'];
  const [selectedIndex, setSelectedIndex] = useState(0);
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
        Alert.alert('Modal has been closed.');
      }}>
      <Card title="トレーニングメニュー" titleStyle={styles.textColor}>
        <Text style={styles.textColor}>
          ラウンドごとにするトレーニングをメモできます。
        </Text>
        <ButtonGroup
          onPress={setSelectedIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          textStyle={styles.textColor}
          selectedButtonStyle={styles.buttonBackgroundColor}
        />
        <View style={{marginBottom: 10}}>{RenderInput(selectedIndex)}</View>
        <Button
          buttonStyle={styles.buttonBorder}
          titleStyle={styles.textColor}
          type="outline"
          icon={<Icon name="code" color="#ffffff" />}
          onPress={() => {
            props.setModalVisible(true);
          }}
          title="閉じる"
        />
      </Card>
    </Modal>
  );
};

export default TrainingMenuModal;
