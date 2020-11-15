<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
	<title>Regisztráció</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="header">
		<h2>Register</h2>
	</div>
	
	<form method="post" action="register.php">

		<?php include('errors.php'); ?>

			<label>Felhasználónév</label>
			<input type="text" name="username" value="<?php echo $name; ?>">
		
			<label>E-mail cím</label>
			<input type="email" name="email" value="<?php echo $email; ?>">
				
			<label>Jelszó</label>
			<input type="password" name="password">
		
			<button type="submit" class="btn" name="reg_user">Regisztráció</button>
		<p>
			Már van fiókja? <a href="login.php">Bejelentkezés</a>
		</p>
	</form>
</body>
</html>