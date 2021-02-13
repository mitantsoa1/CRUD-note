function affiche_note_matiere() {
    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: "affiche_note=affiche_note",
        datatype: "json",
        success: function(data) {
            var button = "<a href='#' class='btn btn_primary' id='btn_note'>Enregistrer</a> ";
            if (data.length > 0) {
                var table_affichage = "<div class='table_note m-t-10'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom de la matiere</th><th>Note</th></thead><tbody>";
                for (var i = 0; i < data.length; i++) {
                    table_affichage = table_affichage + "<tr><td>" + data[i].nom_matiere + "</td><td><input type='number' class='form-control' data-id='" + data[i].id_matiere + "'></td></tr>";
                }
                table_affichage = table_affichage + "</tbody></table></div>";

                $('.matiere_table').html(table_affichage + button);
            } else {
                $('.matiere_table').html("<h3>Il n'y a pas de matiere</h3>");
            }

        }
    })
}
affiche_note_matiere();