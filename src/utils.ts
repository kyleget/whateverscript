import type { Whatever } from './types';

/**
 * Makes a variable Whatever.
 * @param x The variable to make Whatever.
 * @returns Whatever
 */
const makeWhatever = (x: unknown): Whatever => {
  return x as Whatever;
};

export { makeWhatever };
