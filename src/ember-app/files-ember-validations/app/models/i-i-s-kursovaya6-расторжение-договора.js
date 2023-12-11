import {
  defineNamespace,
  defineProjections,
  Model as РасторжениеДоговораMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya6-расторжение-договора';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасторжениеДоговораMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
