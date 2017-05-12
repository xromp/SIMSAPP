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
    {'id':1,'name':'Rommel Penaflor','level':1,'section':'B','representative':'Mr. Yu','course':'Software Engineering'},
    {'id':2,'name':'Erikson Supent','level':2,'section':'A','representative':'Mr. Chin','course':'Mechanical Engineering'},
    {'id':3,'name':'Bryan Evangelista','level':3,'section':'A','representative':'Mr. Cho','course':'E-Commerce'}];

    vm.showPersonDetail = function (person) {
      if (person.isshowdetails) {
        person.isshowdetails = false;
      } else {
        person.isshowdetails = true;
      }
    };
    $scope.change = function(i){
      if (i) {
        i = false;
      } else {
        i = true;
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
      // <div uib-accordion>
      //   <div uib-accordion-group class="panel-default" is-open="i" ng-click="change(i)">
      //     <uib-accordion-heading>
      //       I can have markup, too! <i class="pull-right glyphicon"></i>
      //     </uib-accordion-heading>
      //     This is just some content to illustrate fancy headings.
      //   </div>
      // </div>
        markUp+= '  <td colspan=3 ng-show="person.isshowdetails">'
        markUp+= '    <div class="col-md-4 col-sm-4 col-xs-12 profile_details" ng-repeat="p in personDetails">'
        markUp+= '      <div class="well profile_view">'
        markUp+= '        <div class="col-sm-12">'
        markUp+= '          <h4 class="brief"><i ng-bind="\'sample\'"></i></h4>'
        markUp+= '          <div class="left col-xs-12">'
        markUp+= '            <h2 ng-bind="p.contactno"></h2>'
        markUp+= '            <ul class="list-unstyled">'
        markUp+= '              <li><i class="fa fa-building"></i> Address: <small ng-bind="p.address"></small></li>'
        markUp+= '              <li><i class="fa fa-user"></i> Representative: <small ng-bind="p.representative + \'(\'+ p.respresentative_relationship+\')\'"></small></li>'
        markUp+= '              <li><i class="fa fa-phone"></i> Contact in case of emergency: <p><small ng-bind="p.emergency_person + \'(\'+ p.respresentative_relationship+\')\' + \'(\'+ p.emergency_person_contactno+\')\'"></small></p></li>'
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
        markUp+= '    <div class="col-md-8">'
        markUp+= '      <div class="panel panel-info">'
        markUp+= '        <div class="panel-heading">'
        markUp+= '          <h5 class="panel-title">Class Schedule<small> This is from Enrollment form</small></h5>'
        markUp+= '          <div class="clearfix"></div>'
        markUp+= '        </div>'
        markUp+= '        <div class="panel-content">'
        markUp+= '          <table class="table table-striped">'
        markUp+= '            <thead>'
        markUp+= '              <tr>'
        markUp+= '                <th>#</th>'
        markUp+= '                <th>Schedule code</th>'
        markUp+= '                <th>Subject</th>'
        markUp+= '                <th>Time</th>'
        markUp+= '                <th>Classroom</th>'
        markUp+= '                <th>Teacher</th>'
        markUp+= '              </tr>'
        markUp+= '            </thead>'
        markUp+= '            <tbody ng-switch="classSchedDetails.length">'
        markUp+= '              <tr ng-switch-when="0"><td colspan="6">No record(s) found.</td></tr>'
        markUp+= '              <tr ng-switch-when-default ng-repeat="classsched in classSchedDetails[0].classsched">'
        markUp+= '                <th scope="row" ng-bind="$index +1"></th>'
        markUp+= '                <td ng-bind="classsched.schedcode"></td>'
        markUp+= '                <td ng-bind="classsched.subjectname"></td>'
        markUp+= '                <td ng-bind="classsched.time"></td>'
        markUp+= '                <td ng-bind="classsched.classroom"></td>'
        markUp+= '                <td ng-bind="classsched.teacher"></td>'
        markUp+= '              </tr>'
        markUp+= '            </tbody>'
        markUp+= '          </table>'
        markUp+= '        </div>'
        markUp+= '      </div>'
        markUp+= '    </div>'
        markUp+= '  </td>'
        // markUp+= '</div>'
        return markUp;
      },
      controller: function ($scope) {
        $scope.personDetails = [];
        $scope.classSchedDetails = [];
        $scope.showdetail = function (person, i) {
        
          var personDetails = [
          {'person00id':1,'contactno':'+639123456789','address':'jan lang yan','representative':'Roberto Penaflor','respresentative_relationship':'Father','emergency_person':'Kim Miran','emergency_person_relationship':'Auntie','emergency_person_contactno':'+639471727639','address':'043 Del Rosario St. Loob, Gainza Camarines Sur 4412'},
          {'person00id':2,'contactno':'+639000000000','address':'dito din'},
          {'person00id':3,'contactno':'+639111111111','address':'0001 lang'},
          ];

          var classSchedDetails = [
            {'person00id':1,'classsched':[
              {'schedcode':'1B-001','subjectname':'Math Algebra','time':'01:00-04:00','teacher':'Mary Joy Chu','classroom':'1-kindness'},
              {'schedcode':'1B-002','subjectname':'English (Advance for Proficiency)','time':'05:00-07:00','teacher':'Tan Herman','classroom':'2-Joy'},
              {'schedcode':'1B-006','subjectname':'History (Kulturang Pilipino)','time':'07:00-09:00','teacher':'Joseph Yii','classroom':'3-Hope'}
              ]
            }
          ]
          // get request;
          angular.forEach(personDetails , function (v, k) {
            if (v.person00id == person.id) {
              $scope.personDetails[0] = v;
            }
          });

          angular.forEach(classSchedDetails, function (v, k) {
            console.log("here!");
            if (v.person00id == person.id) {
              $scope.classSchedDetails[0] = v;
              console.log($scope.classSchedDetails);
            }
          }); 
        };

        $scope.$watch('person.isshowdetails', function (e) {
          if (e) {
            $scope.showdetail($scope.person);
          }
        });

      },
      link: function (scope, elem, attr) {
        // elem.on('click', function (event){
        //   elem.html('click');
        //   scope.showdetail(scope.person);
        //   console.log(scope);
        // })
        // scope.$watch('showdetails', function(e){
        //   console.log(e);
        // });
        // attr.$observe('showdetails',function(e) {
        //   console.log(e);
        //   console.log(scope.person);
        // });
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