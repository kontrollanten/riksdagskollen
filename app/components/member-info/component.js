import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  info: computed('model', function() {
    let info = {
      bio: []
    };

    this.get('model.information').map(data => {
      if (data.typ === 'biografi') {
        info.bio.push(data)
      }
      if (data.kod === 'Officiell e-postadress') {
        info.mail = data.uppgift[0].replace('[på]', '@');
      }
      if (data.kod === 'Webbsida') {
        info.webpage = data.uppgift[0];
      }
      if (data.kod === 'KandiderarINastaVal') {
        if (data.uppgift[0] == "false") {
          info.candidateNextElection = 'Nej';
        } else {
          info.candidateNextElection = 'Ja';
        }
        
      }
    })

    return info;
  })
});
