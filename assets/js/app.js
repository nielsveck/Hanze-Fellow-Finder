$( function() {
	$('#collegaButton').click(function() {
		$.mobile.changePage("#collegaLijst");		
	});
	
	$('#collegaLijst').live( 'pagecreate', function(event){
		$.mobile.showPageLoadingMsg();
		$("#collegaList").load("http://nielsvaneck.nl/fellowFinder/collegas.php", function(){
			$("#collegaList").listview('option', 'filterCallback', filterCollegas);
			$("#collegaList").listview('refresh');

			$('a.collegaLink').live("click", function() {  ;
			    var dataurl = $(this).attr("data-url");  
			    if (dataurl != null)  
			    	laadCollega(dataurl);
			});
			$.mobile.hidePageLoadingMsg();    						
		});	
	});	
	
	
	$('#loginForm').submit(function() {
		var postTo = 'http://nielsvaneck.nl/fellowFinder/login.php';
		$('#output').html('');
		$.post(postTo,{gebruikersnaam: $('[name=gebruikersnaam]').val() , wachtwoord: $('[name=wachtwoord]').val()} ,
			function(data) {		
				if(data.message) {
					if(data.success){
						$('#output').html('');
						$('#collegaInfo').load("http://nielsvaneck.nl/fellowFinder/collega.php", {gebruikersnaam: $('[name=gebruikersnaam]').val()}, function(){
							$.mobile.showPageLoadingMsg();
							$.mobile.changePage("#keuze");
							$.mobile.hidePageLoadingMsg();  							
						});
					}else{
						$('#output').html(data.message);
					}
				} else {
					$('#output').html('Kon geen verbinding maken.');
				}		
			},'json'
		);
		
		return false;
	});	
	
	function laadCollega(dataurl){			
		$.mobile.showPageLoadingMsg();
				
		$("#collegaContent").load("http://nielsvaneck.nl/fellowFinder/collegas.php", {data: dataurl}, function(){			
			$.mobile.changePage("#collega" + dataurl);
			$("#locatie").dragNscale({zIndex:1 , centre:1, useRotate: 0, useScale: 0});			
			$.mobile.hidePageLoadingMsg();
		});
	}
	
	function filterCollegas ( text, searchValue ){
   	
  		return text.toLowerCase().search( searchValue ) === -1;
	};
});