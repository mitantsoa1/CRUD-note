<?php
include("../Models/Database.class.php");
header('Content-type: application/json'); 
    if(isset($_POST['etud'])){
        $etud=htmlspecialchars(trim($_POST['etud'])) ;
        $mat =htmlspecialchars(trim($_POST['mat'])); 
        $note =htmlspecialchars(trim( $_POST['note'])) ;

        echo json_encode($note);die;
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
    
?>

