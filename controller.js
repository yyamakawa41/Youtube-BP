
angular.module('myApp',[]).controller('myController', function($scope,$http){
var apiKey = "AIzaSyDdJAcUcndlXwf4gbXuQOSRHX5XLwE5sRE";
var videoId = "hakrt4XFzbg";
var playlistId ="PL1NbHSfosBuHphFYJOY_L-XzyzzFLI2Gf";
var singleVideoUrl = 'https://www.googleapis.com/youtube/v3/videos?id='+videoId+'&part=snippet,statistics&key='+apiKey;
var playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=8&playlistId='+playlistId+'+&key='+apiKey;
	
	$http.get(singleVideoUrl).success(function(youtubeSingle){
		$scope.video = youtubeSingle.items
		console.log(youtubeSingle.items[0].snippet);

	}); 

	$http.get(playlistUrl).success(function(youtubePlaylist){
		$scope.videos = youtubePlaylist.items
		console.log($scope.videos);
	});

});
