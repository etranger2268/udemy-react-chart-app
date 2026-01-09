import { useEffect, useState } from 'react';
import { INITIAL_LIGHT, type LightType, NEXT_LIGHTS } from '@/app/traffic-light/constants';

type UseTrafficLightReturn = {
  light: LightType;
};

type UseTrafficLightType = () => UseTrafficLightReturn;

export const useTrafficLight: UseTrafficLightType = () => {
  const [light, setLight] = useState<LightType>(INITIAL_LIGHT);
  useEffect(() => {
    const timerId = setInterval(() => setLight((prev) => NEXT_LIGHTS[prev]), 1000);
    return () => clearInterval(timerId);
  }, []);

  return { light };
};
