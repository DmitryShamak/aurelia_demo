import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config, router): void {
    config.title = 'Aurelia';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: ['', 'home'],  name: 'home', moduleId: 'home/index', nav: true, href:'/home', title:'Home' },
      { route: 'skills',  name: 'skills', moduleId: 'skills/index', nav: true, href:'/skills', title:'Skills' },
      { route: 'profile',  name: 'profile', moduleId: 'profile/index', nav: true, href:'/profile', title:'Profile' }
    ]);

    this.router = router;
  }
}
