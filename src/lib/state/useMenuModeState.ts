import {useState} from 'react';

const useMenuModeState = (prop: number) => {
  const [menuMode, setMenuMode] = useState(prop);
  return {menuMode, setMenuMode};
};

export default useMenuModeState;
