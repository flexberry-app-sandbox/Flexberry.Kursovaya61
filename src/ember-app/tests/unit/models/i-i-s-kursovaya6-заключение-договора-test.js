import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya6-заключение-договора', 'Unit | Model | i-i-s-kursovaya6-заключение-договора', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами',
    'model:i-i-s-kursovaya6-заключение-договора',
    'model:i-i-s-kursovaya6-клиент',
    'model:i-i-s-kursovaya6-оказание-консультаций',
    'model:i-i-s-kursovaya6-расторжение-договора',
    'model:i-i-s-kursovaya6-расчет-оставшегося-времени',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
