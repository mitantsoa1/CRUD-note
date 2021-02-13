<?php 
if(isset($_POST['All'])){
    $db = new Database();
        $table = $db->select("etudiant")
                    ->where("id","=")
                    ->execute([5]);
        echo json_encode($table);
        var_dump($table);
    }
?>

