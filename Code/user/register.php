<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
	<title>Regisztráció</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="header">
		<h2>Regisztráció</h2>
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
	<button class="menubutton" type="submit" formaction="file:///C:/xampp/htdocs/BLACKJACK/Code/menu.html"><span>MENÜ</span></button><br>
	</form>
</body>
</html>