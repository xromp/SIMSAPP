define(['angular'],
  function (){
  'use strict';
  
  app.lazy.controller('PeopleFinderCtrl',PeopleFinderCtrl);
  app.lazy.directive('showdetail',showdetail);
  app.lazy.factory('PeopleFinderSrvcs',PeopleFinderSrvcs);

  PeopleFinderCtrl.$inject = ['$scope'];
  function PeopleFinderCtrl ($scope){
    var vm = this;
    vm.personDetails = [];
    vm.personData = [
    {'id':1,'name':'Rommel Penaflor','level':1,'section':'B','representative':'Mr. Yu'},
    {'id':2,'name':'Erikson Supent','level':2,'section':'A','representative':'Mr. Chin'},
    {'id':3,'name':'Bryan Evangelista','level':3,'section':'A','representative':'Mr. Cho'}];

    vm.showPersonDetail = function (person) {
      if (person.showdetail) {
        person.showdetail = false;
      } else {
        person.showdetail = true;
      }
    };
  }

  // showdetail.$inject = ['$scope']
  function showdetail () {
    return {
      'restrict':'A',
      'scope':{
        'person':'=person'
      },
      'template':function (){
        var markUp = '';
        // markUp+= '<div ng-repeat="p in personDetails">'
        markUp+= '  <td colspan=3 ng-repeat="p in personDetails" ng-show="person.showdetail">'
        markUp+= '    <div class="col-md-4 col-sm-4 col-xs-12 profile_details">'
        markUp+= '      <div class="well profile_view">'
        markUp+= '        <div class="col-sm-12">'
        markUp+= '          <h4 class="brief"><i>Digital Strategist</i></h4>'
        markUp+= '          <div class="left col-xs-7">'
        markUp+= '            <h2 ng-bind="p.contactno"></h2>'
        markUp+= '            <p><strong>About: </strong> Web Designer / UX / Graphic Artist / Coffee Lover </p>'
        markUp+= '            <ul class="list-unstyled">'
        markUp+= '              <li ng-bind="\'Address:\' + p.address"><i class="fa fa-building"></i>  </li>'
        markUp+= '              <li><i class="fa fa-phone"></i> Phone #: </li>'
        markUp+= '            </ul>'
        markUp+= '          </div>'
        markUp+= '          <div class="right col-xs-5 text-center">'
        // markUp+= '            <img src="{{ url_for(\'static\',filename=\'assets/images/img.jpg\')}}" alt="" class="img-circle img-responsive">'
        markUp+= '          </div>'
        markUp+= '        </div>'
        markUp+= '        <div class="col-xs-12 bottom text-center">'
        markUp+= '          <div class="col-xs-12 col-sm-6 emphasis">'
        markUp+= '            <p class="ratings">'
        markUp+= '              <a>4.0</a>'
        markUp+= '              <a href="#"><span class="fa fa-star"></span></a>'
        markUp+= '              <a href="#"><span class="fa fa-star"></span></a>'
        markUp+= '              <a href="#"><span class="fa fa-star"></span></a>'
        markUp+= '              <a href="#"><span class="fa fa-star"></span></a>'
        markUp+= '              <a href="#"><span class="fa fa-star-o"></span></a>'
        markUp+= '            </p>'
        markUp+= '          </div>'
        markUp+= '          <div class="col-xs-12 col-sm-6 emphasis">'
        markUp+= '            <button type="button" class="btn btn-success btn-xs"> <i class="fa fa-user">'
        markUp+= '              </i> <i class="fa fa-comments-o"></i> </button>'
        markUp+= '            <button type="button" class="btn btn-primary btn-xs">'
        markUp+= '              <i class="fa fa-user"> </i> View Profile'
        markUp+= '            </button>'
        markUp+= '          </div>'
        markUp+= '        </div>'
        markUp+= '      </div>'
        markUp+= '    </div>'
        markUp+= '  </td>'
        // markUp+= '</div>'
        return markUp;
      },
      controller: function ($scope) {
        console.log($scope.person);
        $scope.personDetails = [];
        var showdetail = function (person, i) {
          // if (vm.personDetails) {
          //   vm.personDetails[i] = [];
          // }

          if (person.showDetails) {
            person.showDetails = false;
          } else {
            person.showDetails = true;
            var personDetails = [
            {'person00id':1,'contactno':'+639123456789','address':'jan lang yan'},
            {'person00id':2,'contactno':'+639000000000','address':'dito din'},
            {'person00id':3,'contactno':'+639111111111','address':'0001 lang'},
            ];
            // get request;
            angular.forEach(personDetails , function (v, k) {
              if (v.person00id == person.id) {
                $scope.personDetails[0] = v;
              }
            });
          }
        };

        $scope.$watch('person', function (o, n) {
          showdetail(n);
        }, true);

      }
    }
  }

  PeopleFinderSrvcs.$inject = ['$http'];
  function PeopleFinderSrvcs ($http) {
    return {
      get : function (data){
        return $http({
          method:'GET',
          url: baseURLApi + '/api/peopple/finder',
        })
      }
    }
  };

});