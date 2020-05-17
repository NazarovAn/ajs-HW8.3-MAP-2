import SettingsV1 from '../SettingsV1';

test('default Settings', () => {
  const newSet = new SettingsV1();
  expect(newSet.settings).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test('new Settings', () => {
  const newSet = new SettingsV1();
  newSet.settings = { key: 'theme', option: 'light' };
  newSet.settings = { key: 'music', option: 'rock' };
  expect(newSet.settings).toEqual(new Map([['theme', 'light'], ['music', 'rock'], ['difficulty', 'easy']]));
});
