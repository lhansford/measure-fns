export enum MeasurementType {
  mass = 'mass',
  length = 'length',
  temperature = 'temperature',
  pressure = 'pressure',
  speed = 'speed',
}

export interface IMeasurement {
  type: MeasurementType;
  /* SI units */
  value: number;
}

export interface ConversionOptions {
  round?: number | boolean;
}
