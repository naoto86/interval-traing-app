import React from 'react';

import {storiesOf} from '@storybook/react-native';
// import {linkTo} from '@storybook/addon-links';

// import Welcome from './Welcome';
import TimeInput from './TimeInput';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

// storiesOf('TimeInput', module).add('time input', () => {
//   const dummyTimeInput = {
//     label: 'テスト',
//     fontSize: 30,
//     time: {minutes: '00', seconds: '00'},
//     setTime: () => {},
//     errorMsg: 'テスト',
//     setErrorMsg: () => {},
//   };
//   return <TimeInput {...dummyTimeInput} />;
// });

storiesOf('atoms', module).add('TimeInput', () => {
  const dummyTimeInput = {
    label: 'テスト',
    fontSize: 30,
    time: {minutes: '00', seconds: '00'},
    setTime: () => {},
    errorMsg: 'テスト',
    setErrorMsg: () => {},
  };
  return <TimeInput {...dummyTimeInput} />;
});
