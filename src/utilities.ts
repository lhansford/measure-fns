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
