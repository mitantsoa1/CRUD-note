<?php 
    include("../Models/Database.class.php");
    header('Content-type: application/json');
    $db = new Database();

    if(isset($_POST['data'])){
        $tab = $db->select("etudiant")
                ->execute();
        echo json_encode($tab);
    }

    if(isset($_POST['nom'])){
        $nom = htmlspecialchars(trim($_POST['nom']));
        $prenom = htmlspecialchars(trim($_POST['prenom']));
        $dtn = htmlspecialchars(trim($_POST['date_naissance']));
        $sexe = $_POST['sexe'];

        $db->insert("etudiant")
            ->parametters(["nom","prenom","date_de_naissance","sexe"])
            ->execute([$nom,$prenom,$dtn,$sexe]);
        echo json_encode("ok");
    }

    if(isset($_POST['id_effacer'])){
        $db->delete("etudiant")
            ->where("id","=")
            ->execute([$_POST['id_effacer']]);
        echo json_encode("effacer");
    }

    if(isset($_POST['id_modifier'])){
        $tab=$db->select("etudiant")
            ->where("id","=")
            ->execute([$_POST['id_modifier']]);
        echo json_encode($tab);
    }
    if(isset($_POST['nom_modif'])){
        $nom = htmlspecialchars(trim($_POST['nom_modif']));
        $prenom = htmlspecialchars(trim($_POST['prenom']));
        $dtn = htmlspecialchars(trim($_POST['date_naissance']));
        $sexe = $_POST['sexe'];
        $id = htmlspecialchars(trim($_POST["id"]));

        $db->update("etudiant")
            ->parametters(["nom","prenom","date_de_naissance","sexe"])
            ->where("id","=")
            ->execute([$nom,$prenom,$dtn,$sexe,$id]);
        echo json_encode("ok");
    }

    if(isset($_POST['etudiant'])){
        $tab=$db->select("etudiant")
                ->where("id","=")
                ->execute([$_POST['etudiant']]);
        echo json_encode($tab);
    }

    if(isset($_POST["affiche_matiere"])){
        $tab=$db->select("matiere")
                ->execute(null);
        echo json_encode($tab);
    }

    if(isset($_POST["nom_matiere"])){
        $matiere = htmlspecialchars(trim($_POST["nom_matiere"]));
        $tab=$db->select("matiere")
                ->where("nom_matiere","=")
                ->execute([$matiere]);

                if(count($tab)>0){
                    echo json_encode("non");
                }else{
                    $db->insert("matiere")
                        ->parametters(["nom_matiere"])
                        ->execute([$matiere]);
                        //APINA ALTER TABLE
                    echo json_encode("ok");
                }
    }

    if(isset($_POST['id_mat_effacer'])){
        $db->delete("matiere")
            ->where("id_matiere","=")
            ->execute([$_POST['id_mat_effacer']]);
        echo json_encode("effacer");
    }

    if(isset($_POST['id_mat_modifier'])){
        $tab=$db->select("matiere")
            ->where("id_matiere","=")
            ->execute([$_POST['id_mat_modifier']]);
        echo json_encode($tab);
    }
    if(isset($_POST['nom_mat_modif'])){
        $matiere = htmlspecialchars(trim($_POST['nom_mat_modif']));
        $id = htmlspecialchars(trim($_POST["id"]));

        $db->update("matiere")
            ->parametters(["nom_matiere"])
            ->where("id_matiere","=")
            ->execute([$matiere,$id]);
        echo json_encode("ok");
    }

    if(isset($_POST['affiche_note'])){
        $tab = $db->select("matiere")
                    ->execute(null);

        echo json_encode($tab);

    }

    if(isset($_POST['id_etudiant'])){
        $tab = $db->select("note")
                    ->innerD("etudiant","id_etudiant","id")
                    ->et("note.id_etudiant","=")
                    ->execute([$_POST['id_etudiant']]);

                    echo json_encode($tab);
    }

    if(isset($_POST['tosend'])){
        $fr=htmlspecialchars(trim($_POST['français'])) ;
        $en =htmlspecialchars(trim($_POST['english'])); 
        $maths =htmlspecialchars(trim( $_POST['mathematiques'])) ;
        $mal =htmlspecialchars(trim($_POST['Malagasy'])) ;
        
        $db->insert("note")
           ->parametters(["id_etudiant","francais","english","mathematiques","Malagasy"])
           ->execute([6,$fr,$en,$maths,$mal]); 
    }

    if(isset($_POST['id_et'])){
        $fr=htmlspecialchars(trim($_POST['fr'])) ;
        $ang =htmlspecialchars(trim($_POST['ang'])); 
        $maths =htmlspecialchars(trim( $_POST['maths'])) ;
        $mal =htmlspecialchars(trim($_POST['mal'])) ;
        $id_et = $_POST['id_et'];
echo json_encode($fr.$ang.$maths.$mal.$id_et);die;
        $tab =$db->select("note")
                ->where("id_etudiant","=")
                ->execute([$id_et]);
        if(count($tab)>0){
            echo json_encode("erreur");
        }else{
            $db->insert("note")
                ->parametters(["id_et","francais","anglais","mathematiques","Malagasy"])
                ->execute([$id_et,$fr,$ang,$maths,$mal]);
                echo json_encode("ok");
        }

    }

?>