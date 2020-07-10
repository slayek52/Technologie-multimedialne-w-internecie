$('#name').keytp(function() {
	$('countDown').keyup(function(){
		var remain= 255 - $(this).val();
		$('#count1').text($(this).val().length);
	});
});