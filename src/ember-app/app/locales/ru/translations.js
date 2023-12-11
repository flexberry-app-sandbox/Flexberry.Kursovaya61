import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya6ДиректорОтделаПоРаботеСКлиентамиLForm from './forms/i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-l';
import IISKursovaya6ЗаключениеДоговораLForm from './forms/i-i-s-kursovaya6-заключение-договора-l';
import IISKursovaya6КлиентLForm from './forms/i-i-s-kursovaya6-клиент-l';
import IISKursovaya6ОказаниеКонсультацийLForm from './forms/i-i-s-kursovaya6-оказание-консультаций-l';
import IISKursovaya6РасторжениеДоговораLForm from './forms/i-i-s-kursovaya6-расторжение-договора-l';
import IISKursovaya6ДиректорОтделаПоРаботеСКлиентамиEForm from './forms/i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-e';
import IISKursovaya6ЗаключениеДоговораEForm from './forms/i-i-s-kursovaya6-заключение-договора-e';
import IISKursovaya6КлиентEForm from './forms/i-i-s-kursovaya6-клиент-e';
import IISKursovaya6ОказаниеКонсультацийEForm from './forms/i-i-s-kursovaya6-оказание-консультаций-e';
import IISKursovaya6РасторжениеДоговораEForm from './forms/i-i-s-kursovaya6-расторжение-договора-e';
import IISKursovaya6ДиректорОтделаПоРаботеСКлиентамиModel from './models/i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами';
import IISKursovaya6ЗаключениеДоговораModel from './models/i-i-s-kursovaya6-заключение-договора';
import IISKursovaya6КлиентModel from './models/i-i-s-kursovaya6-клиент';
import IISKursovaya6ОказаниеКонсультацийModel from './models/i-i-s-kursovaya6-оказание-консультаций';
import IISKursovaya6РасторжениеДоговораModel from './models/i-i-s-kursovaya6-расторжение-договора';
import IISKursovaya6РасчетОставшегосяВремениModel from './models/i-i-s-kursovaya6-расчет-оставшегося-времени';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами': IISKursovaya6ДиректорОтделаПоРаботеСКлиентамиModel,
    'i-i-s-kursovaya6-заключение-договора': IISKursovaya6ЗаключениеДоговораModel,
    'i-i-s-kursovaya6-клиент': IISKursovaya6КлиентModel,
    'i-i-s-kursovaya6-оказание-консультаций': IISKursovaya6ОказаниеКонсультацийModel,
    'i-i-s-kursovaya6-расторжение-договора': IISKursovaya6РасторжениеДоговораModel,
    'i-i-s-kursovaya6-расчет-оставшегося-времени': IISKursovaya6РасчетОставшегосяВремениModel
  },

  'application-name': 'Kursovaya6',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya6',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya6',
          title: 'Kursovaya6'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        kursovaya6: {
          caption: 'Kursovaya6',
          title: 'Kursovaya6',
          'i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-l': {
            caption: 'Директор отдела по работе с клиентами',
            title: ''
          },
          'i-i-s-kursovaya6-оказание-консультаций-l': {
            caption: 'Оказание консультаций',
            title: ''
          },
          'i-i-s-kursovaya6-расторжение-договора-l': {
            caption: 'Расторжение договора',
            title: ''
          },
          'i-i-s-kursovaya6-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya6-заключение-договора-l': {
            caption: 'Заключение договора',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-l': IISKursovaya6ДиректорОтделаПоРаботеСКлиентамиLForm,
    'i-i-s-kursovaya6-заключение-договора-l': IISKursovaya6ЗаключениеДоговораLForm,
    'i-i-s-kursovaya6-клиент-l': IISKursovaya6КлиентLForm,
    'i-i-s-kursovaya6-оказание-консультаций-l': IISKursovaya6ОказаниеКонсультацийLForm,
    'i-i-s-kursovaya6-расторжение-договора-l': IISKursovaya6РасторжениеДоговораLForm,
    'i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-e': IISKursovaya6ДиректорОтделаПоРаботеСКлиентамиEForm,
    'i-i-s-kursovaya6-заключение-договора-e': IISKursovaya6ЗаключениеДоговораEForm,
    'i-i-s-kursovaya6-клиент-e': IISKursovaya6КлиентEForm,
    'i-i-s-kursovaya6-оказание-консультаций-e': IISKursovaya6ОказаниеКонсультацийEForm,
    'i-i-s-kursovaya6-расторжение-договора-e': IISKursovaya6РасторжениеДоговораEForm
  },

});

export default translations;
