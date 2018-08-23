import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({

  classNames: ['vote-item'],

  docName: null,

  name: null,

  header: null,

  title: null,

  docLink: null,

  actions: {
    openVote() {
      if (!this.get('title')) {
        $.get(`${this.get('model.link')}/json`.replace('http://', 'https://') , data => {
          this.set('title', data.votering.dokument.titel);
          this.set('header', data.votering.dokument.typrubrik);
          this.set('name', data.votering.dokument.debattnamn);
          this.set('docName', data.votering.dokument.dokumentnamn);
          this.set('docLink', data.votering.dokument.dokument_url_html);
          

        });
      } else {
        this.set('title', null);
      }
      
    }
  }
});
