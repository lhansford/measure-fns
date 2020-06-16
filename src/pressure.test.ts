import {
  createPressure,
  PressureUnit,
  pressureToBar,
  pressureToHectopascal,
  pressureToMillibar,
  pressureToMmhg,
  pressureToPascal,
} from './pressure';

const onePascal = createPressure(1);

describe('createPressure', () => {
  it('Returns a pressure object', () => {
    expect(createPressure(1).value).toBe(1);
    expect(createPressure(1).type).toBe('pressure');
  });

  describe('When the unit is hectopascal', () => {
    it('Returns converts it to SI units', () => {
      expect(createPressure(1, PressureUnit.hectopascal).value).toBe(100);
      expect(createPressure(1, PressureUnit.hectopascal).type).toBe('pressure');
    });
  });

  describe('When the unit is bar', () => {
    it('Returns converts it to SI units', () => {
      expect(createPressure(1, PressureUnit.bar).value).toBe(100000);
      expect(createPressure(1, PressureUnit.bar).type).toBe('pressure');
    });
  });

  describe('When the unit is millibar', () => {
    it('Returns converts it to SI units', () => {
      expect(createPressure(1, PressureUnit.millibar).value).toBe(100);
      expect(createPressure(1, PressureUnit.millibar).type).toBe('pressure');
    });
  });

  describe('When the unit is mmhg', () => {
    it('Returns converts it to SI units', () => {
      expect(createPressure(1, PressureUnit.mmhg).value).toBe(133.322);
      expect(createPressure(1, PressureUnit.mmhg).type).toBe('pressure');
    });
  });
});

describe('pressureToPascal', () => {
  it('Converts the pressure to Pascal', () => {
    expect(pressureToPascal(onePascal)).toBe(1);
  });
});

describe('pressureToBar', () => {
  it('Converts the pressure to Bar', () => {
    expect(pressureToBar(onePascal)).toBe(0.00001);
  });
});

describe('pressureToHectopascal', () => {
  it('Converts the pressure to Hectopascal', () => {
    expect(pressureToHectopascal(onePascal)).toBe(0.01);
  });
});

describe('pressureToMillibar', () => {
  it('Converts the pressure to Millibar', () => {
    expect(pressureToMillibar(onePascal)).toBe(0.01);
  });
});

describe('pressureToMmhg', () => {
  it('Converts the pressure to mmHg', () => {
    expect(pressureToMmhg(onePascal)).toBe(0.007500637554192107);
  });
});
