define([
  'angular',
  'jquery'
  ],function () {
  'use strict';
    app.lazy.controller('PeopleCreateCtrl',PeopleCreateCtrl)
    app.lazy.controller('ModalInstanceCtrl',ModalInstanceCtrl)
    app.lazy.factory('PeopleSrvcs', PeopleSrvcs)

      PeopleCreateCtrl.$inject = ['$scope', 'PeopleSrvcs','$uibModal','blockUI']
      function PeopleCreateCtrl($scope, PeopleSrvcs, $uibModal, blockUI){
        var vm = this;
        vm.personInfo = {
          'lname':'Penaflor',
          'fname':'Rommel',
          'mname':'Alcantara',
          'age' : 23,
          'gender' : 'M'
        };

        vm.submit = function (data) {
          if (vm.frmCreate.$valid) {
            vm.frmCreate.withError = false;
            var dataCopy = angular.copy(data);
            var formData = angular.toJson(dataCopy);

            var appBlockUI = blockUI.instances.get('blockUI');
            appBlockUI.start();
            PeopleSrvcs.save(formData)
            .then (function (response) {
              if (response.status == 201) {
                var modalInstance = $uibModal.open({
                  controller:'ModalInstanceCtrl',
                  controllerAs: 'vm',
                  templateUrl:'modal/modal-ok/modal-ok.html',
                  resolve :{
                    formData: function () {
                      return {
                        title: 'Create People',
                        message: response.data.message
                      };
                    }
                  }
                });

                modalInstance.result.then(function (){
                  // triggered close
                  console.log("closed");
                },function (){
                  // triggered dismiss
                  console.log("dismiss");
                });
                vm.personInfo = {};
              }
              appBlockUI.stop();
            },function(){alert("Error occured!");appBlockUI.stop();});
          } else {
            vm.frmCreate.withError = true;
          }
        };

        vm.get = function (data) {
          var dataCopy = angular.copy(data)
          data.person00id = 1;
          var formData = angular.toJson(dataCopy);

          PeopleSrvcs.get(data)
          .then (function (response) {
            if (response.status == 200) {
            }

          },function(){ alert("Bad Request!")})
        };

        vm.reset = function () {
          vm.personInfo = {};
        };
      }

      ModalInstanceCtrl.$inject = ['$uibModalInstance', 'formData']
      function ModalInstanceCtrl ($uibModalInstance, formData) {
        var vm = this;
        vm.formData = formData;
        vm.ok = function() {
          $uibModalInstance.close();
        };

        vm.cancel = function() {
          $uibModalInstance.dismiss('cancel');
        };
      }

      PeopleSrvcs.$inject = ['$http']
      function PeopleSrvcs($http){
        return {
          save: function(data) {
            return $http({
              method:'POST',
              url: baseUrlApi + '/api/person',
              data:data,
              // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              headers: {'Content-Type': 'application/json'}
              // Access-Control-Allow-Origin
              // headers: {'Content-Type': 'multipart/form-data'}
            })
          },
          get: function(data) {
            return $http({
              method:'GET',
              data:data,
              url: baseUrlApi + '/api/person?person00id='+ data.person00id,
              headers: {'Content-Type': 'application/json'}
            })
          }
        }
      }
});