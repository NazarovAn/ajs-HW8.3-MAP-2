import Settings from '../Settings';

test('default Settings', () => {
  const newSet = new Settings();
  expect(newSet.defaultSettings).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test('new Settings', () => {
  const newSet = new Settings();
  newSet.setSettings('theme', 'light');
  newSet.setSettings('music', 'rock');
  expect(newSet.userSettings).toEqual(new Map([['theme', 'light'], ['music', 'rock'], ['difficulty', 'easy']]));
});

test('error', () => {
  const newSet = new Settings();
  expect(() => newSet.setSettings('music', 'country')).toThrow(new Error('Варианты для опции music: trance,pop,rock,chillout,off'));
});
