<?php
include 'Ab.php';
$ab=new Ab();
$data=$_POST['todo'];
$datum=$_POST['datum'];
//0=false, 1=true
$ab->ujRekord("tennivalok","(todo, datum, allapot)", "('".$data."', '".$datum."', 0)");
echo json_encode($_POST);

