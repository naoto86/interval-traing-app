import React from 'react';

import {storiesOf} from '@storybook/react-native';
// import {linkTo} from '@storybook/addon-links';

// import Welcome from './Welcome';
import TimeInput from './TimeInput';
import RoundInput from './RoundInput';

storiesOf('atoms', module)
  .add('TimeInput', () => {
    const dummyTimeInput = {
      label: 'テスト',
      fontSize: 30,
      time: {minutes: '00', seconds: '00'},
      setTime: () => {},
      errorMsg: 'テスト',
      setErrorMsg: () => {},
    };
    return <TimeInput {...dummyTimeInput} />;
  })
  .add('RoundInput', () => {
    const dummyProps = {
      round: '08',
      setRound: () => {},
      errorMsg: 'テスト',
      setErrorMsg: () => {},
    };
    return <RoundInput {...dummyProps} />;
  });
