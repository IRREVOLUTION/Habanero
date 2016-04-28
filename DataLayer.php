<?php
	header('Accept: application/json');
	header('Content-type: application/json');

	function connect() {
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "habanero";

		$connection = new mysqli($servername, $username, $password, $dbname);

		if ($connection -> connect_error) {;
			return null;
		}
		else {
			return $connection;
		}
	}
	function VAction(){
		$conn = connect();

		if($conn->connect_error){
	        $response = array();
	        return $response;
	    }
	    else{
			$sql = "SELECT * FROM deliver";
			$result = $conn->query($sql);

	        if($result->num_rows > 0){
		        $response = array();
		        while($row = $result->fetch_assoc()){
		        	$row = array('name1' => $row['name'], 'list' => $row['list'], 'total' => $row['total'], 'Date1' => $row['Date1']);
		       		array_push($response, $row); 
		        }
		        return $response;
        	}
    	}
	}
	/*function VTAction(){
		$conn = connect();
		$Date1 = date("Y/m/d");
		if($conn->connect_error){
	        $response = array();
	        return $response;
	    }
	    else{
			$sql = "SELECT Date1, total FROM deliver";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				while ($row = $result->fetch_assoc()) {
					$sql2 = "UPDATE vt SET total =total+total";
					if (mysqli_query($conn,$sql2)) {
						$row = array('total' => $row['total'], 'Date1' => $row['Date1']);
		       			array_push($response, $row); 
					}
				}
				return $response;
			}
    	}
	}*/

	function IAction(){
		$conn = connect();

		if($conn->connect_error){
	        $response = array();
	        return $response;
	    }
	    else{
			$sql = "SELECT * FROM inventory";
			$result = $conn->query($sql);

	        if($result->num_rows > 0){
		        $response = array();
		        while($row = $result->fetch_assoc()){
		        	$row = array('Ing' => $row['Ing'], 'CantKG' => $row['CantKG']);
		       		array_push($response, $row); 
		        }
		        return $response;
        	}
    	}
	}
	/*function InvAction($plato){
		$conn = connect();
		if ($conn != null) {
			$sql = "SELECT CantKG FROM orderhabanero WHERE Ing='$plato'";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				while ($row = $result->fetch_assoc()) {
					$row = array( 'CantKG' => $row['CantKG']);
		       		array_push($response, $row); 
					/*$sql2 = "UPDATE inventory SET CantKG=
						 WHERE name='$Name'";

					if (mysqli_query($conn,$sql2)) {
						$response = "SUCCESS";
						return $response;
					}
				}
				return $response;
			}
		}
	}*/
	function loginAction($usernameU, $passwordU, $rememberMe) {
		$conn = connect();

		if ($conn != null) {
			$sql = "SELECT * FROM usershabanero WHERE username='$usernameU' AND passwrd='$passwordU'";
			$result = $conn->query($sql);
			$row;

			if ($result->num_rows > 0) {
				while ($row = $result->fetch_assoc()) {
					session_start();
					$_SESSION["fName"] = $row["fName"];
					$_SESSION["email"] = $row["email"];
					$_SESSION["uName"] = $usernameU;
					$_SESSION["address"] = $row["fName"];
					if ($rememberMe == "true") {
						setcookie("usernameCookie", $usernameU, time()+3600*24);
					}
					$response = array("statusTxt" => "SUCCESS", "fNAME" => $row["fName"], "admin" => $row["admin"]);
				}
				return $response;
			}
		}
	}

	function regAction($userName, $userPassword, $userEmail, $name, $numTel, $colonia, $address) {
		$conn = connect();
		if ($conn != null) {//falta hacer la ecsritura del database
			$sql = "SELECT fName FROM usershabanero WHERE username='$userName' AND passwrd='$userPassword'";
			$result = $conn->query($sql);
			$row;
			if ($result->num_rows == 0) {
				$query = "INSERT INTO usershabanero (fName, username, email, passwrd, numTel, address, colonia) 
			  			  VALUES ('$name','$userName','$userEmail','$userPassword','$numTel','$address','$colonia')";
			  	if (mysqli_query($conn,$query)) {
					$response = array("statusTxt" => "SUCCESS", "NAME" => $name);
					session_start();
					$_SESSION["fName"] = $name;
					$_SESSION["email"] = $userEmail;
					$_SESSION["uName"] = $userName;
					$_SESSION["address"] = $address;
					return $response;
				}
			}
			
		}
	}

	function loadMenuAction() {
		$conn = connect();
		if ($conn != null) {
			$sql = "SELECT * FROM menu";
			$result = $conn->query($sql);

			$menuA = array();
			$s = 0;
			
			if ($result->num_rows > 0) {
				while ($row = $result->fetch_assoc()) {
					$response = array('nameM' => $row['nameM'], 'img' => $row['img'], 'precio' => $row['precio'],
								  	  'descr' => $row['descr'], 'Class' => $row['class']);
					$menuA[$s] = $response;
					$s = $s +1; 
				}
				$response = array("statusTxt" => "SUCCESS", "menuArr" => $menuA);
				return $response;
			}
		}
	}

	function submitCommentAction() {
		$conn = connect();
		if ($conn != null) {
			$userName = $_POST["username"];
			$comment = $_POST["comm"];
			$email = $_POST["email"];
			$date = $_POST["date"];

			$sql = "SELECT * FROM Comments";
			$result = $conn->query($sql);
		
			$query = "INSERT INTO Comments (email, username, comment, date_1) 
		  		  	  VALUES ('$email','$userName','$comment','$date')";
	
			if (mysqli_query($conn,$query)) {
				$response = "SUCCESS";
				return $response;
			}
		}
	}

	function profileLoadAction($UserName) {
		$conn = connect();
		if ($conn != null) {

			$sql = "SELECT fName, lName, email, gender, country FROM UsersJam WHERE username='$UserName'";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				while ($row = $result->fetch_assoc()) {
				$profileData = array('fName' => $row['fName'], 'lName' => $row['lName'],
							  	  'email' => $row['email'], 'country' => $row['country'],
							  	  'gender' => $row['gender']);
				}
				$response = array("statusTxt" => "SUCCESS", "proData" => $profileData);
				return $response;;
			}
		}
	}

	function saveOrderAction($UserName, $orderList, $address, $numP, $precio) {
		$conn = connect();
		if ($conn != null) {

			$sql = "SELECT * FROM orderhabanero WHERE name='$UserName'";
			$result = $conn->query($sql);

			if ($result->num_rows == 0) {
				$query = "INSERT INTO orderhabanero (name, list, status, cantidad, total, direccion) 
			  			  VALUES ('$UserName','$orderList','pendiente','$numP','$precio','$address')";
			  	if (mysqli_query($conn,$query)) {
					$response = array("statusTxt" => "SUCCESS", "NAME" => $UserName);
					return $response;
				}
			}
		}
	}

	function loadOrderAction($UserName) {
		$conn = connect();
		if ($conn != null) {
			$sql = "SELECT * FROM orderhabanero WHERE name='$UserName'";
			$result = $conn->query($sql);

			$ordenA = array();
			$s = 0;
			
			if ($result->num_rows > 0) {
				while ($row = $result->fetch_assoc()) {
					$response = array('list' => $row['list'], 'num' => $row['cantidad'], 'total' =>$row['total']);
					$ordenA[$s] = $response;
					$s = $s +1; 
				}
				$response = array("statusTxt" => "SUCCESS", "ordenArr" => $ordenA);
				return $response;
			}
		}
	}

	function deleteOrderAction($UserName) {
		$conn = connect();
		if ($conn != null) {
			$sql = "DELETE FROM orderhabanero WHERE name='$UserName'";
			$result = $conn->query($sql);
			
			if (mysqli_query($conn,$sql)) {
				$response = "SUCCESS";
				return $response;
			}
		}
	}

	function submitOrderAction($UserName) {
		$conn = connect();
		if ($conn != null) {
			$sql = "SELECT * FROM orderhabanero WHERE name='$UserName'";
			$result = $conn->query($sql);
			
			if ($result->num_rows > 0) {
				$sql2 = "UPDATE orderhabanero SET status='confirmed'
						 WHERE name='$UserName'";

				if (mysqli_query($conn,$sql2)) {
					$response = "SUCCESS";
					return $response;
				}
			}
		}
	}

	function loadTablesAction() {
		$conn = connect();
		if ($conn != null) {
			$sql = "SELECT * FROM mesashabanero WHERE disponible = 'TRUE'";
			$result = $conn->query($sql);
			
			if ($result->num_rows > 0) {
				$response = "DISP";
				return $response;
			}
			elseif ($result->num_rows == 0) {
				$response = "NODISP";
				return $response;
			}
		}
	}
