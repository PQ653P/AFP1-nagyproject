<?php
	session_start();

	$name = "";
	$email    = "";
	$errors = array();
	$_SESSION['success'] = "";

	$db = mysqli_connect('localhost', 'root', '', 'afp_hnft_poker');


	if (isset($_POST['register'])) {

		$name = mysqli_real_escape_string($db, $_POST['username']);
		$email = mysqli_real_escape_string($db, $_POST['email']);
		$password = mysqli_real_escape_string($db, $_POST['password']);
		//$password_2 = mysqli_real_escape_string($db, $_POST['password_2']);

		if (empty($name)) { array_push($errors, "Felhasználónév szükséges!"); }
		if (empty($email)) { array_push($errors, "E-mail cím szükséges!"); }
		if (empty($password)) { array_push($errors, "Jelszó megadása szükséges!"); }

		// Jelszó megerősítéshez szükséges, ha szeretnénk belerakni.
		//if ($password_1 != $password_2) {
			//array_push($errors, "A két jelszó nem egyezik!");
		//}

		if (count($errors) == 0) {
			$password = md5($password);
			$query = "INSERT INTO user (name, email, password)
					  VALUES('$name', '$email', '$password')";
			mysqli_query($db, $query);

			$_SESSION['username'] = $name;
			$_SESSION['success'] = "Bejelentkeztél!";
			header('location: index.php');
		}

	}


	if (isset($_POST['login_user'])) {
		$username = mysqli_real_escape_string($db, $_POST['username']);
		$password = mysqli_real_escape_string($db, $_POST['password']);

		if (empty($username)) {
			array_push($errors, "Felhasználónév szükséges!");
		}
		if (empty($password)) {
			array_push($errors, "Jelszó szükséges!");
		}

		if (count($errors) == 0) {
			$password = md5($password);
			$query = "SELECT * FROM user WHERE name='$username' AND password='$password'";
			$results = mysqli_query($db, $query);

			if ($results && mysqli_num_rows($results) == 1) {
				$_SESSION['username'] = $name;
				$_SESSION['success'] = "Sikeresen bejelentkeztél!";
				header('location: index.php');
			} else {
				array_push($errors, "Hibás felhasználónév vagy jelszó");
			}
		}
	}

?>