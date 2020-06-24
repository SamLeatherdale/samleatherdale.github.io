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
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopM: 1200,
  laptopL: 1440,
  desktop: 2560
};
const min = mapValues(sizes, size => `min-width: ${size}px`);
const max = mapValues(sizes, size => `max-width: ${size - 1}px`);

export type MediaType = {
  min: SizeType<string>;
  max: SizeType<string>;
};
const media: MediaType = {
  min,
  max
};
export default media;