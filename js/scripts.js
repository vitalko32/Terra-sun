jQuery(document).ready(function() {
	var finalDate = '2022/06/30';
	jQuery('div.counter').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		jQuery(this).html(event.strftime(
			'<div class="days-wrapper row_timer"><span class="days namber_t">%D</span><span class="timer_title">Days</span></div>' +
			'<div class="dotet row_timer">:</div>' +  
			'<div class="hours-wrapper row_timer"><span class="hours namber_t">%H</span><span class="timer_title">Hours</span></div>' +
			'<div class="dotet row_timer">:</div>' +   
			'<div class="minutes-wrapper row_timer"><span class="minutes namber_t">%M</span><span class="timer_title">Mins</span></div>' +
			'<div class="dotet row_timer">:</div>' +  
			'<div class="seconds-wrapper row_timer"><span class="seconds namber_t">%S</span><span class="timer_title">Secs</span></div>'
			)
		);
   }); 
});

