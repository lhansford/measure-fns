import NP from 'number-precision';

import { IMeasurement, MeasurementType, ConversionOptions } from './interfaces';
import {
  SECONDS_IN_HOUR,
  KILOMETRES_IN_METRE,
  MILES_IN_METRE,
  NAUTICAL_MILES_IN_METRE,
  FEET_IN_METRE,
} from './constants/conversions';
import { applyOptions } from './utilities';

NP.enableBoundaryChecking(false);

export enum SpeedUnit {
  metresPerSecond = 'ms',
  kilometresPerHour = 'kmh',
  milesPerHour = 'mph',
  knots = 'knot',
  feetPerSecond = 'fps',
}

/* SI Speed (m/s) */
export interface ISpeed extends IMeasurement {
  type: MeasurementType.speed;
}

function kmhToMs(value: number): number {
  return NP.divide(value, SECONDS_IN_HOUR, KILOMETRES_IN_METRE);
}

function mphToMs(value: number): number {
  return NP.divide(value, SECONDS_IN_HOUR, MILES_IN_METRE);
}

function knotsToMs(value: number): number {
  return NP.divide(value, SECONDS_IN_HOUR, NAUTICAL_MILES_IN_METRE);
}

function fpsToMs(value: number): number {
  // eslint-disable-next-line no-magic-numbers
  return NP.divide(value, FEET_IN_METRE);
}

export function createSpeed(value: number, unit: SpeedUnit = SpeedUnit.metresPerSecond): ISpeed {
  switch (unit) {
    case SpeedUnit.metresPerSecond:
      return { type: MeasurementType.speed, value };
    case SpeedUnit.kilometresPerHour:
      return { type: MeasurementType.speed, value: kmhToMs(value) };
    case SpeedUnit.milesPerHour:
      return { type: MeasurementType.speed, value: mphToMs(value) };
    case SpeedUnit.knots:
      return { type: MeasurementType.speed, value: knotsToMs(value) };
    case SpeedUnit.feetPerSecond:
      return { type: MeasurementType.speed, value: fpsToMs(value) };
    default:
      throw new Error(`${unit} is not a supported speed unit.`);
  }
}

export function speedToMs(speed: ISpeed, options: ConversionOptions = {}): number {
  return applyOptions(speed.value, options);
}

export function speedToKmh(speed: ISpeed, options: ConversionOptions = {}): number {
  return applyOptions(NP.times(speed.value, SECONDS_IN_HOUR, KILOMETRES_IN_METRE), options);
}
export function speedToMph(speed: ISpeed, options: ConversionOptions = {}): number {
  return applyOptions(NP.times(speed.value, SECONDS_IN_HOUR, MILES_IN_METRE), options);
}
export function speedToKnots(speed: ISpeed, options: ConversionOptions = {}): number {
  return applyOptions(NP.times(speed.value, SECONDS_IN_HOUR, NAUTICAL_MILES_IN_METRE), options);
}
export function speedToFps(speed: ISpeed, options: ConversionOptions = {}): number {
  return applyOptions(NP.times(speed.value, FEET_IN_METRE), options);
}
