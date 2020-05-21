import SettingsV4 from '../SettingsV4';

test('default Settings', () => {
  const newSet = new SettingsV4();
  expect(newSet.settings).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test('one user Setting', () => {
  const newSet = new SettingsV4(['theme', 'ligth']);
  expect(newSet.settings).toEqual(new Map([['theme', 'ligth'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test('two user Settings', () => {
  const newSet = new SettingsV4(['theme', 'ligth'], ['music', 'rock']);
  expect(newSet.settings).toEqual(new Map([['theme', 'ligth'], ['music', 'rock'], ['difficulty', 'easy']]));
});

test('three user Settings', () => {
  const newSet = new SettingsV4(['theme', 'ligth'], ['music', 'trance'], ['difficulty', 'nightmare']);
  expect(newSet.settings).toEqual(new Map([['theme', 'ligth'], ['music', 'trance'], ['difficulty', 'nightmare']]));
});
