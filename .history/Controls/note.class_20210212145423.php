<?php 
if(isset($_POST['All'])){
        $table = $db->select("etudiant")
                    ->where("id","=")
                    ->execute([5]);
        echo json_encode($table);
        var_dump($table);
    }
?>

