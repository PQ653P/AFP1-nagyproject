<?php include('server.php') ?>
<!DOCTYPE html>
<html>

<head>
	<title>Bejelentkezés</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	<h2>Bejelentkezés</h2>

	<form method="post" action="login.php">

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
			<button type="submit" class="btn" name="login_user">Belépés</button>
		</div>
		<p>
			Nincs még fiókja? <a href="register.php">Regisztráció</a>
		</p>
	</form>
	<a href="../menu.html"><button class="menubutton" type="submit"><span>MENÜ</span></button></a><br>

</body>

</html>