<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>note</title>
    <?php
Controllers::includeCSS(["all","bootstrap.min","sweetalert2.min","style","util"]);
?>
</head>
<body>
    <div class="container content-note">
        <h2 class="text-center">NOTES</h2>
    <form action="">
        <div class="row">
            <?php 
                include('Models/Database.class.php');
                $db = new Database();
                $tab = $db->select("etudiant")
                            ->execute(null);
                echo "<div class='col-sm-3'> <select id='select_etudiant_note' class='form-control'>";

                    for($i=0;$i<count($tab);$i++){
                        echo"
                            <option value='".$tab[$i]->id."'>".$tab[$i]->nom." ".$tab[$i]->prenom."</option>
                        ";
                    }

                echo "</select></div>";
                
                $tab = $db->select("matiere")
                            ->execute(null);
                            echo "<div class='col-sm-3'><select id='select_matiere_note' class='form-control'>";

                            for($i=0;$i<count($tab);$i++){
                                echo"
                                    <option value='".$tab[$i]->id."'>".$tab[$i]->nom_matiere."</option>
                                ";
                            }
            
                        echo "</select></div>";
            ?>
            <div class='col-sm-3'>
                <input type="number" class="form-control" id="note"> 
            </div> 
        

            <div class="col-sm-3">

                <a href="#" class="btn btn-primary " id="btn_note">Enregistrer</a>

            </div>

            
        </div>                 
    </form>
    <a href="matiere" >ajouter matiere</a>
    <div class="nom"></div>
    <div class="note"></div>
    </div>
    

<?php
Controllers::includeJS(["jquery","bootstrap.min","all","sweetalert2.min","main","function"]);
?> 
</body>
</html>