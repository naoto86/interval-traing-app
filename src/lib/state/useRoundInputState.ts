import {useState} from 'react';
import useErrorMsgState from '@src/lib/state/useErrorMsgState';

const useRoundInputState = (prop: number = 8) => {
  const [round, setRound] = useState(prop);
  return {
    round,
    setRound,
    ...useErrorMsgState(),
  };
};

export default useRoundInputState;
