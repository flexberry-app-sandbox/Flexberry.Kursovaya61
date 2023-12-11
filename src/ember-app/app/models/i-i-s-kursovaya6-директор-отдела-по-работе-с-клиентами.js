import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДиректорОтделаПоРаботеСКлиентамиMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДиректорОтделаПоРаботеСКлиентамиMixin, Validations, {
});

defineProjections(Model);

export default Model;
