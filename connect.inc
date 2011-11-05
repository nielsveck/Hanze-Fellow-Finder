<?php 
	define('SQL_HOST','localhost');
	define('SQL_USER','nielsvec36_wms');
	define('SQL_PASS','finder');
	define('SQL_DB','nielsvec36_fellowFinder'); 

	$conn = mysql_connect(SQL_HOST, SQL_USER, SQL_PASS)  
	or die('Kan ging verbinding maken met de database, probeer opnieuw; ' . mysql_error()); 

	mysql_select_db(SQL_DB, $conn) 
	or die('Kon de database niet selecteren, probeer opnieuw; ' . mysql_error()); 
	
	mysql_query("SET NAMES utf8", $conn) 
		or die('Probleem met de database, probeer opnieuw; ' . mysql_error());
?>