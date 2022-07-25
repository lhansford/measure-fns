import { enableBoundaryChecking, times } from 'number-precision';

import { ConversionOptions, MeasurementType } from './interfaces';
import { applyOptionsToDecimalCoordinates, applyOptionsToDegreesCoordinates } from './utilities';

enableBoundaryChecking(false);

export enum CoordinatesUnit {
  decimal = 'decimal',
  degrees = 'degrees',
}

type DMS = { degrees: number; minutes: number; seconds: number; direction: 'N' | 'S' | 'E' | 'W' };
export type DecimalCoordinates = { latitude: number; longitude: number };
export type DegreesCoordinates = { latitude: DMS; longitude: DMS };

export interface ICoordinates {
  type: MeasurementType.coordinates;
  value: DecimalCoordinates;
}

export function createCoordinates(
  value: DecimalCoordinates,
  unit: CoordinatesUnit = CoordinatesUnit.decimal,
): ICoordinates {
  switch (unit) {
    case CoordinatesUnit.decimal:
      return { type: MeasurementType.coordinates, value };
    case CoordinatesUnit.degrees:
      throw new Error(`${unit} is not implemented yet.`);
    default:
      throw new Error(`${unit} is not a supported length unit.`);
  }
}

export function coordinatesToDecimal(
  coords: ICoordinates,
  options: ConversionOptions = {},
): DecimalCoordinates {
  return applyOptionsToDecimalCoordinates(coords.value, options);
}

function coordinateToDegrees(coordinate: number): number {
  return Math.floor(Math.abs(coordinate));
}

function coordinateToMinutes(coordinate: number): number {
  return Math.floor(times(60, Math.abs(coordinate) - coordinateToDegrees(coordinate)));
}

function coordinateToSeconds(coordinate: number): number {
  return (
    times(3600, Math.abs(coordinate) - coordinateToDegrees(coordinate)) -
    times(60, coordinateToMinutes(coordinate))
  );
}

export function coordinatesToDegrees(
  { value: { latitude, longitude } }: ICoordinates,
  options: ConversionOptions = {},
): DegreesCoordinates {
  const coords: DegreesCoordinates = {
    latitude: {
      degrees: coordinateToDegrees(latitude),
      minutes: coordinateToMinutes(latitude),
      seconds: coordinateToSeconds(latitude),
      direction: latitude >= 0 ? 'N' : 'S',
    },
    longitude: {
      degrees: coordinateToDegrees(longitude),
      minutes: coordinateToMinutes(longitude),
      seconds: coordinateToSeconds(longitude),
      direction: longitude >= 0 ? 'E' : 'W',
    },
  };

  return applyOptionsToDegreesCoordinates(coords, options);
}
