define([
  'angular',
  'jquery'
  ],function () {
  'use strict';
    app.lazy.controller('PeopleCreateCtrl',PeopleCreateCtrl)
    app.lazy.factory('PeopleSrvcs', PeopleSrvcs)

      PeopleCreateCtrl.$inject = ['$scope', 'PeopleSrvcs']
      function PeopleCreateCtrl($scope, PeopleSrvcs){
        var vm = this;
        vm.personInfo = {
          'lname':'Penaflor',
          'fname':'Rommel',
          'mname':'Alcantara',
          'age' : 23,
          'gender' : 'M'
        };

        vm.submit = function (data) {
          var dataCopy = angular.copy(data);
          var formData = angular.toJson(dataCopy);
          
          PeopleSrvcs.save(formData)
          .then (function (response) {
            if (response.status == 200) {
              console.log("you got 200");
            }
          },function(){alert("Error occured!")});
        };

        vm.reset = function () {
          vm.personInfo = {};
        };
      }

      PeopleSrvcs.$inject = ['$http']
      function PeopleSrvcs($http){
        return {
          save: function(data) {
            return $http({
              method:'POST',
              url:'http://localhost:5000/api/people/create/person',
              data: data,
              headers: {'Content-Type': 'application/json'}
            })
          }
        }
      }
});