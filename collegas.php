<?php
require_once('connect.inc');

if(!isset($_POST['data'])){
	$sql = "SELECT * FROM collegas ORDER BY naam ASC";				
	
	$query = mysql_query($sql, $conn);
	
	while($record = mysql_fetch_object($query)){
		if($letter != substr($record->naam, 0 , 1)){
			$letter = substr($record->naam, 0 , 1);
			echo '<li data-role="list-divider">'.strtoupper($letter).'</li>';
		}
		echo '<li>
					<a class="collegaLink" href="#" data-url="?id='.$record->id.'">
						<img src="'.$record->afbeelding.'" width="80px" />
						<h3>'.$record->naam.'</h3>
						<p>'.$record->functie.'</p>
					</a>
				</li>';
	}
}else{
	$id = str_replace('?id=','',($_POST['data']));
	
	$sql = "SELECT * FROM collegas WHERE id='".$id."'";				
	
	$query = mysql_query($sql, $conn);
	
	while($record = mysql_fetch_object($query)){
		echo '<div id="collegaInfo" data-role="content" data-content-theme="a">	
					<div id="gegevens" class="ui-body-b">
						<img class="foto" src="'.$record->afbeelding.'" />
						<h2>'.$record->naam.'</h2>
						<p>'.$record->functie.'</p>
						<p id="info">
							<span class="label">Telefoon:</span>'.$record->telefoon.'<br />
							<span class="label">Email:</span>'.$record->email.'
						</p>

						<p><span class="label">Locatie:</span>'.$record->locatie.'</p>
					</div>
					<div id="locatie" data-scroll="true">
						<canvas id="canvas" width="1321" height="881" style="position: relative; left: -'.($record->pos_x - 125).'px; top: -'.($record->pos_y - 125).'px"></canvas>
					</div>
				</div>';
				
		?>
		<script type="text/javascript">
			var canvas = document.getElementById("canvas");
			var ctx = canvas.getContext("2d");
			
			var img1 = loadImage('Egebouw_map.png', main);
			var img2 = loadImage('icon_36.png', main);
			
			var imagesLoaded = 0;
			
			function main() {
			    imagesLoaded += 1;
			
			    if(imagesLoaded == 2) {
			        // composite now
			        ctx.drawImage(img1, 0, 0);
			
			        ctx.globalAlpha = 1;
			        ctx.drawImage(img2, <?=$record->pos_x; ?>, <?=$record->pos_y; ?>);
			    }
			}
			
			function loadImage(src, onload) {
			    // http://www.thefutureoftheweb.com/blog/image-onload-isnt-being-called
			    var img = new Image();
			
			    img.onload = onload;
			    img.src = src;
			
			    return img;
			}
		</script>
	<?php
	}

}
?>