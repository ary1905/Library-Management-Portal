<?php
header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "root";
$password = "";
$database = "university";

$conn = new mysqli($servername, $username, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $ID = $_POST['ID'];
    $I_Name = $_POST['I_Name'];
    $Dept_name = $_POST['Dept_name'];
    $Salary = $_POST['Salary'];

    $sql = "INSERT INTO instructor(ID, I_Name, Dept_name, Salary) VALUES ('$ID', '$I_Name', '$Dept_name', '$Salary');";
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