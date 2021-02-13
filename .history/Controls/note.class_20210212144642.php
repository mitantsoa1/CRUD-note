<?php 
if(isset($_POST['AllN'])){
        $table = $db->select("note")
                    ->execute(null);
        echo json_encode($table);
        var_dump($table);
    }
?>

