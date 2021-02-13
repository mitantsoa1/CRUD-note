<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>matiere</title>
    <?php 
        Controllers::includeCSS(["all","bootstrap.min","sweetalert2.min","style"]);
    ?>
</head>
<body>
    <div class="container content-matiere">
        <form action="" class="form-inline">
            <input type="hidden" id="id">

            <div class="form-group">
            <br>
                <label for="">Nom de la matiere:</label>
                <input type="text" class="form-control" id="matiere">
                
                <button class="btn btn-success" id="btn_matiere">Enregistrer</button>
                <button id="btn_matiere_modif" class="hide btn btn-success">Modifier</button>
            <button id="btn_matiere_annuler" class="hide btn btn-info hide">Annuler</button>
            </div>
                
        </form>

        <div class="affiche_matiere"></div>
    </div>


<?php
Controllers::includeJS(["jquery","bootstrap.min","all","sweetalert2.min","main","function"]);
?> 
</body>
</html>