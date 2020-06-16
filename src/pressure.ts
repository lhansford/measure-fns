import NP from 'number-precision';

import { IMeasurement, MeasurementType, ConversionOptions } from './interfaces';
import {
  PASCALS_IN_HECTOPASCAL,
  PASCALS_IN_BAR,
  PASCALS_IN_MILLIBAR,
  PASCALS_IN_MMHG,
} from './constants/conversions';
import { applyOptions } from './utilities';

NP.enableBoundaryChecking(false);

export enum PressureUnit {
  pascal = 'pa',
  hectopascal = 'hpa',
  bar = 'bar',
  millibar = 'mbar',
  mmhg = 'mmhg',
}

/* SI Pressure (K) */
export interface IPressure extends IMeasurement {
  type: MeasurementType.pressure;
}

function hectopascalToPascal(value: number): number {
  return NP.times(value, PASCALS_IN_HECTOPASCAL);
}

function barToPascal(value: number): number {
  return NP.times(value, PASCALS_IN_BAR);
}

function millibarToPascal(value: number): number {
  return NP.times(value, PASCALS_IN_MILLIBAR);
}

function mmhgToPascal(value: number): number {
  return NP.times(value, PASCALS_IN_MMHG);
}

export function createPressure(value: number, unit: PressureUnit = PressureUnit.pascal): IPressure {
  switch (unit) {
    case PressureUnit.pascal:
      return { type: MeasurementType.pressure, value };
    case PressureUnit.hectopascal:
      return { type: MeasurementType.pressure, value: hectopascalToPascal(value) };
    case PressureUnit.bar:
      return { type: MeasurementType.pressure, value: barToPascal(value) };
    case PressureUnit.millibar:
      return { type: MeasurementType.pressure, value: millibarToPascal(value) };
    case PressureUnit.mmhg:
      return { type: MeasurementType.pressure, value: mmhgToPascal(value) };
    default:
      throw new Error(`${unit} is not a supported pressure unit.`);
  }
}

export function pressureToPascal(pressure: IPressure, options: ConversionOptions = {}): number {
  return applyOptions(pressure.value, options);
}

export function pressureToHectopascal(
  pressure: IPressure,
  options: ConversionOptions = {},
): number {
  return applyOptions(NP.divide(pressure.value, PASCALS_IN_HECTOPASCAL), options);
}
export function pressureToBar(pressure: IPressure, options: ConversionOptions = {}): number {
  return applyOptions(NP.divide(pressure.value, PASCALS_IN_BAR), options);
}
export function pressureToMillibar(pressure: IPressure, options: ConversionOptions = {}): number {
  return applyOptions(NP.divide(pressure.value, PASCALS_IN_MILLIBAR), options);
}
export function pressureToMmhg(pressure: IPressure, options: ConversionOptions = {}): number {
  return applyOptions(NP.divide(pressure.value, PASCALS_IN_MMHG), options);
}
