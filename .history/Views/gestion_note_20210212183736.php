<?php 
    include('Models/Database.class.php');
    $db = new Database();
    $tab = $db->select("etudiant")
                ->execute(null);
var_dump($tab);
    $table = $db->select("etudiant")
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
        <form action="" id="form_gestion">
            <input type="hidden" id="id_gestion">
            <div class="form-group">
                <label for="">Etudiant</label>
                <select name="" id="etudiant_gestion">
                    <option value="choisir" selected>-- Choisir un étudiant --</option>
                    <?php 
                        $tab = $db->select("etudiant")
                        ->execute(null);
                        for($i=0;$i<count($tab);$i++){
                            echo"
                                    <option value='".$tab[$i]->id."'>".$tab[$i]->nom." "." $tab[$i]->prenom"."</option>
                            ";
                        }

                    ?>
                </select>
            </div>
        </form>

        <?php
        Controllers::includeJS(["jquery","bootstrap.min","all","sweetalert2.min","main","function"]);
        ?> 
    </body>
</html>