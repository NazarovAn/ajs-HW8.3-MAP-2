export default class SettingsV4 {
  constructor(...userSettings) {
    this.userSettings = new Map(userSettings);
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
