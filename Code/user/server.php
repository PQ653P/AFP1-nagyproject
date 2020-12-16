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
			header('Location: ../menu.php');
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
				$_SESSION['username'] = $username;
				$_SESSION['password'] = $password;
				$_SESSION['success'] = "Sikeresen bejelentkeztél!";
				header('location: ../menu.php');
			} else {
				array_push($errors, "Hibás felhasználónév vagy jelszó");
				header('Location: login.php');
			}
		}
	}


	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		$data = json_decode(file_get_contents('php://input'), true);
		if ($data && array_key_exists('username', $data)
		          && array_key_exists('password', $data)) {
			$username = $data['username'];
			$password = $data['password'];
			if (array_key_exists('balance', $data)) {
				$balance = $data['balance'];
				$query = "UPDATE user SET balance='$balance' WHERE name='$username' and password='$password'";
				$result = mysqli_query($db, $query);
				if ($result || mysqli_num_rows($result) == 1) {
					$response = array(
						'status' => 'ok'
					);
				}
				else {
					$response = array(
						'status' => 'error'
					);
				}
			}
			else {
				$query = "SELECT balance FROM user WHERE name='$username' and password='$password'";
				$result = mysqli_query($db, $query);


				if ($result && mysqli_num_rows($result) == 1) {
					$balance = $result->fetch_row()[0];
					$response = array(
						'balance' => $balance
					);
				}
			}
			header('Content-Type: application/json');
			echo json_encode($response);
		}
	}

	if (isset($_POST['action']) && $_POST['action'] == 'logout') {
		unset($_SESSION['username']);
		unset($_SESSION['password']);
		session_destroy();
		header('Location: ../menu.php');
	}
