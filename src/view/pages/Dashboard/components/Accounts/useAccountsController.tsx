import { useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';

export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const [sliderState, setSliderState] = useState({
    isBeginning: false,
    isEnd: true,
  });
  return { sliderState, setSliderState, windowWidth };
}
