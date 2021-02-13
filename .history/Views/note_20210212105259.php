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
                    echo "<div class='col-sm-4 col-sm-offset-3'> <select id='select_etudiant_note' class='form-control'> <option value='choisir' selected='selected'>--Choisir un etudiant--</option>";
                            
                        for($i=0;$i<count($tab);$i++){
                            echo"
                                <option value='".$tab[$i]->id."'>".$tab[$i]->nom." ".$tab[$i]->prenom."</option>
                            ";
                        }

                    echo "</select></div>";
                    
                    $reqS="SHOW COLUMNS FROM note";
                    $conn= new PDO("mysql:host=localhost;dbname=scolarite","root","");
                            $stmt = $conn -> prepare($reqS);
                            $stmt -> execute();
                            $i=0;

                            while($tab= $stmt->fetch(PDO::FETCH_ASSOC)){
                                echo $tab["Field"];
                                $i++;
                                
                            }
                            var_dump($tab);
                
                ?>

                
            </div>                 
        </form>
        <a href="matiere" >ajouter matiere</a>
        <div class="nom"></div>
        <div class="row">
            <div class="matiere_table col-sm-8 col-sm-offset-1">matiere</div>
        </div>
        <div class="general"></div>
    </div>
    

<?php
Controllers::includeJS(["jquery","bootstrap.min","all","sweetalert2.min","note","function"]);
?> 
</body>
</html>