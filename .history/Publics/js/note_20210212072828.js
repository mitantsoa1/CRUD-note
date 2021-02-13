function affiche_matiere() {
    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: "affiche_note=affiche_note",
        datatype: "json",
        success: function(data) {
            if (data.length > 0) {
                var table_affichage = "<div class='table_note m-t-10'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom de la matiere</th></thead><tbody>";
                for (var i = 0; i < data.length; i++) {
                    table_affichage = table_affichage + "<tr><td>" + data[i].nom_matiere;
                }
                table_affichage = table_affichage + "</td></tr></tbody></table></div>";

                $('.affiche_matiere').html(table_affichage);
            } else {
                $('.affiche_matiere').html("<h3>Il n'y a pas de matiere</h3>");
            }

        }
    })
}
affiche_matiere();