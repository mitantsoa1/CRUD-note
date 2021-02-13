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
                
                <a href="#" class="btn btn-success" id="btn_matiere">Enregistrer</a>
                <a href="#" id="btn_matiere_modif" class="hide btn btn-success">Modifier</a>
                <a href="note" class="btn btn-default">Attribuer des notes</a>
            </div>
                
        </form>

        <div class="affiche_matiere"></div>
    </div>


<?php
Controllers::includeJS(["jquery","bootstrap.min","all","sweetalert2.min","main","function"]);
?> 
</body>
</html>