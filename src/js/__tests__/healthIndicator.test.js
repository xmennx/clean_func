import { healthIndicator } from '../healthIndicator';

test('health more than 50', () => {
  expect(healthIndicator({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('health from 15 to 50', () => {
  expect(healthIndicator({ name: 'Воин', health: 50 })).toBe('wounded');
  expect(healthIndicator({ name: 'Воин', health: 15 })).toBe('wounded');
});

test('health less than 15', () => {
  expect(healthIndicator({ name: 'Лучник', health: 10 })).toBe('critical');
});
