angular.module('primeiraApp').constant('consts', {
  appName: 'Controle Financeiro',
  version: '1.0',
  owner:   'SpartawebTI',
  year:    '2018',
  site:    'http://spartawebti.com.br',
  apiUrl:  'http://localhost:3003/api',
  oapiUrl: 'http://localhost:3003/oapi',
  userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
