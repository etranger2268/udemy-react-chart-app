import { type ChangeEvent, useState } from 'react';

type UseCelsiusToFahrenheitReturn = {
  celsius: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  fahrenheit: number;
};

type UseCelsiusToFahrenheitType = () => UseCelsiusToFahrenheitReturn;

export const useCelsiusToFahrenheit: UseCelsiusToFahrenheitType = () => {
  const [celsius, setCelsius] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCelsius(Number(e.currentTarget.value));

  const fahrenheit = (celsius * 9) / 5 + 32;

  return { celsius, handleChange, fahrenheit };
};
