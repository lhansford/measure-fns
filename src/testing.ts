/* eslint-disable compat/compat */
/* eslint-disable jest/no-export */
/* eslint-disable import/no-extraneous-dependencies */
import * as fc from 'fast-check';

// I.e. the conversion is straight multiplication or division
export function itConvertsAsARatio(testFunc: (number: number) => number): void {
  describe('When original value is positive', () => {
    it('Converts to a positive value', () => {
      fc.assert(
        fc.property(fc.nat(), fc.float(), (int, float) => {
          fc.pre(!(int === 0 && float === 0));
          expect(testFunc(int + float)).toBeGreaterThan(0);
        }),
      );
    });
  });

  describe('When original value is 0', () => {
    it('Converts to 0', () => {
      expect(testFunc(0)).toBe(0);
    });
  });

  describe('When original value is negative', () => {
    it('Converts to a negative value', () => {
      fc.assert(
        fc.property(fc.integer(0), fc.float({ min: 0.000000001 }), (int, float) => {
          expect(testFunc(int - float)).toBeLessThan(0);
        }),
      );
    });
  });
}

export function itConvertsToANumber(testFunc: (number: number) => number): void {
  fc.assert(
    fc.property(fc.integer(), fc.float(), (int, float) => {
      expect(Number.isNaN(testFunc(int + float))).toBe(false);
    }),
  );
}
