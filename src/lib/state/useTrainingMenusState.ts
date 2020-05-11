import {useState} from 'react';

type TrainingMenus = {no: number; menu: string};
const useTrainingMenusState = (trainingMenus: TrainingMenus[]) => {
  const [roundData, setRoundData] = useState(trainingMenus);
  return {
    roundData,
    setRoundData,
  };
};

export default useTrainingMenusState;
