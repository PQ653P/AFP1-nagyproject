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

		<center>
		<?php include('errors.php'); ?>
		
		<div class="input-group">
			<label>Felhasználónév:</label>
			<input type="text" name="username" value="<?php echo $name; ?>">
		</div>
		<div class="input-group">
			<label>E-mail cím:</label>
			<input type="email" name="email" value="<?php echo $email; ?>">
		</div>
		<div class="input-group">
			<label>Jelszó:</label>
			<input type="password" name="password">
		</div>
		<div class="input-group">
			<button type="submit" class="menubutton" name="register">Regisztráció</button>
		</div>
		<p>
			Van már fiókja? <a href="login.php">Bejelentkezés</a>
		</p>
	</form>
	</center>
		<a href="../menu.php"><button class="menubutton" type="submit"><span>MENÜ</span></button></a>
	
	
</body>

</html>