<?php 
$db = new Database();
if(isset($_POST['data'])){
    $tab = $db->select("etudiant")
               ->execute(null);
    echo json_encode($tab);
}

?>