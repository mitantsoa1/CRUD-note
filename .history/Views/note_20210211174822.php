<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>note</title>
</head>
<body>
    <h2 class="text-center">NOTES</h2>

    <?php 
    include('../Models/Database.class.php');
        $db = new Database();
        $tab = $db->select("etudiant")
                    ->execute(null);
        echo "<select id='select_etudiant_note'>";

            for($i=0;$i<count($tab);$i++){
                echo"
                    <option value='".$tab[$i]->id."'>".$tab[$i]->id."</option>
                ";
            }

         echo "</select>";
        

    ?>

</body>
</html>