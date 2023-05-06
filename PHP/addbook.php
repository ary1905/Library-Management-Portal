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
    $Book_ID = $_POST['Book_ID'];
    $Book_Name = $_POST['Book_Name'];
    $Author_ID = $_POST['Author_ID'];
    $ISBN = $_POST['ISBN'];
    $Book_Status = $_POST['Book_Status'];
    $Category_ID = $_POST['Category_ID'];

    $sql = "INSERT INTO books VALUES ('$Book_ID', '$Book_Name', '$Author_ID', '$ISBN', '$Book_Status', '$Category_ID');";
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