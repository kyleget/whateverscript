import type { Whatever } from '../types';
import { makeWhatever } from '../utils';

describe('makeWhatever', () => {
  test('it should convert a date to a `WhateverScript` date', () => {
    const myDate = new Date('1984-12-31');
    expect(makeWhatever(myDate).toString()).toEqual(
      'Thu Apr 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)'
    );
  });
});
