<?php 
if(isset($_POST['AllNote2'])){
        $table = $db->select("note")
                    ->execute(null);
        echo json_encode($table);
        var_dump($table);
    }
?>

