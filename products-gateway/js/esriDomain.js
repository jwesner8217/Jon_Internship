$(document).ready(function(e) {
	$('img').each(function() {
		var esriDomain = "http://www.esri.com/";
		var imgSrc = esriDomain + $(this).attr('src');
		$(this).attr('src', imgSrc);
	});
});
