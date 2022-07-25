import { coordinatesToDecimal, coordinatesToDegrees, createCoordinates } from './coordinates';

const coords = createCoordinates({ latitude: 1.23, longitude: -45.987 });

describe('createCoordinates', () => {
  it('Returns a coordinates object', () => {
    expect(createCoordinates({ latitude: 0, longitude: 0 }).value).toStrictEqual({
      latitude: 0,
      longitude: 0,
    });
    expect(createCoordinates({ latitude: 0, longitude: 0 }).type).toBe('coordinates');
  });
});

describe('coordinatesToDegrees', () => {
  it('Converts the coordinates to degrees', () => {
    expect(coordinatesToDegrees(createCoordinates({ latitude: 0, longitude: 0 }))).toStrictEqual({
      latitude: {
        degrees: 0,
        minutes: 0,
        seconds: 0,
        direction: 'N',
      },
      longitude: {
        degrees: 0,
        minutes: 0,
        seconds: 0,
        direction: 'E',
      },
    });

    expect(coordinatesToDegrees(coords)).toStrictEqual({
      latitude: {
        degrees: 1,
        minutes: 13,
        seconds: 48,
        direction: 'N',
      },
      longitude: {
        degrees: 45,
        minutes: 59,
        seconds: 13.200000000007549,
        direction: 'W',
      },
    });
  });
});

describe('coordinatesToDecimal', () => {
  it('Converts the coordinates to decimal', () => {
    expect(coordinatesToDecimal(coords)).toStrictEqual({ latitude: 1.23, longitude: -45.987 });
  });
});
