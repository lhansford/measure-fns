import {
  createTemperature,
  TemperatureUnit,
  temperatureToCelsius,
  temperatureToFahrenheit,
  temperatureToKelvin,
} from './temperature';

const oneKelvin = createTemperature(1);

describe('createTemperature', () => {
  it('Returns a temperature object', () => {
    expect(createTemperature(1).value).toBe(1);
    expect(createTemperature(1).type).toBe('temperature');
  });

  describe('When the unit is celsius', () => {
    it('Returns converts it to SI units', () => {
      expect(createTemperature(1, TemperatureUnit.celsius).value).toBe(274.15);
      expect(createTemperature(1, TemperatureUnit.celsius).type).toBe('temperature');
    });
  });

  describe('When the unit is fahrenheit', () => {
    it('Returns converts it to SI units', () => {
      expect(createTemperature(1, TemperatureUnit.fahrenheit).value).toBe(255.92777777777775);
      expect(createTemperature(1, TemperatureUnit.fahrenheit).type).toBe('temperature');
    });
  });
});

describe('temperatureToKelvin', () => {
  it('Converts the temperature to kelvin', () => {
    expect(temperatureToKelvin(oneKelvin)).toBe(1);
  });
});

describe('temperatureToCelsius', () => {
  it('Converts the temperature to celsius', () => {
    expect(temperatureToCelsius(oneKelvin)).toBe(-272.15);
  });
});

describe('temperatureToFahrenheit', () => {
  it('Converts the temperature to fahrenheit', () => {
    expect(temperatureToFahrenheit(oneKelvin)).toBe(-457.86999999999995);
  });
});
