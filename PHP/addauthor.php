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
    $Author_ID = $_POST['Author_ID'];
    $Author_Name = $_POST['Author_Name'];

    $sql1 = "SELECT count(*) as NUM FROM books where Author_ID = $Author_ID;";
    $res1 = mysqli_query($conn, $sql1);
    while($row = mysqli_fetch_array($res1)) {
        $sql = "INSERT INTO author VALUES ('$Author_ID', '$Author_Name', '$row[NUM]');";
    }
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