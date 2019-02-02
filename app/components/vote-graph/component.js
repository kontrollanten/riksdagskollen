import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as Service } from '@ember/service';
import { htmlSafe } from '@ember/string';

export default Component.extend({

  pie: computed('model', function() {
    return {
    datasets: [{
        data: [this.get('stats.yes'), this.get('stats.no'), this.get('stats.blank'), this.get('stats.absence')],
        backgroundColor: [
          '#ACFFB3', '#FFAAD2', '#86E8E0', '#1b99a7'
        ],
        borderColor: [
          '#ACFFB3', '#FFAAD2', '#86E8E0', '#1b99a7'
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Ja',
        'Nej',
        'Avstår',
        'Frånvarande'
    ]}
  }),

  options: computed('model', function() {
    return {
      legend: {
        labels: {
            fontColor: '#eee',
            fontSize: 14
        }
      }
    }
  }),

  

  store: Service(),

  init() {
    this._super(...arguments);
    this.data = [];
  },

  votedYes: computed('stats', {
    get() {
      const deg = 360 * this.get('stats.yes') / 100
      return {
        style: htmlSafe('transform: rotate('+ deg +'deg)'),
        gt50: this.get('stats.yes') > 50 ? 'gt-50' : ''
      }
    }
  }),

  votedNo: computed('stats', {
    get() {
      const deg = 360*this.get('stats.no') / 100
      return {
        style: htmlSafe('transform: rotate('+ deg +'deg)'),
        gt50: this.get('stats.no') > 50 ? 'gt-50' : ''
      }
    }
  }),

  votedBlank: computed('stats', {
    get() {
      const deg = 360*this.get('stats.blank') / 100
      return {
        style: htmlSafe('transform: rotate('+ deg +'deg)'),
        gt50: this.get('stats.blank') > 50 ? 'gt-50' : ''
      }
    }
  }),

  votedAbsence: computed('stats', {
    get() {
      const deg = 360*this.get('stats.absence') / 100
      return {
        style: htmlSafe('transform: rotate('+ deg +'deg)'),
        gt50: this.get('stats.absence') > 50 ? 'gt-50' : ''
      }
    }
  }),

  stats: computed('model', function() {
    const mapping = {
      ja: 'yes',
      nej: 'no',
      avstår: 'blank',
      frånvarande: 'absence',
    };
    const data = this.get('model').reduce((data, vote) => {
      const key = mapping[vote.get('vote').toLowerCase()];
      return Object.assign(data, {
        [key]: data[key] + 1,
        total: data.total + 1
      });
    }, Object.keys(mapping).reduce((acc, val) => Object.assign(acc, { [mapping[val]]: 0 }), { total: 0 }))

    const result = {
      yes: Math.round(data.yes / data.total * 100),
      no: Math.round(data.no / data.total * 100),
      blank: Math.round(data.blank / data.total * 100),
      absence: Math.round(data.absence / data.total * 100)
    }

    return result;
  })
});
