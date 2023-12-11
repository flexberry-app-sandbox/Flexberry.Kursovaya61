import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  стоимость: DS.attr('number'),
  тип: DS.attr('i-i-s-kursovaya6-тип-договора'),
  директорОтделаПоРаботеСКлиентами: DS.belongsTo('i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-kursovaya6-клиент', { inverse: null, async: false }),
  оказаниеКонсультаций: DS.belongsTo('i-i-s-kursovaya6-оказание-консультаций', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya6-заключение-договора.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya6-заключение-договора.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-kursovaya6-заключение-договора.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-kursovaya6-заключение-договора.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  директорОтделаПоРаботеСКлиентами: {
    descriptionKey: 'models.i-i-s-kursovaya6-заключение-договора.validations.директорОтделаПоРаботеСКлиентами.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya6-заключение-договора.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказаниеКонсультаций: {
    descriptionKey: 'models.i-i-s-kursovaya6-заключение-договора.validations.оказаниеКонсультаций.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаключениеДоговораE', 'i-i-s-kursovaya6-заключение-договора', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    тип: attr('Тип', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 }),
    директорОтделаПоРаботеСКлиентами: belongsTo('i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами', '', {
      фамилия: attr('', { index: 4 }),
      имя: attr('', { index: 5 }),
      отчество: attr('', { index: 6 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-kursovaya6-клиент', '', {
      фамилия: attr('', { index: 7 }),
      имя: attr('', { index: 8 }),
      отчество: attr('', { index: 9 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ЗаключениеДоговораL', 'i-i-s-kursovaya6-заключение-договора', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    тип: attr('Тип', { index: 2 }),
    стоимость: attr('Стоимость', { index: 3 }),
    директорОтделаПоРаботеСКлиентами: belongsTo('i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами', 'Id', {
      id: attr('Id', { index: 4 })
    }, { index: -1, hidden: true }),
    оказаниеКонсультаций: belongsTo('i-i-s-kursovaya6-оказание-консультаций', 'Дата', {
      дата: attr('Дата', { index: 5 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-kursovaya6-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
