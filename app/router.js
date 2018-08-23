import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  didTransition() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
});

Router.map(function() {
  this.route('members', {path: '/'});
  this.route('member', { path: '/members/:member_id' }, function() {
    this.route('speeches', {resetNamespace: true});
    this.route('info', {resetNamespace: true});
    this.route('votes', {resetNamespace: true});
  });

  
});

export default Router;
