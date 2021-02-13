
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <?php Controllers::includeCSS(["bootstrap", "font-awesome","sweetalert2.min","style"]); ?>
     
  </head>
  <body>
  <?php
// include "../Models/Database.class.php";

$db = new Database();
Database::init("localhost", "stage", "root", "");
$table = $db->selectSP("exemple")
    ->executeSP();

echo "<table class='table table-striped table-hover table-bordered tbl'>
    <thead>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Actions</th>
    </thead>
    <tbody>";

for ($i = 0; $i < count($table); $i++) {
    echo "<tr>
        <td>" . $table[$i]->nom . "</td>
        <td>" . $table[$i]->prenom . "</td>
        <td>
        <a href='#' id='effacerTel' class='m-l-50 glyph'  data-toggle='tooltip' data-placement='bottom' title='effacer' onclick='effacer(" . $table[$i]->id . ")'> effacer</a>
        <a href='#' id='modifierTel' class='m-l-50' data-toggle='tooltip'  data-placement='bottom' title='modifier' onclick='modifier(" . $table[$i]->id . ")'> modifier</a>
        </td>
    </tr>";
}
echo "</tbody>
  </table>";
   Controllers::includeJS(["jquery-3.1.1", "bootstrap", "sweetalert2.min", "script"]); 
?>

   <script src="../Publics/js/script.js"></script> 
  </body>
  </html>
  
