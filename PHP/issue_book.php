<?php
header("Access-Control-Allow-Origin: *");
$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="library";
$id="";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket);
 
$method = $_SERVER['REQUEST_METHOD'];
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

 
switch ($method) {
    case 'GET':
      $sql = "select * from issue_book;"; 
      break;
}
 
// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 
if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }
 
$con->close();
?>
