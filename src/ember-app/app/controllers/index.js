import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya6.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya6.title'),
          children: [{
            link: 'i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-l',
            caption: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-директор-отдела-по-работе-с-клиентами-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-kursovaya6-оказание-консультаций-l',
            caption: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-оказание-консультаций-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-оказание-консультаций-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kursovaya6-расторжение-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-расторжение-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-расторжение-договора-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-kursovaya6-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-клиент-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya6-заключение-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-заключение-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-заключение-договора-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})