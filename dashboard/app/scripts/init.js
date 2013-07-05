'use strict';

window.app = angular.module('app',
  [ 'app.directives',
    'app.services',
    'app.filters',
    '-'
  ]);

window.services = angular.module('app.services', []);

window.directives = angular.module('app.directives', []);

window.filters = angular.module('app.filters', []);