export const NEXT_LIGHTS = {
  red: 'green',
  green: 'yellow',
  yellow: 'red',
} as const;

export type LightType = keyof typeof NEXT_LIGHTS;

export const INITIAL_LIGHT: LightType = 'red';
