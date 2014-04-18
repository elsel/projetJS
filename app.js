'use strict';
// TEST

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
 /* $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});*/
  $routeProvider.when('/checklist', {templateUrl: 'partials/list.html', controller: 'ListController'});
  $routeProvider.when('/checklist/add',  {templateUrl: 'partials/formulaire.html', controller: 'ActionController'});
  $routeProvider.when('/checklist/:checklistId',  {templateUrl: 'partials/view.html', controller: 'ViewController'});
  $routeProvider.when('/checklist/edit/:checkListId',  {templateUrl: 'partials/formulaire.html', controller: 'ActionController'});
  $routeProvider.otherwise({redirectTo: '/checklist'});
}]);
