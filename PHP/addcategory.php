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
    $Category_ID = $_POST['Category_ID'];
    $Category_Name = $_POST['Category_Name'];
    $Shelf_Number = $_POST['Shelf_Number'];

    $sql = "INSERT INTO Category VALUES ('$Category_ID', '$Category_Name', '$Shelf_Number');";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Success";
    }
    else {
        echo "Error!";
    }
    $conn->close();
}

?>