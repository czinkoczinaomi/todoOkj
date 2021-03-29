<?php
include 'Ab.php';
$ab=new Ab();
$data=$_GET['todo'];
$datum=$_GET['datum'];
//0=false, 1=true
$ab->ujRekord("tennivalok","(todo, datum, allapot)", "('"+$data+"', "+datum+", 0)");

//$todok = array();
//$data=$_GET['todo'];
//$datum=$_GET['datum'];
//$where="todo like '%".$data."%' and datum like %".$datum."%";
//$result = $ab->lekerdez("tennivalok", $where);
//
//if ($result->num_rows > 0) {
//    while ($row = $result->fetch_assoc()) {
//       array_push($todok,$row);
//    }
//    echo json_encode($todok);
//} else {
//    echo "0 results";
//}

