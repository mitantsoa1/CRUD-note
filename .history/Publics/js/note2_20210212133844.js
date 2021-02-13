function selectionNote() {
    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: "data=AllNote",
        datatype: "json",
        success: function(data) {
            console.log(data);
            // if (data.length > 0) {
            //     var table_affichage = "<div class='table_etudiant'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom</th><th>Prenom</th><th>Français</th><th>Anglais</th><th>Mathématiques</th><th>Malagasy</th><th>Actions</th></thead><tbody>";
            //     for (var i = 0; i < data.length; i++) {
            //         table_affichage = table_affichage + "<tr><td>" + data[i].nom + "</td><td>" + data[i].prenom + "</td><td>" + data[i].date_de_naissance + "</td><td>" + data[i].sexe + "</td><td><a href='#' class=' glyph'  data-toggle='tooltip' data-placement='bottom' title='effacer' onclick='effacer(" + data[i].id + ")'> <i class='fa fa-trash'></i></a><a href='#' class='glyph' data-toggle='tooltip'  data-placement='bottom' title='modifier' onclick='modifier(" + data[i].id + ")'> <i class='fa fa-edit'></i></a>";
            //     }
            //     table_affichage = table_affichage + "</td></tr></tbody></table></div>";

            //     $('.affichage_etudiant').html(table_affichage);
            // } else {
            //     $('.affichage_etudiant').html("Il n'y a pas d'etudiant");
            // }

        }
    })
}
selectionNote();

$('#b_note').on('click', function() {
    var id_et = $('#select_etudiant_note').val();
    var fr = $('#fr').val();
    var mal = $('#mal').val();
    var maths = $('#maths').val();
    var ang = $('#ang').val();

    var data = "id_et=" + id_et + "&fr=" + fr + "&mal=" + mal + "&maths=" + maths + "&ang=" + ang;

    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: data,
        datatype: "json",
        success: function(data) {

            if (data == "ok") {
                var table_affichage = "<div class='table_matiere m-t-10'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom de la matiere</th><th>Actions</th></thead><tbody>";
                for (var i = 0; i < data.length; i++) {
                    table_affichage = table_affichage + "<tr><td>" + data[i].nom_matiere + "</td><td><a href='#' class=' glyph'  data-toggle='tooltip' data-placement='bottom' title='effacer' onclick='supr_mat(" + data[i].id_matiere + ")'> <i class='fa fa-trash'></i></a><a href='#' class='glyph' data-toggle='tooltip'  data-placement='bottom' title='modifier' onclick='modif_mat(" + data[i].id_matiere + ")'> <i class='fa fa-edit'></i></a>";
                }
                table_affichage = table_affichage + "</td></tr></tbody></table></div>";

                $('.matiere_table').html(table_affichage + button);

            } else if (data == "erreur") {
                $('.matiere_table').html("<h3>Il y en a déjà</h3>");
            }

        }
    })
})