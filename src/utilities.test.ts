import { applyOptions } from './utilities';

describe('applyOptions', () => {
  describe('.round', () => {
    describe('with an invalid value', () => {});

    describe('when .round is true', () => {
      const options = { round: true };

      it('Rounds to an integer', () => {
        expect(applyOptions(1, options)).toBe(1);
        expect(applyOptions(1.1, options)).toBe(1);
        expect(applyOptions(1.49, options)).toBe(1);
        expect(applyOptions(1.5, options)).toBe(2);
        expect(applyOptions(1.9999, options)).toBe(2);
      });
    });

    describe('when .round is 0', () => {
      const options = { round: true };

      it('Rounds to an integer', () => {
        expect(applyOptions(1, options)).toBe(1);
        expect(applyOptions(1.1, options)).toBe(1);
        expect(applyOptions(1.49, options)).toBe(1);
        expect(applyOptions(1.5, options)).toBe(2);
        expect(applyOptions(1.9999, options)).toBe(2);
      });
    });

    describe('when .round is larger than 0', () => {
      it('Rounds to the given decimal place', () => {
        expect(applyOptions(1, { round: 1 })).toBe(1);
        expect(applyOptions(1.1, { round: 1 })).toBe(1.1);
        expect(applyOptions(1.41, { round: 1 })).toBe(1.4);
        expect(applyOptions(1.49, { round: 1 })).toBe(1.5);
        expect(applyOptions(1.5, { round: 1 })).toBe(1.5);
        expect(applyOptions(1.8999, { round: 1 })).toBe(1.9);
        expect(applyOptions(1.9999, { round: 1 })).toBe(2);
        expect(applyOptions(1.91, { round: 1 })).toBe(1.9);
        expect(applyOptions(1.9999, { round: 3 })).toBe(2);
        expect(applyOptions(1.9999, { round: 10 })).toBe(1.9999);
        expect(applyOptions(1.44444, { round: 3 })).toBe(1.444);
      });
    });
  });
});
