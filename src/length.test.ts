import {
  createLength,
  lengthToMetres,
  lengthToCentimetres,
  lengthToFeet,
  lengthToInches,
  LengthUnit,
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
  });

  describe('When the unit is feet', () => {
    it('Returns converts it to SI units', () => {
      expect(createLength(1, LengthUnit.feet).value).toBe(0.3047999902464003);
      expect(createLength(1, LengthUnit.feet).type).toBe('length');
    });
  });

  describe('When the unit is inches', () => {
    it('Returns converts it to SI units', () => {
      expect(createLength(1, LengthUnit.inches).value).toBe(0.025399986284007407);
      expect(createLength(1, LengthUnit.inches).type).toBe('length');
    });
  });
});

describe('lengthToMetres', () => {
  it('Converts the length to metres', () => {
    expect(lengthToMetres(oneMetreLength)).toBe(1);
  });
});

describe('lengthToCentimetres', () => {
  it('Converts the length to centimetres', () => {
    expect(lengthToCentimetres(oneMetreLength)).toBe(100);
  });
});

describe('lengthToFeet', () => {
  it('Converts the length to feet', () => {
    expect(lengthToFeet(oneMetreLength)).toBe(3.28084);
  });
});

describe('lengthToInches', () => {
  it('Converts the length to inches', () => {
    expect(lengthToInches(oneMetreLength)).toBe(39.3701);
  });
});
