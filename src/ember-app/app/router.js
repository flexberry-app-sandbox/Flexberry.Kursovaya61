import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-l');
  this.route('i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-e',
  { path: 'i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-e/:id' });
  this.route('i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-e.new',
  { path: 'i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-e/new' });
  this.route('i-i-s-kursovaya6-заключение-договора-l');
  this.route('i-i-s-kursovaya6-заключение-договора-e',
  { path: 'i-i-s-kursovaya6-заключение-договора-e/:id' });
  this.route('i-i-s-kursovaya6-заключение-договора-e.new',
  { path: 'i-i-s-kursovaya6-заключение-договора-e/new' });
  this.route('i-i-s-kursovaya6-клиент-l');
  this.route('i-i-s-kursovaya6-клиент-e',
  { path: 'i-i-s-kursovaya6-клиент-e/:id' });
  this.route('i-i-s-kursovaya6-клиент-e.new',
  { path: 'i-i-s-kursovaya6-клиент-e/new' });
  this.route('i-i-s-kursovaya6-оказание-консультаций-l');
  this.route('i-i-s-kursovaya6-оказание-консультаций-e',
  { path: 'i-i-s-kursovaya6-оказание-консультаций-e/:id' });
  this.route('i-i-s-kursovaya6-оказание-консультаций-e.new',
  { path: 'i-i-s-kursovaya6-оказание-консультаций-e/new' });
  this.route('i-i-s-kursovaya6-расторжение-договора-l');
  this.route('i-i-s-kursovaya6-расторжение-договора-e',
  { path: 'i-i-s-kursovaya6-расторжение-договора-e/:id' });
  this.route('i-i-s-kursovaya6-расторжение-договора-e.new',
  { path: 'i-i-s-kursovaya6-расторжение-договора-e/new' });
});

export default Router;
