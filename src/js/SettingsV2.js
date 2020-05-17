/**
 * Класс Settings используется для задания пользовательских настроек приложения.
 * @class
 */
export default class SettingsV2 {
  constructor() {
    this.settings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
  }

  setSettings(key, option) {
    this.settings.set(key, option);
  }

  getSettings() {
    return this.settings;
  }
}
