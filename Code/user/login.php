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

		<?php include('errors.php'); ?>

		<div class="input-group">
			<label>Felhasználónév</label>
			<input type="text" name="username" >
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
<button class="menubutton" type="submit" formaction="file:///C:/xampp/htdocs/BLACKJACK/Code/menu.html"><span>MENÜ</span></button><br>

</body>
</html>