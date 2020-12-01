<?php include('server.php') ?>
<!DOCTYPE html>
<html>

<head>
	<title>Regisztráció</title>
</head>
<link href="phpstyle.css" rel="stylesheet">
<body>
	<div class="header">
		<h1>Regisztráció</h1>
	</div>

	<form method="post" action="register.php">

		<?php include('errors.php'); ?>
		<div class="input-group">
			<label>Felhasználónév</label>
			<input type="text" name="username" value="<?php echo $name; ?>">
		</div>
		<div class="input-group">
			<label>E-mail cím</label>
			<input type="email" name="email" value="<?php echo $email; ?>">
		</div>
		<div class="input-group">
			<label>Jelszó</label>
			<input type="password" name="password">
		</div>
		<div class="input-group">
			<button type="submit" class="btn" name="register">Regisztráció</button>
		</div>
		<p>
			Már van fiókja? <a href="login.php">Bejelentkezés</a>
		</p>
	</form>
	<form>
		<a href="../menu.html"><button class="menubutton" type="submit"><span>MENÜ</span></button></a><br>
	</form>
</body>

</html>