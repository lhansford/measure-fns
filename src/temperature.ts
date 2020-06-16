import NP from 'number-precision';

import { IMeasurement, MeasurementType, ConversionOptions } from './interfaces';
import { applyOptions } from './utilities';

NP.enableBoundaryChecking(false);

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
  return NP.plus(value, KELIN_OFFSET);
}

function fahrenheitToKelvin(value: number): number {
  // eslint-disable-next-line no-magic-numbers
  return NP.plus(NP.times(NP.minus(value, 32), NP.divide(5, 9)), KELIN_OFFSET);
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

export function temperatureToKelvin(
  temperature: ITemperature,
  options: ConversionOptions = {},
): number {
  return applyOptions(temperature.value, options);
}

export function temperatureToCelsius(
  temperature: ITemperature,
  options: ConversionOptions = {},
): number {
  return applyOptions(NP.minus(temperature.value, KELIN_OFFSET), options);
}

export function temperatureToFahrenheit(
  temperature: ITemperature,
  options: ConversionOptions = {},
): number {
  return applyOptions(
    // eslint-disable-next-line no-magic-numbers
    NP.plus(NP.times(NP.minus(temperature.value, KELIN_OFFSET), NP.divide(9, 5)), 32),
    options,
  );
}
