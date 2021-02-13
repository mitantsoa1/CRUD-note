<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NOTE</title>
    <?php
Controllers::includeCSS(["all","bootstrap.min","sweetalert2.min","style","util"]);
?>
</head>
<body>
    <div class="container note-content">
        <h2 class="text-center">Attribution des notes</h2>
        <form action="" id="formulaire">
            <?php 
                include('Models/Database.class.php');
                $db = new Database();
                $tab = $db->select("etudiant")
                            ->execute(null);
                echo "<div class='form-group'> <select id='select_etudiant_note' class='form-control'> <option value='choisir' selected='selected'>--Choisir un etudiant--</option>";
                        
                    for($i=0;$i<count($tab);$i++){
                        echo"
                            <option value='".$tab[$i]->id."'>".$tab[$i]->nom." ".$tab[$i]->prenom."</option>
                        ";
                    }

                echo "</select></div>";
                    
                        
            ?>
        </form>
    </div>
    

 <?php
Controllers::includeJS(["jquery","bootstrap.min","all","sweetalert2.min","form-plugin","note","function"]);
?>    
</body>
</html>