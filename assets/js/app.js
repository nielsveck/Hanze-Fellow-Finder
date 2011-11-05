$( function() {
	$('#collegaButton').click(function() {
		$.mobile.changePage("#collega");
		
		$("#collegaList").load("http://nielsvaneck.nl/fellowFinder/collegas.php", function(){
			$("#collegaList").listview('option', 'filterCallback', filterCollegas);
			$("#collegaList").listview('refresh');
		});
	});
	
	function filterCollegas ( text, searchValue ){
   	
  		return text.toLowerCase().search( searchValue ) === -1;
	};
});
