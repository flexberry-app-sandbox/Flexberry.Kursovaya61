import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya6',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya6',
          title: 'Kursovaya6'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
