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

        $db->update("etudiant")
            ->parametters(["nom","prenom","date_de_naissance","sexe"])
            ->execute([$nom,$prenom,$dtn,$sexe]);
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
                    echo json_encode("ok");
                }
    }


?>