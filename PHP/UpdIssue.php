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
    $User_ID = $_POST['User_ID'];
    
    $sql = "UPDATE issue_book SET Return_Date = CURDATE(), Issue_Status='Available' WHERE Issue_ID = '$Issue_ID';";
    $res = mysqli_query($conn, $sql);
    $sql1 = "SELECT DATEDIFF(return_date, expected_return_date) AS diff FROM issue_book where Issue_ID ='$Issue_ID';";
    $res1 = mysqli_query($conn, $sql1);
    if ($res1) {
        $row = mysqli_fetch_assoc($res1);
        $diff = $row['diff'];
        $fine = $diff * 2;
        $sql2 = "UPDATE issue_book SET Fine='$fine' WHERE Issue_ID= '$Issue_ID';";
        $res2 = mysqli_query($conn, $sql2);
    }
    $sql3 = "SELECT SUM(Fine) AS tot FROM issue_book WHERE User_ID = '$User_ID';";
    $res3 = mysqli_query($conn, $sql3);
    if ($res3) {
        $row3 = mysqli_fetch_assoc($res3);
        $tot = $row3['tot'];
        $sql4 = "UPDATE user_table SET Total_Fine = Total_Fine + '$tot' WHERE User_ID = '$User_ID';";
        $res4 = mysqli_query($conn, $sql4);
        if ($res4) {
            echo "Success!";
        }
        else {
            echo "Failed!";
        }
    }
    $conn->close();
}

?>
