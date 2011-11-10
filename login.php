<?php
require_once('connect.inc');

if(isset($_POST['gebruikersnaam']) && isset($_POST['wachtwoord'])) {
	$sql = "SELECT * FROM collegas WHERE gebruikersnaam = '".$_POST['gebruikersnaam']."' AND wachtwoord = '".md5($_POST['wachtwoord'])."'";
	$query = mysql_query($sql, $conn) or die(mysql_error());
	
	if(mysql_num_rows($query) > 0){
		$data['success'] = true;
		$data['message'] = 'Login gelukt';
	} else {
		$data['success'] = false;
		$data['message'] = '<b>Login mislukt</b><br />Controleer gebruikersnaam en wachtwoord.';
	}
	
	// return json
	echo json_encode($data);
}

?>