/*
	function saveTablesAction($fecha, $hora, $cantPer, $username) {
		$conn = connect();
		if ($conn != null) {
			$sql = "SELECT * FROM MesasHabanero WHERE fecha = '$fecha'";
			$result = $conn->query($sql);
			
			if ($result->num_rows < 5) {
				$temp = $result->num_rows + 1;
				//$tempS = 
				settype($temp, "string");
				//echo gettype($temp);
				$query = "INSERT INTO MesasHabanero (numbero, nombre, fecha, hora, cantP, disponible) 
			  			  VALUES ('$temp','$username','$fecha','$hora','$cantPer','FALSE')";
			  	if (mysqli_query($conn,$query)) {
			  		echo "wsdad<";
					$response = "SUCCESS";
					return $response;
				}
			}
		}
	}
*/
	function saveTablesAction($fecha, $hora, $cantPer, $username) {
		$conn = connect();
		if ($conn != null) {
			$sql = "SELECT * FROM mesashabanero WHERE fecha = '$fecha' AND numbero = '1'";
			$result = $conn->query($sql);
			
			if ($result->num_rows == 0) {
				$query = "INSERT INTO mesashabanero (numbero, nombre, fecha, hora, cantP, disponible) 
			  			  VALUES ('1','$username','$fecha','$hora','$cantPer','FALSE')";
			  	if (mysqli_query($conn,$query)) {
					$response = "SUCCESS";
					return $response;
				}
			}

			$sql = "SELECT * FROM mesashabanero WHERE fecha = '$fecha' AND numbero = '2'";
			$result = $conn->query($sql);
			
			if ($result->num_rows == 0) {
				$query = "INSERT INTO mesashabanero (numbero, nombre, fecha, hora, cantP, disponible) 
			  			  VALUES ('2','$username','$fecha','$hora','$cantPer','FALSE')";
			  	if (mysqli_query($conn,$query)) {
					$response = "SUCCESS";
					return $response;
				}
			}

			$sql = "SELECT * FROM mesashabanero WHERE fecha = '$fecha' AND numbero = '3'";
			$result = $conn->query($sql);
			
			if ($result->num_rows == 0) {
				$query = "INSERT INTO mesashabanero (numbero, nombre, fecha, hora, cantP, disponible) 
			  			  VALUES ('3','$username','$fecha','$hora','$cantPer','FALSE')";
			  	if (mysqli_query($conn,$query)) {
					$response = "SUCCESS";
					return $response;
				}
			}

			$sql = "SELECT * FROM mesashabanero WHERE fecha = '$fecha' AND numbero = '4'";
			$result = $conn->query($sql);
			
			if ($result->num_rows == 0) {
				$query = "INSERT INTO mesashabanero (numbero, nombre, fecha, hora, cantP, disponible) 
			  			  VALUES ('4','$username','$fecha','$hora','$cantPer','FALSE')";
			  	if (mysqli_query($conn,$query)) {
					$response = "SUCCESS";
					return $response;
				}
			}

			$sql = "SELECT * FROM mesashabanero WHERE fecha = '$fecha' AND numbero = '5'";
			$result = $conn->query($sql);
			
			if ($result->num_rows == 0) {
				$query = "INSERT INTO mesashabanero (numbero, nombre, fecha, hora, cantP, disponible) 
			  			  VALUES ('5','$username','$fecha','$hora','$cantPer','FALSE')";
			  	if (mysqli_query($conn,$query)) {
					$response = "SUCCESS";
					return $response;
				}
			}
		}
	}

	function loadOrderAdminAction() {
		$conn = connect();
		if ($conn != null) {
			$sql = "SELECT * FROM orderhabanero WHERE status='confirmed'";
			$result = $conn->query($sql);

			$ordenA = array();
			$s = 0;

			if ($result->num_rows > 0) {
				while ($row = $result->fetch_assoc()) {
					$response = array('list' => $row['list'], 'num' => $row['cantidad'], 
									  'name1' => $row['name'], 'direccion' => $row['direccion'],
									  'total' => $row['total']);
					$ordenA[$s] = $response;
					$s = $s +1; 
				}
				$confirmed = true;
				$response = array("statusTxt" => "SUCCESS", "ordenArr" => $ordenA);
				return $response;
			}
		}
	}

	function loadOrderAdminAction2() {
		$conn = connect();
		if ($conn != null) {

			$sql2 = "SELECT * FROM orderhabanero WHERE status='onway'";
			$result = $conn->query($sql2);

			$ordenA2 = array();
			$s2 = 0;
			
			if ($result->num_rows > 0) {
				while ($row = $result->fetch_assoc()) {
					$response = array('list' => $row['list'], 'num' => $row['cantidad'], 
									  'name1' => $row['name'], 'direccion' => $row['direccion'],
									  'total' => $row['total']);
					$ordenA2[$s2] = $response;
					$s2 = $s2 +1; 
				}
				$response = array("statusTxt" => "SUCCESS", "ordenArr2" => $ordenA2);
				return $response;
			}
		}
	}

	function deliverOrderAdminAction($Name) {
		$conn = connect();
		if ($conn != null) {
			$sql = "SELECT * FROM orderhabanero WHERE status='confirmed' AND name='$Name'";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				while ($row = $result->fetch_assoc()) {

					$sql2 = "UPDATE orderhabanero SET status='onway'
						 WHERE name='$Name'";

					if (mysqli_query($conn,$sql2)) {
						$response = "SUCCESS";
						return $response;
					}
				}
			}
		}
	}
	/*function VAction(){
		$conn = connect();
		if ($conn != null) {
			$sql = "SELECT * FROM "
	}*/
	function deliveredOrderAdminAction($Name) {
		$conn = connect();
		$Date1 = date("Y/m/d");
		if ($conn != null) {
			$sql = "SELECT * FROM orderhabanero WHERE status='onway' AND name='$Name'";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				while ($row = $result->fetch_assoc()) {
					$N = $row["name"]; 
					$L = $row["list"]; 
					$T = $row["total"]; 
					$D = $Date1;
					$sql2 = "UPDATE orderhabanero SET status='delivered' WHERE name='$Name'";
					if (mysqli_query($conn,$sql2)) {
						$response = "SUCCESS";
						
					}
					$sql2 = "INSERT INTO deliver (name, list, total, date1)VALUES('$N', '$L', '$T', '$D' )";

					if (mysqli_query($conn,$sql2)) {
						$response = "SUCCESS";
					}
				}
				return $response;
			}
		}
	}

?>
