import angular from 'angular';
import {ContractsListController} from './contacts-list/contracts-list.controller';

export default angular.module('contactsApp', [])
  .constant('appVersion', '0.5.3')
  .config(function (appVersion) {
    console.log(appVersion);
  })
  .controller('ContactsListController', ContractsListController)
  .name;
