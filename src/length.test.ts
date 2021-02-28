import { itConvertsAsARatio } from './testing';
import {
  createLength,
  lengthToMetres,
  lengthToCentimetres,
  lengthToFeet,
  lengthToInches,
  LengthUnit,
  lengthToKilometres,
  lengthToMiles,
} from './length';

const oneMetreLength = createLength(1);

describe('createLength', () => {
  it('Returns a length object', () => {
    expect(createLength(1).value).toBe(1);
    expect(createLength(1).type).toBe('length');
  });

  describe('When the unit is centimetres', () => {
    it('Returns converts it to SI units', () => {
      expect(createLength(100, LengthUnit.centimetres).value).toBe(1);
      expect(createLength(100, LengthUnit.centimetres).type).toBe('length');
    });

    itConvertsAsARatio((n) => createLength(n, LengthUnit.centimetres).value);
  });

  describe('When the unit is feet', () => {
    it('Returns converts it to SI units', () => {
      expect(createLength(1, LengthUnit.feet).value).toBe(0.3047999902464003);
      expect(createLength(1, LengthUnit.feet).type).toBe('length');
    });

    itConvertsAsARatio((n) => createLength(n, LengthUnit.feet).value);
  });

  describe('When the unit is inches', () => {
    it('Returns converts it to SI units', () => {
      expect(createLength(1, LengthUnit.inches).value).toBe(0.025399986284007404);
      expect(createLength(1, LengthUnit.inches).type).toBe('length');
    });

    itConvertsAsARatio((n) => createLength(n, LengthUnit.inches).value);
  });

  describe('When the unit is kilometres', () => {
    it('Returns converts it to SI units', () => {
      expect(createLength(1, LengthUnit.kilometres).value).toBe(1000);
      expect(createLength(1, LengthUnit.kilometres).type).toBe('length');
    });

    itConvertsAsARatio((n) => createLength(n, LengthUnit.kilometres).value);
  });

  describe('When the unit is miles', () => {
    it('Returns converts it to SI units', () => {
      expect(createLength(1, LengthUnit.miles).value).toBe(1609.3444978925634);
      expect(createLength(1, LengthUnit.miles).type).toBe('length');
    });

    itConvertsAsARatio((n) => createLength(n, LengthUnit.miles).value);
  });
});

describe('lengthToMetres', () => {
  it('Converts the length to metres', () => {
    expect(lengthToMetres(oneMetreLength)).toBe(1);
  });

  itConvertsAsARatio((n) => lengthToMetres(createLength(n)));
});

describe('lengthToCentimetres', () => {
  it('Converts the length to centimetres', () => {
    expect(lengthToCentimetres(oneMetreLength)).toBe(100);
  });

  itConvertsAsARatio((n) => lengthToCentimetres(createLength(n)));
});

describe('lengthToFeet', () => {
  it('Converts the length to feet', () => {
    expect(lengthToFeet(oneMetreLength)).toBe(3.28084);
  });

  itConvertsAsARatio((n) => lengthToFeet(createLength(n)));
});

describe('lengthToInches', () => {
  it('Converts the length to inches', () => {
    expect(lengthToInches(oneMetreLength)).toBe(39.3701);
  });

  itConvertsAsARatio((n) => lengthToInches(createLength(n)));
});

describe('lengthToKilometres', () => {
  it('Converts the length to km', () => {
    expect(lengthToKilometres(oneMetreLength)).toBe(0.001);
  });

  itConvertsAsARatio((n) => lengthToKilometres(createLength(n)));
});

describe('lengthToMiles', () => {
  it('Converts the length to miles', () => {
    expect(lengthToMiles(oneMetreLength)).toBe(0.000621371);
  });

  itConvertsAsARatio((n) => lengthToMiles(createLength(n)));
});
