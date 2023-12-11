import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  имя: DS.attr('string'),
  наимОрганицации: DS.attr('string'),
  номерТелефона: DS.attr('string'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-kursovaya6-клиент.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-kursovaya6-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наимОрганицации: {
    descriptionKey: 'models.i-i-s-kursovaya6-клиент.validations.наимОрганицации.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-kursovaya6-клиент.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-kursovaya6-клиент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-kursovaya6-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-kursovaya6-клиент', {
    id: attr('Id', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    наимОрганицации: attr('Наим органицации', { index: 5 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-kursovaya6-клиент', {
    id: attr('Id Клиента', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    наимОрганицации: attr('Наим органицации', { index: 5 })
  });
};
