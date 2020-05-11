import {useState} from 'react';

const useErrorMsgState = () => {
  const [errorMsg, setErrorMsg] = useState('');

  return {errorMsg, setErrorMsg};
};

export default useErrorMsgState;
