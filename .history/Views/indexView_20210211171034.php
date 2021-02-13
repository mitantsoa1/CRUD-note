<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" /> -->
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->

    <?php
Controllers::includeCSS(["all","bootstrap.min","sweetalert2.min","style"]);
?>
</head>
<body>
    <div class="container content">
            <h2 class="text-center titre">Etudiant</h2>      
        <form class="form-group myForm" id="formulaire">
            <input type="hidden" id="id">
            <div class="form-group">
                <label for="">Nom :</label>
                <input type="text" class="form-control obligatoire" id="nom">
            </div>
            <div class="form-group">
                <label for="">Prenom :</label>
                <input type="text" class="form-control obligatoire" id="prenom">
            </div>
            <div class="form-group">
                <label for="">Date de naissance :</label>
                <input type="date" class="form-control obligatoire" id="dtn">
            </div>
            <div class="form-group">
                <label for="">Sexe :</label>
                <select name="" id="sexe" class="form-control">
                    <option value="femme">Femme</option>
                    <option value="homme">Homme</option>
                </select>
            </div>
                
            <a href="#" id="btn_enregistrer" class="btn btn-primary boutton">Enregistrer</a>
            <a href="#" id="btn_modification" class="hide btn btn-success boutton">Modifier</a>
        </form>
        <div class="affichage_etudiant">
           
        </div>
    </div>
   
    <?php
Controllers::includeJS(["jquery","bootstrap.min","all","sweetalert2.min","main","function"]);
?> 
    <!-- <script defer src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"></script> -->
<!-- <script>
     
</script> -->
</body>
</html>