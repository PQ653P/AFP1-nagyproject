<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
	<title>Bejelentkezés</title>
</head>
<link href="phpstyle.css" rel="stylesheet">
<body>
	<h1>Bejelentkezés</h1>

	<form method="post" action="login.php">

		<center>
		
		<?php include('errors.php'); ?>

		<div class="input-group">
			<label>Felhasználónév</label>
			<input type="text" name="username">
		</div>
		<div class="input-group">
			<label>Jelszó</label>
			<input type="password" name="password">
		</div>
		<div class="input-group">
			<button type="submit" class="menubutton" name="login_user">Belépés</button>
		</div>
		<p>
			Nincs még fiókja? <a href="register.php">Regisztráció</a>
		</p>
		
	</form>
	</center>
	<a href="../menu.php"><button class="menubutton" type="submit"><span>MENÜ</span></button></a><br>
	
</body>

</html>