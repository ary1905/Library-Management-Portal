<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers : access");
header("Access-Control-Allow-Methods :POST");
header("Content-Type :application/json; charset=UTF-8");
header("Access-Control-Allow-Headers : Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$host = "localhost"; 
$user = "root"; 
$password = ""; 
$database = "university";
 
$con = mysqli_connect($host, $user, $password,$database);

$data = json_decode(file_get_contents("php://input"));

$ID = $data->ID;

$Password = $data->Password;

$result = mysqli_query($con, "SELECT * FROM instructor WHERE ID = ' ".$ID." ' AND Password = '".$Password."' ");

$nums = mysqli_num_rows($result);
$rs = mysqli_fetch_array($result);

if($nums >= 1){

    http_response_code(200);
    $outp = "";

    $outp .= '{"ID":"'  .$rs["ID"] .    '",';
    $outp.= '"Password":"'. $rs["Password"]. '",';
    $outp.= '"Status":"200"}';

    echo $outp;
}
else {
    http_response_code(202);
}


?>