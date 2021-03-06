<?php 
    include('Models/Database.class.php');
    $db = new Database();
    $tab = $db->select("etudiant")
               ->execute(null);

    $table = $db->select("matiere")
                ->execute(null);
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>gestion des notes</title>
        <?php 
            Controllers::includeCSS(["all","bootstrap.min","sweetalert2.min","style"]);
        ?>
    </head>
    <body>

        <div class="container gestion-content">
            <form action="" id="form_gestion">
                <input type="hidden" id="id_gestion">
                <div class="form-group">
                    <label for="">Etudiant</label>
                    <select id="etudiant_gestion" class="form-control">
                        <option value="choisir" selected>-- Choisir un étudiant --</option>
                        <?php 
                        
                            for($i=0;$i<count($tab);$i++){
                                       echo' <option value="'.$tab[$i]->id.'">'.$tab[$i]->nom.' '.$tab[$i]->prenom.'</option>
                                ';
                               
                            }
                     
                        ?>
                    </select> 
                </div>
                <div class="form-group">
                    <label for="">Matiere</label>
                    <select id="matiere_gestion" class="form-control">
                        <!-- <option value="choisir" selected>-- Choisir un étudiant --</option> -->
                        <?php 
                        
                            for($i=0;$i<count($table);$i++){
                                       echo' <option value="'.$table[$i]->nom_matiere.'">'.$table[$i]->nom_matiere.'</option>
                                ';
                               
                            }
                     
                        ?>
                    </select> 
                </div>
                <div class="form-group">
                <label for="">Note</label>
                    <input type="number" id="note_gestion" class="form-control">
                </div>

                <a href="#" class="btn btn-success" id="btn_gestion">Enregistrer</a>
                <a href="#" id="btn_gestion_modif" class="hide btn btn-success">Modifier</a>
            </form>
        </div>
        <div class="container affiche"></div>

        <?php
        Controllers::includeJS(["jquery","bootstrap.min","all","sweetalert2.min","gestion","note_function"]);
        ?> 
    </body>
</html>