import { enableBoundaryChecking, divide, times } from 'number-precision';

import { IMeasurement, MeasurementType, ConversionOptions } from './interfaces';
import {
  CENTIMETRES_IN_METRE,
  FEET_IN_METRE,
  INCHES_IN_METRE,
  KILOMETRES_IN_METRE,
  MILES_IN_METRE,
} from './constants/conversions';
import { applyOptions } from './utilities';

enableBoundaryChecking(false);

export enum LengthUnit {
  metres = 'm',
  centimetres = 'cm',
  feet = 'ft',
  inches = 'in',
  kilometres = 'km',
  miles = 'miles',
}

/* SI Length (m) */
export interface ILength extends IMeasurement {
  type: MeasurementType.length;
}

function centimetresToMetres(value: number): number {
  return divide(value, CENTIMETRES_IN_METRE);
}

function feetToMetres(value: number): number {
  return divide(value, FEET_IN_METRE);
}

function inchesToMetres(value: number): number {
  return divide(value, INCHES_IN_METRE);
}

function kilometresToMetres(value: number): number {
  return divide(value, KILOMETRES_IN_METRE);
}

function milesToMetres(value: number): number {
  return divide(value, MILES_IN_METRE);
}

export function createLength(value: number, unit: LengthUnit = LengthUnit.metres): ILength {
  switch (unit) {
    case LengthUnit.metres:
      return { type: MeasurementType.length, value };
    case LengthUnit.centimetres:
      return { type: MeasurementType.length, value: centimetresToMetres(value) };
    case LengthUnit.feet:
      return { type: MeasurementType.length, value: feetToMetres(value) };
    case LengthUnit.inches:
      return { type: MeasurementType.length, value: inchesToMetres(value) };
    case LengthUnit.kilometres:
      return { type: MeasurementType.length, value: kilometresToMetres(value) };
    case LengthUnit.miles:
      return { type: MeasurementType.length, value: milesToMetres(value) };
    default:
      throw new Error(`${unit} is not a supported length unit.`);
  }
}

export function lengthToMetres(_length: ILength, options: ConversionOptions = {}): number {
  return applyOptions(_length.value, options);
}

export function lengthToCentimetres(_length: ILength, options: ConversionOptions = {}): number {
  return applyOptions(times(_length.value, CENTIMETRES_IN_METRE), options);
}

export function lengthToFeet(_length: ILength, options: ConversionOptions = {}): number {
  return applyOptions(times(_length.value, FEET_IN_METRE), options);
}

export function lengthToInches(_length: ILength, options: ConversionOptions = {}): number {
  return applyOptions(times(_length.value, INCHES_IN_METRE), options);
}

export function lengthToKilometres(_length: ILength, options: ConversionOptions = {}): number {
  return applyOptions(times(_length.value, KILOMETRES_IN_METRE), options);
}

export function lengthToMiles(_length: ILength, options: ConversionOptions = {}): number {
  return applyOptions(times(_length.value, MILES_IN_METRE), options);
}
