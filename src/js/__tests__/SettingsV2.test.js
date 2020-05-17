import SettingsV2 from '../SettingsV2';

test('default Settings', () => {
  const newSet = new SettingsV2();
  expect(newSet.settings).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test('new Settings', () => {
  const newSet = new SettingsV2();
  newSet.setSettings('theme', 'light');
  newSet.setSettings('music', 'rock');
  expect(newSet.settings).toEqual(new Map([['theme', 'light'], ['music', 'rock'], ['difficulty', 'easy']]));
});

test('getSettings', () => {
  const newSet = new SettingsV2();
  expect(newSet.getSettings()).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});
