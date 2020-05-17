/**
 * Класс Settings используется для задания пользовательских настроек приложения.
 * @class
 */
export default class SettingsV1 {
  constructor() {
    this.defaultSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
  }

  /**
 * Сеттер, устанавливающий настройки приложения.
 * @param { object } userSettings
 * @property  { string } userSettings.key - Тип настройки
 * @property  { string } userSettings.option - Значение настройки
 */
  set settings(userSettings) {
    this.defaultSettings.set(userSettings.key, userSettings.option);
  }

  get settings() {
    return this.defaultSettings;
  }
}
