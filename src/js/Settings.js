export default class Settings {
  constructor() {
    this.default = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);
    this.defaultSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.userSettings = new Map(this.defaultSettings);
  }

  setSettings(key, option) {
    if (!this.default.get(key).includes(option)) {
      throw new Error(`Варианты для опции ${key}: ${this.default.get(key)}`);
    }
    this.userSettings.set(key, option);
  }
}
