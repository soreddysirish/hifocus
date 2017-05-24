var app = angular.module('hiFocus',['validation','validation.rule','720kb.datepicker','ngRoute','ngResource','ui.bootstrap']).
config(['$validationProvider',function($validationProvider){
	$validationProvider.setDefaultMsg({
		minlength: {
			error: "Please enter 10 digit mobile number"
		},
		maxlength: {
			error: "Mobile number contains only 10 numbers"
		}
	})
}])
app.controller("widgetsController",['$scope','$route','Map','$http', function($scope,$route,Map,$http){
	$scope.designation = ["B.E / B.Tech Completed","B.E / B.Tech 4th Year","B.E / B.Tech 3rd Year","Doing M.Tech","Currently working"]
	$scope.submitContactUsForm = function(){
		$('#contactUs').css('opacity','0.1');
		$('.loader').show();
		data = {
			name:$scope.contactUs.name,
			email:$scope.contactUs.emailId,
			mobileNumber:$scope.contactUs.mobileNumber,
			message: $scope.contactUs.reason
		}
		$http({
			method:'GET',
			url:'/sendmails/mailing',
			params: data
		}).then(function(res){
			if(res.data.status_code == 200){
				$('#contactUs').css('opacity','')
				$('.loader').hide()
				$('.successMailer').show()
				// $('input[type="text"], textarea,input[type="email"]').val('');
				$('form').get(0).reset()
				$('.flash_message').animate({opacity:0},3000)
				setTimeout(function(){$('.successMailer').hide() }, 7000);
			}else{
				$('#contactUs').css('opacity','')
				$('.loader').hide()
				$('.errorMailer').show()
				$('.flash_message').animate({opacity:0},3000)
				setTimeout(function(){$('.errorMailer').hide() }, 7000);
			}
		})
	}
	$scope.submitEnrollment =function(){
		$('#enrollment').css('opacity','0.1');
			$('.loader').show();
		data ={
			name: $scope.enrollment.Name,
			gender :$scope.enrollment.gender,
			dateOfBirth:$scope.enrollment.dateOfBirth,
			selectedDesignation: $scope.enrollment.selectedDesignation,
			userMobile:$scope.enrollment.mobileNumber,
			email:$scope.enrollment.emailId,
			fatherName:$scope.enrollment.fatherName,
			faherNumber:$scope.enrollment.faherNumber,
			studentAddress:$scope.enrollment.studentAddress,
			previousGaterank:$scope.enrollment.previousGaterank,
			previousIESrank:$scope.enrollment.previousIESrank,
			collegeAddress:$scope.enrollment.collegeAddress
		}
		$http({
			method: 'GET',
			url:'sendmails/enrollment',
			params:data
		}).then(function(res){
			if(res.data.status_code == "200"){
				$('.loader').hide();
				$('#enrollment').css('opacity','');
				$('form').get(0).reset()
				$('.successMailer').show()
				$('.flash_message').animate({opacity:0},3000)
				setTimeout(function(){$('.successMailer').hide() }, 7000);
			}else{
				$('.loader').hide();
				$('#enrollment').css('opacity','');
				$('.errorMailer').show()
				$('.flash_message').animate({opacity:0},3000)
				setTimeout(function(){$('.errorMailer').hide() }, 7000);
			}
		})
	}
}]);
// app.controller("mapShowCntrl",function($scope,$route,Map){
// 	 // $scope.fetchdata = [{latitude : 38.431934, longitude : 141.309402}];//for multiple places

// 	 function addToMap(lat,lng,icon){
// 	 	var icon = {
// 	 		url: "assets/mapmarker.png",
// 	 		scaledSize: new google.maps.Size(50, 50) 
// 	 	};
// 	 	var marker = new google.maps.Marker({
// 	 		position: new google.maps.LatLng(lat,lng),
// 	 		map: Map.map,
// 	 		animation: google.maps.Animation.DROP,
// 	 		icon: icon
// 	 	})
// 	 	var toolTip = "codingmart"
// 	 	var infoWIndow =new google.maps.InfoWindow({
// 	 		content:toolTip
// 	 	})
// 	 	marker.addListener('mouseover',function(){
// 	 		infoWIndow.open(map,marker)
// 	 	})
// 	 	marker.addListener('mouseout',function(){
// 	 		infoWIndow.close()
// 	 	})
// 	 }
// 	 Map.init()
// 	 addToMap(13.040888,77.620332)
// 	})

app.directive("navigateView",function(){
	return {
		restrict: 'A',
		templateUrl: 'assets/navbar.html',
		scope:true,
		transclude: false
	}
})
app.directive("footerView",function(){
	return{
		restrict: 'A',
		templateUrl: 'assets/footer.html',
		scope:true,
		transclude: false
	}
})
app.directive("contactUs",function(){
	return {restrict: 'A',
	templateUrl: 'assets/contactUsForm.html',
	scope:true,
	transclude:false
}
})
app.service("Map",function($q){
	this.init =function(){
		var mapOptions ={
			center: new google.maps.LatLng(13.040888,77.620332),
			zoom:16,
			disableDefaultUi: true,
			dragable:true,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(document.getElementById('map'),mapOptions)
		this.places = new google.maps.places.PlacesService(this.map)
	}
})
app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$routeProvider.when('/',{
			templateUrl:'assets/home.html',
			controller: 'widgetsController',
			activetab: "home" 
		})
		.when('/aboutus',{
			templateUrl:'assets/aboutus.html',
			controller: 'widgetsController',
			activetab: "aboutus" 
		})
		.when('/gateExamdetail',{
			templateUrl:'assets/gateExamdetail.html',
			controller: 'widgetsController',
			activetab: "gateExamdetail" 
		})
		.when('/gateeligibility',{
			templateUrl: 'assets/gateeligibility.html',
			controller:'widgetsController',
			activetab: 'gateExamdetail'
		})
		.when('/gate_how_to_apply',{
			templateUrl: 'assets/gate_how_to_apply.html',
			controller:'widgetsController',
			activetab: 'gateExamdetail'
		})
		.when('/gate_paper_pattern',{
			templateUrl: 'assets/gate_paper_pattern.html',
			controller:'widgetsController',
			activetab: 'gateExamdetail'
		})
		.when('/syllabus',{
			templateUrl: 'assets/syllabus.html',
			controller:'widgetsController',
			activetab: 'gateExamdetail'
		})
		.when('/cources',{
			templateUrl: 'assets/cources.html',
			controller:'widgetsController',
			activetab: 'cources'
		})
		.when('/psu',{
			templateUrl: 'assets/psu.html',
			controller:'widgetsController',
			activetab: 'psu'
		}).when('/contactus',{
			templateUrl: 'assets/contactus.html',
			controller:'widgetsController',
			activetab: 'contactus'
		}).when('/enrollment',{
			templateUrl: 'assets/enrollment.html',
			controller:'widgetsController',
			activetab: 'enrollment'
		})
		.otherwise({
			redirectTo: '/',
			controller: 'widgetsController'
		})
		// $locationProvider.html5Mode(true);
	}]).run(function ($rootScope, $route,$location) {
		$rootScope.$on("$routeChangeStart", function(event, next, current) {
			$rootScope.curPage = $location.path()
		})
	})















