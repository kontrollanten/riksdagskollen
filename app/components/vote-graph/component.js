import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { inject as Service } from '@ember/service';
import { htmlSafe } from '@ember/string';

export default Component.extend({

  pie: computed('model', function() {
    return {
    datasets: [{
        data: [this.get('stats.yes'), this.get('stats.no'), this.get('stats.blank'), this.get('stats.absence')],
        backgroundColor: [
          '#419C51', '#FE4644', '#FE7F2D', '#233D4D'
        ],
        borderColor: [
          '#419C51', '#FE4644', '#FE7F2D', '#233D4D'
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

  store: Service(),

  init() {
    this._super(...arguments);
    this.data = [];
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.get('store').query('vote', {memberId: this.get('model.id')}).then(data => {
      this.set('data', data)
    })
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
    let data = {
      yes: 0,
      no: 0,
      blank: 0,
      absence: 0,
      total: 0
    }

    this.get('model').forEach(vote => {

      if (vote.get('vote') == 'Ja') {
        data.yes += 1;
      } else if (vote.get('vote') == 'Nej') {
        data.no += 1;
      } else if (vote.get('vote') == 'Avstår') {
        data.blank += 1;
      } else if (vote.get('vote') == 'Frånvarande') {
        data.absence += 1;
      }

      data.total += 1;
      
    })

    let result = {
      yes: Math.round(data.yes / data.total * 100),
      no: Math.round(data.no / data.total * 100),
      blank: Math.round(data.blank / data.total * 100),
      absence: Math.round(data.absence / data.total * 100)
    }

    return result;
  })
});
