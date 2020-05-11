import {useState} from 'react';

type TrainingMenus = {no: number; menu: string};
const useTrainingMenusState = (prop: TrainingMenus[]) => {
  const [trainingMenus, setTrainingMenus] = useState(prop);
  return {
    trainingMenus,
    setTrainingMenus,
  };
};

export default useTrainingMenusState;
