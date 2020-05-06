import { IMeasurement, MeasurementType } from './interfaces';

export enum TemperatureUnit {
  kelvin = 'k',
  celsius = 'c',
  fahrenheit = 'f',
}

const KELIN_OFFSET = 273.15;

/* SI Temperature (K) */
export interface ITemperature extends IMeasurement {
  type: MeasurementType.temperature;
}

function celsiusToKelvin(value: number): number {
  return value + KELIN_OFFSET;
}

function fahrenheitToKelvin(value: number): number {
  // eslint-disable-next-line no-magic-numbers
  return (value - 32) * (5 / 9) + KELIN_OFFSET;
}

export function createTemperature(
  value: number,
  unit: TemperatureUnit = TemperatureUnit.kelvin,
): ITemperature {
  switch (unit) {
    case TemperatureUnit.kelvin:
      return { type: MeasurementType.temperature, value };
    case TemperatureUnit.celsius:
      return { type: MeasurementType.temperature, value: celsiusToKelvin(value) };
    case TemperatureUnit.fahrenheit:
      return { type: MeasurementType.temperature, value: fahrenheitToKelvin(value) };
    default:
      throw new Error(`${unit} is not a supported temperature unit.`);
  }
}

export function temperatureToKelvin(temperature: ITemperature): number {
  return temperature.value;
}

export function temperatureToCelsius(temperature: ITemperature): number {
  return temperature.value - KELIN_OFFSET;
}

export function temperatureToFahrenheit(temperature: ITemperature): number {
  // eslint-disable-next-line no-magic-numbers
  return (temperature.value - KELIN_OFFSET) * (9 / 5) + 32;
}
