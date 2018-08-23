import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({

  text: null,

  classNames: ['speech-item'],

  actions: {
    openSpeech() {
      if (!this.get('text')) {
        $.get(`${this.get('model.speechUrl')}/json` , data => {
          this.set('text', data.anforande.anforandetext)
        });
      } else {
        this.set('text', null);
      }
      
    }
  }
});
