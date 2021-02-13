<?php
include("../Models/Database.class.php");
$db = new Database();
header('Content-type: application/json'); 

    if(isset($_POST['etud'])){
        $etud=htmlspecialchars(trim($_POST['etud'])) ;
        $mat =htmlspecialchars(trim($_POST['mat'])); 
        $note =htmlspecialchars(trim( $_POST['note'])) ;

        $tab = $db->select("note")
                    ->where("id_etudiant","=")
                    ->et("matiere","=")
                    ->execute([$etud,$mat]);

            if(count($tab)>0){
                echo json_encode("non");
            }else{
                $db->insert("note")
                    ->parametters(["id_etudiant","matiere","note"])
                    ->execute([$etud,$mat,$note]);
                echo json_encode("ok");
            }
        ;
    }

    if(isset($_POST['etud'])){
        $tab = $db->select("note")
                    ->where("id_etudiant","=")
                    ->execute([$_POST['etud']]);
        echo json_encode($tab);
    }
    
?>

