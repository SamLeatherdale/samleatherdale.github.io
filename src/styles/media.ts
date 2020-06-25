import { mapValues } from 'lodash';

type SizeType<T> = {
  mobileS: T;
  mobileM: T;
  mobileL: T;
  tablet: T;
  laptop: T;
  laptopM: T;
  laptopL: T;
  desktop: T;
};
const sizes: SizeType<number> = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 450,
  tablet: 768,
  laptop: 1024,
  laptopM: 1200,
  laptopL: 1440,
  desktop: 2560
};

export const createMinWidth = (size: number) => `min-width: ${size}px`;
export const createMaxWidth = (size: number) => `max-width: ${size - 1}px`;
export const createMinMaxWidth = (size: number) => ({
  min: createMinWidth(size),
  max: createMaxWidth(size)
});

const min = mapValues(sizes, createMinWidth);
const max = mapValues(sizes, createMaxWidth);

export type MediaType = {
  min: SizeType<string>;
  max: SizeType<string>;
  sizes: SizeType<number>;
};
const media: MediaType = {
  min,
  max,
  sizes
};
export default media;