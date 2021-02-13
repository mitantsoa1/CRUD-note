<?php 
if(isset($_POST['AllN'])){
        $table = $db->select("etudiant")
                    ->execute(null);
        echo json_encode($table);
        var_dump($table);
    }
?>

