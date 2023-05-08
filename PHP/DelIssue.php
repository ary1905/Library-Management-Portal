<?php
header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "root";
$password = "";
$database = "library";

$conn = new mysqli($servername, $username, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $Issue_ID = $_POST['Issue_ID'];
    
    $sql = "DELETE FROM issue_book where Issue_ID='$Issue_ID';";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        
    }
    else {
        echo "Error!";
    }
    $conn->close();
}

?>
