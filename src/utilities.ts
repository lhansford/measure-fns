import { DecimalCoordinates, DegreesCoordinates } from './coordinates';
import { ConversionOptions } from './interfaces';

const ROUND_MULTIPLIER = 10;
function round(value: number, roundAmount: number | true): number {
  if (roundAmount === 0 || roundAmount === true) {
    return Math.round(value);
  }
  const factor = ROUND_MULTIPLIER ** roundAmount;
  return Math.round(value * factor) / factor;
}

export function applyOptions(value: number, options: ConversionOptions): number {
  if (options.round !== undefined && options.round !== false) {
    // TODO: verify round is 0> int
    return round(value, options.round);
  }
  return value;
}

export function applyOptionsToDecimalCoordinates(
  value: DecimalCoordinates,
  options: ConversionOptions,
): DecimalCoordinates {
  if (options.round !== undefined && options.round !== false) {
    // TODO: verify round is 0> int
    return {
      latitude: round(value.latitude, options.round),
      longitude: round(value.longitude, options.round),
    };
  }
  return value;
}

export function applyOptionsToDegreesCoordinates(
  value: DegreesCoordinates,
  options: ConversionOptions,
): DegreesCoordinates {
  if (options.round !== undefined && options.round !== false) {
    // TODO: verify round is 0> int
    return {
      latitude: { ...value.latitude, seconds: round(value.latitude.seconds, options.round) },
      longitude: { ...value.longitude, seconds: round(value.longitude.seconds, options.round) },
    };
  }
  return value;
}
