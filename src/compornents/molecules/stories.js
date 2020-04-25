import React from 'react';

import {storiesOf} from '@storybook/react-native';

import ExerciseTimeInput from './ExerciseTimeInput';
import PreparationTimeInput from './PreparationTimeInput';
import RestTimeInput from './RestTimeInput';

storiesOf('molecules', module)
  .add('ExerciseTimeInput', () => <ExerciseTimeInput />)
  .add('PreparationTimeInput', () => <PreparationTimeInput />)
  .add('RestTimeInput', () => <RestTimeInput />);
