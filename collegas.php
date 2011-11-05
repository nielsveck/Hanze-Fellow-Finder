<?php
require_once('connect.inc');

$sql = "SELECT * FROM collegas ORDER BY naam ASC";				

$query = mysql_query($sql, $conn);

while($record = mysql_fetch_object($query)){
	if($letter != substr($record->naam, 0 , 1)){
		$letter = substr($record->naam, 0 , 1);
		echo '<li data-role="list-divider">'.strtoupper($letter).'</li>';
	}
	echo '<li>
				<a href="#">
					<img src="'.$record->afbeelding.'" width="80px" />
					<h3>'.$record->naam.'</h3>
					<p>'.$record->functie.'</p>
				</a>
			</li>';
}
?>