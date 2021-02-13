<?php 
if(isset($_POST['All'])){
    $db = new Database();
        $table = $db->select("etudiant")
                    ->where("id","=")
                    ->execute([8]);
        echo json_encode($table);
        var_dump($table);
    }
?>

