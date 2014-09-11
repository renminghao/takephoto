$(function(){

	var i = 1  ;

	$('#webcam').photobooth().on("image",function( event, dataUrl ){	
		$('.nopic').hide();
		$( "#pictures" ).prepend( '<div id="img"><img src="' + dataUrl + '" alt='+i+'><div id="upload">Use</div></div>');
		i++;
		$("#upload").on("click", function(){

			var photoSrc = $(this).prev().attr("src");
			var num = $(this).prev().attr("alt");

			$.ajax({
                                               type: 'POST',
                                               url: "base64.php",
                                               data: {

                                                       urls : photoSrc.substring(22),
                                                       name_upload : num

                                               }
                                              
            });


		});
	});


	
	if(!$('#webcam').data('photobooth').isSupported){
		alert('HTML5 webcam is not supported by your browser, please use latest firefox, opera or chrome!');
	}	
	
	$('.photobooth ul li:last').qtip({
		content: {
			text: 'Take Here To Make You Own Photo'+"<br/>"+'(Cite By ccc In 2013.7.17)',
			title: {
				text: 'Tips',
				button: true
			}
		},
		show: {
			ready: false
		},
		position: {
			target: 'event',
	      	my: 'left center', 
	      	at: 'right center'
		},
		style: {
			classes: 'ui-tooltip-shadow ui-tooltip-bootstrap',
			width: 300
		}
	});	
	
	$('#site').qtip({
		content: {
			text: 'Demo from geek blog: http://www.gbin1.com',
			title: {
				text: 'wlecome',
				button: true
			}
		},
		position: {
			target: 'event',
	      	my: 'bottom center', 
	      	at: 'top center',
			viewport: $(window)
		},
		style: {
			classes: 'ui-tooltip-shadow ui-tooltip-jtools'
		}
	});	
});