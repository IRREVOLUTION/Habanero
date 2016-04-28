<?php
	header('Accept: application/json');
	header('Content-type: application/json');

	require_once __DIR__ . '/DataLayer.php'; //conection between PHP files

	if(isset($_POST['action'])){ $action = $_POST['action']; } 

	switch ($action) {
		case "LOGIN": verifyLogin();
			break;
		case "REGISTER": regAcc();
			break;
		case "SSERVICE": sessionService();
			break;
		case "SDELETE": deleteSessionService();
			break;
		case "CSERVICE": cookieService();
			break;
		case "MENULOAD": menuLoad();
			break;
		case "SAVEORDER": saveOrder();
			break;
		case "ORDERLOAD": loadOrder();
			break;
		case "DELETEORDER": deleteOrder();
			break;
		case "SUBMITORDER": submitOrder();
			break;
		case "MESALOAD": loadTables();
			break;
		case "SAVETABLE": saveTables();
			break;
		case "ORDERSLOAD": loadOrderAdmin();
			break;
		case "ORDERSLOAD2": loadOrderAdmin2();
			break;
		case "DELIVERORDER": deliverOrderAdmin();
			break;
		case "DELIVEREDORDER": deliveredOrderAdmin();
			break;
		case "Inventario" : Inventa();
			break;
		case "Ventas" : VentasD();
			break;
		case "VentasT" : VentasT2();
			break;
		/*case "inv" : inv2();
			break;*/
		/*
		default:
			# code...
			break;*/
	}
	/*function inv2(){
		if(isset($_POST['platArr'])){ $plato = $_POST['platArr']; } 
		if($plato == "Papa" || $plato == " Papa "$plato == "Papa " $plato == " Papa"){
			$plato= "papas";
		}
		$result = InvAction($plato);
		echo json_encode($result);
	}*/
	function Inventa(){
		$result = IAction();
		echo json_encode($result);
	}

	function verifyLogin() {
		if(isset($_POST['username'])){ $userName = $_POST['username']; } 
		if(isset($_POST['password'])){ $userPassword = $_POST['password']; } 
		if(isset($_POST['remember'])){ $rememberMe = $_POST['remember']; } 

		$result = loginAction($userName, $userPassword, $rememberMe); //in data layer PHP
		if ($result["statusTxt"] == "SUCCESS") {
			$finalResponse = array("firstName" => $result["fNAME"], "admin" => $result["admin"]);
			echo json_encode($finalResponse);
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1337))); 
		}
	}

	function regAcc() {
		if(isset($_POST['username'])){ $userName = $_POST['username']; } 
		if(isset($_POST['password'])){ $userPassword = $_POST['password']; } 
		if(isset($_POST['email'])){ $userEmail = $_POST['email']; }
		if(isset($_POST['Name'])){ $name = $_POST['Name']; } 
		if(isset($_POST['numTel'])){ $numTel = $_POST['numTel']; }
		if(isset($_POST['col'])){ $colonia = $_POST['col']; } 
		if(isset($_POST['address'])){ $address = $_POST['address']; } 

		$result = regAction($userName, $userPassword, $userEmail, $name, $numTel, $colonia, $address);

		if ($result["statusTxt"] == "SUCCESS") {
			$finalResponse = array("Name" => $result["NAME"]);
			echo json_encode($finalResponse);
		}
		else {
			header('HTTP/1.1 510 User exists in Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1338))); 
		}
	}

	function sessionService() {
		session_start();

		if (isset($_SESSION["fName"]) && isset($_SESSION["uName"]) && isset($_SESSION["email"]))
		{
			echo json_encode(array(	"nameU" => $_SESSION["fName"],
									"email" => $_SESSION["email"],
									"userName" => $_SESSION["uName"],
									"address" => $_SESSION["address"]));
		}
		else {
			header('HTTP/1.1 406 Session expired, you will be redirected to Login Screen');
			die(json_encode(array('message' => 'Session has expired')));
		}
	}

	function deleteSessionService() {
		session_start();
		if (isset($_SESSION["fName"]) && isset($_SESSION["uName"]) && isset($_SESSION["email"]))
		{
			unset($_SESSION["fName"]);
			unset($_SESSION["uName"]);
			unset($_SESSION["email"]);
			unset($_SESSION["address"]);
			session_destroy();
			echo json_encode(array('success' => 'Session terminated'));
		}
		else {
			header('HTTP/1.1 406 Session expired, you will be redirected to Login Screen');
			die(json_encode(array('message' => 'Session has expired')));
		}
	}

	function cookieService() {
		if (isset($_COOKIE["usernameCookie"])) {
			echo json_encode(array("cookieValue" => $_COOKIE["usernameCookie"]));
		}
		else {
			header('HTTP/1.1 406 Cookie has not been sent yet');
			die(json_encode(array('message' => 'Cookie not sent')));
		}
	}

	function menuLoad() {
		$result = loadMenuAction(); //in data layer PHP

		if ($result["statusTxt"] == "SUCCESS") {
			$finalResponse = $result["menuArr"];
			echo json_encode($finalResponse);
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Comment Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1339))); 
		}
	}

	function saveOrder() {
		if(isset($_POST['username'])){ $UserName = $_POST['username']; } 
		if(isset($_POST['address'])){ $address = $_POST['address']; } 
		if(isset($_POST['order2Save'])){ $orderList = $_POST['order2Save']; }
		if(isset($_POST['cantPlat'])){ $numP = $_POST['cantPlat']; } 
		if(isset($_POST['total'])){ $precio = $_POST['total']; } 

		$result = saveOrderAction($UserName, $orderList, $address, $numP, $precio);
		if ($result["statusTxt"] == "SUCCESS") {
			$finalResponse = $result["NAME"];
			echo json_encode("$finalResponse");
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1340))); 
		}
	}

	function loadOrder() {
		if(isset($_POST['username'])){ $UserName = $_POST['username']; } 

		$result = loadOrderAction($UserName); //in data layer PHP

		if ($result["statusTxt"] == "SUCCESS") {
			$finalResponse = $result["ordenArr"];
			echo json_encode($finalResponse);
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Comment Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1341))); 
		}
	}

	function deleteOrder() {
		if(isset($_POST['username'])){ $UserName = $_POST['username']; } 

		$result = deleteOrderAction($UserName); //in data layer PHP

		if ($result == "SUCCESS") {
			echo json_encode("success");
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Comment Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1342))); 
		}
	}

	function submitOrder() {
		if(isset($_POST['username'])){ $UserName = $_POST['username']; } 

		$result = submitOrderAction($UserName); //in data layer PHP

		if ($result == "SUCCESS") {
			echo json_encode("success");
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Comment Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1343))); 
		}
	}

	function loadTables() {

		$result = loadTablesAction(); //in data layer PHP

		if ($result == "DISP") {
			echo json_encode("HAY");
		}
		elseif ($result == "NODISP") {
			echo json_encode("NO");
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Comment Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1344))); 
		}
	}

	function saveTables() {
		if(isset($_POST['fecha'])){ $fecha = $_POST['fecha']; } 
		if(isset($_POST['hora'])){ $hora = $_POST['hora']; } 
		if(isset($_POST['cantPer'])){ $cantPer = $_POST['cantPer']; }
		if(isset($_POST['username'])){ $username = $_POST['username']; } 

		$result = saveTablesAction($fecha, $hora, $cantPer, $username);

		if ($result == "SUCCESS") {
			echo json_encode("success");
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Comment Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1345))); 
		}

	}
	
	function loadOrderAdmin() {
		$result = loadOrderAdminAction(); //in data layer PHP

		if ($result["statusTxt"] == "SUCCESS") {
			$finalResponse = $result["ordenArr"];
			echo json_encode($finalResponse);
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Comment Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1341))); 
		}
	}

	function loadOrderAdmin2() {
		$result = loadOrderAdminAction2();

		if ($result["statusTxt"] == "SUCCESS") {
			$finalResponse = $result["ordenArr2"];
			echo json_encode($finalResponse);
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Comment Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1342))); 
		}
	}

	function deliverOrderAdmin() {
		if(isset($_POST['sentName'])){ $Name = $_POST['sentName']; } 

		$result = deliverOrderAdminAction($Name);

		if ($result == "SUCCESS") {
			echo json_encode("Cambio guardado");
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Comment Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1341))); 
		}
	}
	
	function VentasD(){
		$result = VAction();
		echo json_encode($result);
	}
	/*function VentasT2(){
		$result = VTAction();
		echo json_encode($result);
	}*/

	function deliveredOrderAdmin() {
		if(isset($_POST['sentName'])){ $Name = $_POST['sentName']; } 
		$result = deliveredOrderAdminAction($Name);

		if ($result == "SUCCESS") {
			echo json_encode("Cambio guardado");
		}
		else {
			header('HTTP/1.1 500 Bad Connection to Comment Database');
			die(json_encode(array('message' => 'ERROR', 'code' => 1341))); 
		}
	}
	
?>
