export enum MeasurementType {
  coordinates = 'coordinates',
  length = 'length',
  mass = 'mass',
  pressure = 'pressure',
  speed = 'speed',
  temperature = 'temperature',
}

export interface IMeasurement {
  type: MeasurementType;
  /* SI units */
  value: number;
}

export interface ConversionOptions {
  round?: number | boolean;
}
