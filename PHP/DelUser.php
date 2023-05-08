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
    $User_ID = $_POST['User_ID'];
    
    $sql = "DELETE FROM user_table where User_ID= '$User_ID';";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Success  -";
        echo "  -Deleted Record with User_ID =  $User_ID";
    }
    else {
        echo "Error!";
    }
    $conn->close();
}

?>
