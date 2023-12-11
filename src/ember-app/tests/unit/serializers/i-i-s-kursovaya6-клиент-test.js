import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya6-клиент', 'Unit | Serializer | i-i-s-kursovaya6-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya6-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya6-тип-договора',
    'transform:i-i-s-kursovaya6-услуга',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
