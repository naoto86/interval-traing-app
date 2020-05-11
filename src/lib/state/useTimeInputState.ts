import {useState} from 'react';
import useErrorMsgState from '@src/lib/state/useErrorMsgState';

const useTimeInputState = (minutes: string, seconds: string) => {
  const [time, setTime] = useState({minutes: minutes, seconds: seconds});

  return {
    time,
    setTime,
    ...useErrorMsgState(),
  };
};

export default useTimeInputState;
