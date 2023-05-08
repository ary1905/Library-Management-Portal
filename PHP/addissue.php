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
    $User_ID = $_POST['User_ID'];
    $Issue_ID = $_POST['Issue_ID'];

    $sql = "INSERT INTO issue_book (Book_ID, User_ID, Issue_ID, Issue_Date, Expected_Return_Date) VALUES ($Book_ID, $User_ID, $Issue_ID, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 14 DAY));";
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