<?php 
if(isset($_POST['All'])){
        $table = $db->select("etudiant")
                    ->execute(null);
        echo json_encode($table);
        var_dump($table);
    }
?>

