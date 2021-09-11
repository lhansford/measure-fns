import { enableBoundaryChecking, divide, times } from 'number-precision';

import { IMeasurement, MeasurementType, ConversionOptions } from './interfaces';
import { GRAMS_IN_KILOGRAM, POUNDS_IN_KILOGRAM, OUNCES_IN_KILOGRAM } from './constants/conversions';
import { applyOptions } from './utilities';

enableBoundaryChecking(false);

export enum MassUnit {
  kilograms = 'kg',
  grams = 'g',
  pounds = 'lb',
  ounces = 'oz',
}

/* SI Mass (kg) */
export interface IMass extends IMeasurement {
  type: MeasurementType.mass;
}

function gramsToKilograms(value: number): number {
  return divide(value, GRAMS_IN_KILOGRAM);
}

function poundsToKilograms(value: number): number {
  return divide(value, POUNDS_IN_KILOGRAM);
}

function ouncesToKilograms(value: number): number {
  return divide(value, OUNCES_IN_KILOGRAM);
}

export function createMass(value: number, unit: MassUnit = MassUnit.kilograms): IMass {
  switch (unit) {
    case MassUnit.kilograms:
      return { type: MeasurementType.mass, value };
    case MassUnit.grams:
      return { type: MeasurementType.mass, value: gramsToKilograms(value) };
    case MassUnit.pounds:
      return { type: MeasurementType.mass, value: poundsToKilograms(value) };
    case MassUnit.ounces:
      return { type: MeasurementType.mass, value: ouncesToKilograms(value) };
    default:
      throw new Error(`${unit} is not a supported mass unit.`);
  }
}

export function massToKilograms(_mass: IMass, options: ConversionOptions = {}): number {
  return applyOptions(_mass.value, options);
}

export function massToGrams(_mass: IMass, options: ConversionOptions = {}): number {
  return applyOptions(times(_mass.value, GRAMS_IN_KILOGRAM), options);
}

export function massToPounds(_mass: IMass, options: ConversionOptions = {}): number {
  return applyOptions(times(_mass.value, POUNDS_IN_KILOGRAM), options);
}

export function massToOunces(_mass: IMass, options: ConversionOptions = {}): number {
  return applyOptions(times(_mass.value, OUNCES_IN_KILOGRAM), options);
}
