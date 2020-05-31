import {useState} from 'react';

const useMenuModeState = (prop: number = 0) => {
  const [menuMode, setMenuMode] = useState(prop);
  return {menuMode, setMenuMode};
};

export default useMenuModeState;
