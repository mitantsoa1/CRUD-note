<?php
include("../Models/Database.class.php");
header('Content-type: application/json'); 
if(isset($_POST['All'])){
    $db = new Database();
        $table = $db->select("etudiant")
                    ->where("id","=")
                    ->execute([8]);
        echo json_encode($table);
    }
?>

