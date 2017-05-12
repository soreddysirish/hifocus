var app = angular.module('hiFocus',['ngRoute','ngResource','ui.bootstrap'])
app.controller("widgetsController",function($scope,$route,Map){
	// $scope.addactiveClass = function($event){
	// 	debugger;
	// 	if($event.currentTarget.classList.contains('dropdown-toggle')){
	// 		$($event.currentTarget).addClass('active')
	// 	}else{
	// 	$($event.currentTarget).closest('li.activeDropDown').addClass('active')
	// 	}
	// };
})
app.controller("mapShowCntrl",function($scope,$route,Map){
	 // $scope.fetchdata = [{latitude : 38.431934, longitude : 141.309402}];//for multiple places

	 function addToMap(lat,lng,icon){
	 	var icon = {
	 		url: "assets/mapmarker.png",
	 		scaledSize: new google.maps.Size(50, 50) 
	 	};
	 	var marker = new google.maps.Marker({
	 		position: new google.maps.LatLng(lat,lng),
	 		map: Map.map,
	 		animation: google.maps.Animation.DROP,
	 		icon: icon
	 	})
	 	var toolTip = "codingmart"
	 	var infoWIndow =new google.maps.InfoWindow({
	 		content:toolTip
	 	})
	 	marker.addListener('mouseover',function(){
	 		infoWIndow.open(map,marker)
	 	})
	 	marker.addListener('mouseout',function(){
	 		infoWIndow.close()
	 	})
	 }
	 Map.init()
	 addToMap(13.040888,77.620332)
	})

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















