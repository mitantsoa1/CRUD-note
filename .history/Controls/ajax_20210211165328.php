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


?>