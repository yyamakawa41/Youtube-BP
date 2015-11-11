var otherVideos = [
	{
	    title: "The Best of Rachmaninoff",
	    thumb: "https://i.ytimg.com/vi/vpaPWuDQUcc/default.jpg",
	    url: "https://www.youtube.com/watch?v=vpaPWuDQUcc",
	    duration: "2:43:58",
	    postedBy: "Classical Music11",
	    totalViews: 857721
	},
	{
	    title: "Mix - Chopin - Complete Nocturnes",
	    thumb: "https://i.ytimg.com/vi/liTSRH4fix4/default.jpg",
	    url: "https://www.youtube.com/watch?v=liTSRH4fix4&list=RDliTSRH4fix4",
	    duration: "1:56:17",
	    postedBy: "Brigitte Engerer",
	    totalViews: 3885112
	},
	{
	    title: "The Best of Debussy",
	    thumb: "https://i.ytimg.com/vi/qRZmdzCGLYw/default.jpg",
	    url: "https://www.youtube.com/watch?v=qRZmdzCGLYw",
	    duration: "1:47:16",
	    postedBy: "Classical Music11",
	    totalViews: 3885112
	},
	{
		title: "The Best of Classical Music - Mozart, Beethoven, Bach, Chopin... Classical Music Piano Playlist Mix",
	    thumb: "https://i.ytimg.com/vi_webp/jgpJVI3tDbY/default.webp",
	    url: "https://www.youtube.com/watch?v=jgpJVI3tDbY",
	    duration: "3:28:20",
	    postedBy: "Live your Dreams 2",
	    totalViews: 12215066
	},
	{
		title: "Clair de Lune (Extended)",
	    thumb: "https://i.ytimg.com/vi/ea2WoUtbzuw/default.jpg",
	    url: "https://www.youtube.com/watch?v=ea2WoUtbzuw",
	    duration: "58:09",
	    postedBy: "luthfoxian",
	    totalViews: 3886245
	},
	{
		title: "The Best of Chopin",
	    thumb: "https://i.ytimg.com/vi_webp/wygy721nzRc/default.webp",
	    url: "https://www.youtube.com/watch?v=wygy721nzRc",
	    duration: "1:54:57",
	    postedBy: "HALIDONMUSIC",
	    totalViews: 30945365
	},
	{
		title: "Beethoven 9 - Chicago Symphony Orchestra - Riccardo Muti",
	    thumb: "https://i.ytimg.com/vi_webp/rOjHhS5MtvA/default.webp",
	    url: "https://www.youtube.com/watch?v=rOjHhS5MtvA",
	    duration: "1:21:23 ",
	    postedBy: "Chicago Symphony Orchestra",
	    totalViews: 848039
	},
	{
		title: "Four Seasons ~ Vivaldi",
	    thumb: "https://i.ytimg.com/vi_webp/GRxofEmo3HA/default.webp",
	    url: "https://www.youtube.com/watch?v=GRxofEmo3HA",
	    duration: "42:00 ",
	    postedBy: "AnAmericanComposer",
	    totalViews: 77817789
	}
];

var videosBySamePoster = [
	{
	    title: "StarCraft II - Legacy of the Void Opening Cinematic",
	    thumb: "https://i.ytimg.com/vi_webp/M_XwzBMTJaM/default.webp",
	    url: "https://www.youtube.com/watch?v=M_XwzBMTJaM",
	    duration: "29:51",
	    postedBy: "StarCraft",
	    totalViews: 3927195
	},
	{
	    title: "Legacy of the Void Prologue - Whispers of Oblivion",
	    thumb: "https://i.ytimg.com/vi/2qJgSR7C2FM/default.jpg",
	    url: "https://www.youtube.com/watch?v=2qJgSR7C2FM",
	    duration: "3:19",
	    postedBy: "StarCraft",
	    totalViews: 640699
	},
	{
	    title: "StarCraft II - Protoss Overview",
	    thumb: "https://i.ytimg.com/vi/m0g0MpllFCs/default.jpg",
	    url: "https://www.youtube.com/watch?v=m0g0MpllFCs",
	    duration: "3:36",
	    postedBy: "StarCraft",
	    totalViews: 1112322
	}
];

$(document).ready(function(){
	for(i=0;i<otherVideos.length;i++){
		var hoverTitle = otherVideos[i].title;
		var titleShort = otherVideos[i].title.slice(0,otherVideos[i].title.indexOf('-'));
		var html = '<a href='+otherVideos[i].url+' data-toggle="tooltip" title='+hoverTitle+'>';
				html+= '<div class="vid-item col-md-12">'
					html+= '<img class="col-md-4" src='+otherVideos[i].thumb+'>';
					html+= '<div class="title col-md-8">'+titleShort+'</div>'
					html+= '<div class="author col-md-8">By: '+otherVideos[i].postedBy+'</div>'
					html+= '<div class="views col-md-8">'+otherVideos[i].totalViews+' Views</div>'
				html+= '</div></a>'
		$('#related-videos').append(html);
			}

	})
$(document).ready(function(){
		for(i=0;i<8;i++){
			var titleShort= otherVideos[i].title.slice(0,otherVideos[i].title.indexOf('-'));
				var html2 = "<a href="+otherVideos[i].url+"<div class='col-xs-3 thumb'>";
				html2 += "<img class='col-xs-6' src="+otherVideos[i].thumb+">";
				html2 += "<div class='info col-xs-6'><div class='title'>"+titleShort+"</div>";
				html2 += "<div class='author'>By: "+otherVideos[i].postedBy+"</div>";
				html2 += "<div class='views'>"+otherVideos[i].totalViews+" Views</div>";
				html2 += "</div></div></a>";
		$('#more-videos').append(html2);
	}
})

$(document).ready(function(){
		for(i=0;i<3;i++){
			var titleShort = videosBySamePoster[i].title.slice(0,videosBySamePoster[i].title.indexOf('-'));
			var html3 = "<div class='queue-text col-xs-12'><a href="+videosBySamePoster[i].url+"><img id='thumb' class='col-xs-4' src="+videosBySamePoster[i].thumb+">"
				html3 +="<div class='title'>"+titleShort+"</div>";
				html3 +="<div class='posted-by'>By: "+videosBySamePoster[i].postedBy+"</div>";
				html3 +="<div class='duration'>"+videosBySamePoster[i].totalViews+" Views</div></a></div>";
		$('#video-queue').append(html3);
		}
})

// $("#nav-bar li a").click(function(){
// 		$(".active").removeClass("active");
// 		$(this).addClass("active");
// 	});

	
		
		// $('#add0video0form').submit(function(){
		// 	var theObject = {
		// 		title: $('#title').val(),
		// 		thumb: $('#thumb').val(),
		// 		url: $('#url').val(),
		// 		duration: $('#duration').val(),
		// 		postedBy: $('#posted-by').val(),
		// 		totalViews: $('#total-views').val()
		// 	}
		// 	otherVideos.unshift(theObject)
		// 	otherVideos.pop();
		// 	updateVideos();
		// 	event.preventDefault();
		// })

