﻿$(function(){
	$('#search_form_2').submit(function(e){
		e.preventDefault();		
	});	

})

function search2(){
	$('#results_2').html('');		
	//
	q = $('#query_2').val();	
	// получить результаты апи	
	$.get(
	"https://www.googleapis.com/youtube/v3/search",{
		part: 'snippet, id',
		q: q,
		maxResults: 20,
		order: 'date',
		type:'video',
	key: 'AIzaSyB3cTEZ3iATzGW519SGw09TeWMTEfXmWfc'},
	function(data){		
		//	console.log(data);	
		$step2=30;
		$.each(data.items, function(i,item){			
			var output2 = getOutput(item, $step2);
			$step2=$step2+1;
			$('#results_2').append(output2);			
		});		
	}
	);
}


function getOutput2(item,$st2){
	
	var videoId = item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	//var thumb = item.snippet.thumbnails.high.url;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;		
	var output = '<li>'+ 	 
	'<a id="showHideContent" class="spoiler-title" href="javascript:void(0);" onclick="test('+ "'" +'content2' +$st + ''+ "'" +')" >'+'<h3>'+title+'</h3>'+'</a>'+
	'<dd id="content2'+ $st +'" class="asd">' + 
	'<iframe width="400" height="200" src="http://www.youtube.com/embed/'+videoId+'" frameborder="0"></iframe>'+
	'</dd>' +	
	'<small>Автор <strong>'+channelTitle+'</strong> от '+videoDate+'</small>' +	
	'</div>' + 
	'</li>' + 
	'';	
	return output;
	
}
