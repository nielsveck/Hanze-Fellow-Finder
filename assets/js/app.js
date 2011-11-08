$( function() {
	$('#collegaButton').click(function() {
		$.mobile.changePage("#collegaLijst");		
	});
	
	$('#collegaLijst').live( 'pagebeforecreate', function(event){
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
	
	function laadCollega(dataurl){
		$.mobile.showPageLoadingMsg();
		
		$("#collega").load("http://nielsvaneck.nl/fellowFinder/collegas.php", {data: dataurl}, function(){
			$.mobile.changePage("#collega" + dataurl);			
			
			$("#locatie").dragNscale({zIndex:1 , centre:1, useRotate: 0, useScale: 0});
			$.mobile.hidePageLoadingMsg();  
		});
	}
	
	function filterCollegas ( text, searchValue ){
   	
  		return text.toLowerCase().search( searchValue ) === -1;
	};
});
