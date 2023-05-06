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
    $User_Name = $_POST['User_Name'];
    $Contact_No = $_POST['Contact_No'];
    $Reg_Date = $_POST['Reg_Date'];
    $Total_Fine = $_POST['Total_Fine'];

    $sql = "INSERT INTO user_table VALUES ('$User_ID', '$User_Name', '$Contact_No', '$Reg_Date', '$Total_Fine');";
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