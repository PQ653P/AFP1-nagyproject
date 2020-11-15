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

			<label>Felhasználónév</label>
			<input type="text" name="name" >
		
			<label>Jelszó</label>
			<input type="password" name="password">
		
			<button type="submit" class="btn" name="login_user">Belépés</button>
			
		<p>
			Nincs még fiókja? <a href="register.php">Regisztráció</a>
		</p>
	</form>


</body>
</html>