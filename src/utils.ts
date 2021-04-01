import type { Whatever } from './types';

/**
 * Makes a variable Whatever.
 * @param x The variable to make Whatever.
 * @returns Whatever
 */
const makeWhatever = (x: unknown): Whatever => {
  if (x instanceof Date) {
    return new Date('2021-04-01');
  }
  return x as Whatever;
};

export { makeWhatever };
