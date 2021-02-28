import {
  createTemperature,
  TemperatureUnit,
  temperatureToCelsius,
  temperatureToFahrenheit,
  temperatureToKelvin,
} from './temperature';
import { itConvertsToANumber } from './testing';

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

    itConvertsToANumber((n) => createTemperature(n, TemperatureUnit.celsius).value);
  });

  describe('When the unit is fahrenheit', () => {
    it('Returns converts it to SI units', () => {
      expect(createTemperature(1, TemperatureUnit.fahrenheit).value).toBe(255.9277777777778);
      expect(createTemperature(1, TemperatureUnit.fahrenheit).type).toBe('temperature');
    });

    itConvertsToANumber((n) => createTemperature(n, TemperatureUnit.fahrenheit).value);
  });
});

describe('temperatureToKelvin', () => {
  it('Converts the temperature to kelvin', () => {
    expect(temperatureToKelvin(oneKelvin)).toBe(1);
  });

  itConvertsToANumber((n) => temperatureToKelvin(createTemperature(n)));
});

describe('temperatureToCelsius', () => {
  it('Converts the temperature to celsius', () => {
    expect(temperatureToCelsius(oneKelvin)).toBe(-272.15);
  });

  itConvertsToANumber((n) => temperatureToCelsius(createTemperature(n)));
});

describe('temperatureToFahrenheit', () => {
  it('Converts the temperature to fahrenheit', () => {
    expect(temperatureToFahrenheit(oneKelvin)).toBe(-457.87);
  });

  itConvertsToANumber((n) => temperatureToFahrenheit(createTemperature(n)));
});
