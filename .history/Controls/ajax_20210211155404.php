<?php 
include("../Models/Database.class.php");
$db = new Database();
if(isset($_POST['data'])){
    $tab = $db->select("etudiant")
               ->execute();
    echo json_encode($tab);
}

?>