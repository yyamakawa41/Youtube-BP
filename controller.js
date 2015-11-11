
angular.module('myApp',[]).controller('myController', function($scope,$http){
var apiKey = "AIzaSyDdJAcUcndlXwf4gbXuQOSRHX5XLwE5sRE";
var videoId = "hakrt4XFzbg";
var playlistId ="PL1NbHSfosBuHphFYJOY_L-XzyzzFLI2Gf";
var singleVideoUrl = 'https://www.googleapis.com/youtube/v3/videos?id='+videoId+'&part=snippet,statistics&key='+apiKey;
var playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId='+playlistId+'+&key='+apiKey;
	
	$http.get(singleVideoUrl).success(function(youtubeSingle){
		console.log(youtubeSingle);
		// $scope.videos = 
	}); 

});
