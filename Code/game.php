<!DOCTYPE html>
<html>
<head>
	<meta charset ="UTF-8"/>
	<title>Blackjack</title>
<?php include('user/session.php'); ?>
</head>
<link href="style.css" rel="stylesheet">
<body>
	<form>
		 <button id="menubutton" class="menubutton" type="submit" formaction="menu.php"><span>MENÜ</span></button>
	</form>

	<center style="height:100%">
		<h1>‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎Blackjack</h1>
		<h3 id="message"></h3>
		<h4 id="money"></h4>
		<table style="width:50%">
			<tr>
				<td style="width:50%" id="deck">Pakli helye</td>
				<td style="width:50%" id="dealerHand">Osztó lapjai helye</td>
			</tr>
			<tr>
				<td style="width:50%" id="playerHand">Felhúzott lapok helye</td>
				<td style="width:50%">
					<button id="hit" name="hit">Lapot</button>
					<button id="stand" name="stand">Megállás</button>
					<button id="newGame" name="newGame">Új kör</button>
					<label for="bet">Tét:</label>
					<input id="bet" name="bet" type="number" value="10">
				</td>
			</tr>
		</table>
	</center>
	<script src="game.js"></script>
</body>
</html>