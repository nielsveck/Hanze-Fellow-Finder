$( function() {
	$('#collegaButton').click(function() {
		$.mobile.changePage("#collega");
		$("#collegaList").listview('option', 'filterCallback', filterCollegas);
	});
	
	function filterCollegas ( text, searchValue ){
   	
  		return text.toLowerCase().search( searchValue ) === -1;
	};
});
