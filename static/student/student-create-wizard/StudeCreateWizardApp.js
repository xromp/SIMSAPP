define([
  ],function () {
  'use strict';
    app.lazy.controller('StudentCreateWizardCtrl',['$scope',function ($scope) {
      $scope.student={
        personalinfo:{
          lname:"",
          fname:"Rommel",
          mname:"Alcantara"
        },
        studentinfo:{
          studentid:'ID0001',
          primary_teacher:'Ms. Yu'
        }
      };
      $scope.$watch('student',function(i){
        console.log($scope.frmPersonalInfo);
      },true);
    }]);
});