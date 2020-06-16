import {
  createSpeed,
  SpeedUnit,
  speedToKmh,
  speedToMph,
  speedToKnots,
  speedToFps,
  speedToMs,
} from './speed';

const oneMeterPerSecond = createSpeed(1);

describe('createSpeed', () => {
  it('Returns a speed object', () => {
    expect(createSpeed(1).value).toBe(1);
    expect(createSpeed(1).type).toBe('speed');
  });

  describe('When the unit is m/s', () => {
    it('Returns converts it to SI units', () => {
      expect(createSpeed(1, SpeedUnit.metresPerSecond).value).toBe(1);
      expect(createSpeed(1, SpeedUnit.metresPerSecond).type).toBe('speed');
    });
  });

  describe('When the unit is km/h', () => {
    it('Returns converts it to SI units', () => {
      expect(createSpeed(1, SpeedUnit.kilometresPerHour).value).toBe(0.2777777777777778);
      expect(createSpeed(1, SpeedUnit.kilometresPerHour).type).toBe('speed');
    });
  });

  describe('When the unit is miles per hour', () => {
    it('Returns converts it to SI units', () => {
      expect(createSpeed(1, SpeedUnit.milesPerHour).value).toBe(0.4470401383034899);
      expect(createSpeed(1, SpeedUnit.milesPerHour).type).toBe('speed');
    });
  });

  describe('When the unit is knots', () => {
    it('Returns converts it to SI units', () => {
      expect(createSpeed(1, SpeedUnit.knots).value).toBe(0.5144442571867349);
      expect(createSpeed(1, SpeedUnit.knots).type).toBe('speed');
    });
  });

  describe('When the unit is feet per second', () => {
    it('Returns converts it to SI units', () => {
      expect(createSpeed(1, SpeedUnit.feetPerSecond).value).toBe(0.3047999902464003);
      expect(createSpeed(1, SpeedUnit.feetPerSecond).type).toBe('speed');
    });
  });
});

describe('speedToMs', () => {
  it('Converts the speed to m/s', () => {
    expect(speedToMs(oneMeterPerSecond)).toBe(1);
  });
});

describe('speedToKmh', () => {
  it('Converts the speed to km/h', () => {
    expect(speedToKmh(oneMeterPerSecond)).toBe(3.6);
  });
});

describe('speedToMph', () => {
  it('Converts the speed to miles per hour', () => {
    expect(speedToMph(oneMeterPerSecond)).toBe(2.2369356);
  });
});

describe('speedToKnots', () => {
  it('Converts the speed to knots', () => {
    expect(speedToKnots(oneMeterPerSecond)).toBe(1.9438452);
  });
});

describe('speedToFps', () => {
  it('Converts the speed to feet per second', () => {
    expect(speedToFps(oneMeterPerSecond)).toBe(3.28084);
  });
});
