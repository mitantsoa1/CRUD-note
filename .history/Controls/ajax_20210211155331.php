<?php 
include("../Models/Database.class.php");
$db = new Database();
if(isset($_POST['data'])){
    $tab = $db->select("etudiant")
               ->execute();
    var_dump($tab);
    echo json_encode($tab);
}

?>