import {useState} from 'react';

export type TrainingMenu = {no: number; menu: string};
const useTrainingMenusState = (prop: TrainingMenu[]) => {
  const [trainingMenus, setTrainingMenus] = useState(prop);
  return {
    trainingMenus,
    setTrainingMenus,
  };
};

export default useTrainingMenusState;
