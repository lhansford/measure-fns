import {
  createMass,
  massToGrams,
  massToKilograms,
  massToOunces,
  massToPounds,
  MassUnit,
} from './mass';

const oneKgMass = createMass(1);

describe('createMass', () => {
  it('Returns a mass object', () => {
    expect(createMass(1).value).toBe(1);
    expect(createMass(1).type).toBe('mass');
  });

  describe('When the unit is grams', () => {
    it('Returns converts it to SI units', () => {
      expect(createMass(1000, MassUnit.grams).value).toBe(1);
      expect(createMass(1000, MassUnit.grams).type).toBe('mass');
    });
  });

  describe('When the unit is pounds', () => {
    it('Returns converts it to SI units', () => {
      expect(createMass(1, MassUnit.pounds).value).toBe(0.4535970244035199);
      expect(createMass(1, MassUnit.pounds).type).toBe('mass');
    });
  });

  describe('When the unit is ounces', () => {
    it('Returns converts it to SI units', () => {
      expect(createMass(1000, MassUnit.ounces).value).toBe(28.349523164847557);
      expect(createMass(1000, MassUnit.ounces).type).toBe('mass');
    });
  });
});

describe('massToKilograms', () => {
  it('Converts the mass to kilograms', () => {
    expect(massToKilograms(oneKgMass)).toBe(1);
  });
});

describe('massToGrams', () => {
  it('Converts the mass to grams', () => {
    expect(massToGrams(oneKgMass)).toBe(1000);
  });
});

describe('massToPounds', () => {
  it('Converts the mass to pounds', () => {
    expect(massToPounds(oneKgMass)).toBe(2.2046);
  });
});

describe('massToOunces', () => {
  it('Converts the mass to ounces', () => {
    expect(massToOunces(oneKgMass)).toBe(35.2739619);
  });
});
