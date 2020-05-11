import React from 'react';

import {storiesOf} from '@storybook/react-native';

import TrainingSetTemplate from './TrainingSetTemplate';
import useTimeInputState from '@src/lib/state/useTimeInputState';
import useRoundInputState from '@src/lib/state/useRoundInputState';
import useMenuModeState from '@src/lib/state/useMenuModeState';
import useTrainingMenusState from '@src/lib/state/useTrainingMenusState';

storiesOf('Templates', module).add('TrainingSetTemplate', () => {
  return <RenderTrainingSetTemplate />;
});

const RenderTrainingSetTemplate = () => {
  const preparationTime = useTimeInputState('00', '10');
  const exerciseTime = useTimeInputState('00', '20');
  const restTime = useTimeInputState('00', '10');
  const round = useRoundInputState();
  let menus = [];
  for (let index = 1; index <= round.round; index++) {
    let mock = {no: index, menu: ''};
    menus.push(mock);
  }
  const trainingMenu = {
    ...useMenuModeState(0),
    ...useTrainingMenusState(menus),
  };
  console.log(trainingMenu);
  return (
    <TrainingSetTemplate
      preparationTime={preparationTime}
      exerciseTime={exerciseTime}
      restTime={restTime}
      round={round}
      trainingMenu={trainingMenu}
    />
  );
};
