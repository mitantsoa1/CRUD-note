function affiche_note_matiere() {
    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: "affiche_note=affiche_note",
        datatype: "json",
        success: function(data) {
            var button = "<a href='#' class='btn btn-primary col-sm-offset-5' id='btn_note_register'>Enregistrer</a> ";
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

var id_etudiant = $('#select_etudiant_note').val();
var data = "id_etudiant=" + id_etudiant;
$.ajax({
    url: "Controls/ajax.php",
    type: "POST",
    data: data,
    datatype: "json",
    success: function(data) {
        console.log(data);
        if (data.length > 0) {
            var table_affichage = "<div'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom et prenom</th><th>Français</th><th>English</th><th>Mathématiques</th></thead><tbody>";
            for (var i = 0; i < data.length; i++) {
                table_affichage = table_affichage + "<tr><td>" + data[i].nom + " " + data[i].prenom + "</td><td>" + data[i].francais + "</td><td>" + data[i].english + "</td><td>" + data[i].mathematiques + "</td><td><a href='#' class=' glyph'  data-toggle='tooltip' data-placement='bottom' title='effacer' onclick='supr_mat(" + data[i].id_matiere + ")'> <i class='fa fa-trash'></i></a><a href='#' class='glyph' data-toggle='tooltip'  data-placement='bottom' title='modifier' onclick='modif_mat(" + data[i].id_matiere + ")'> <i class='fa fa-edit'></i></a>";
            }
            table_affichage = table_affichage + "</td></tr></tbody></table></div>";

            $('.general').html(table_affichage);
        } else {
            $('.general').html("<h3>Il n'y a pas de note</h3>");

        }
    }
})
$('#select_etudiant_note').on('change', function() {
    var id_etudiant = $('#select_etudiant_note').val();
    var data = "id_etudiant=" + id_etudiant;
    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: data,
        datatype: "json",
        success: function(data) {
            console.log(data);
            if (data.length > 0) {
                var table_affichage = "<div'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom et prenom</th><th>Français</th><th>English</th><th>Mathématiques</th></thead><tbody>";
                for (var i = 0; i < data.length; i++) {
                    table_affichage = table_affichage + "<tr><td>" + data[i].nom + " " + data[i].prenom + "</td><td>" + data[i].francais + "</td><td>" + data[i].english + "</td><td>" + data[i].mathematiques + "</td><td><a href='#' class=' glyph'  data-toggle='tooltip' data-placement='bottom' title='effacer' onclick='supr_mat(" + data[i].id_matiere + ")'> <i class='fa fa-trash'></i></a><a href='#' class='glyph' data-toggle='tooltip'  data-placement='bottom' title='modifier' onclick='modif_mat(" + data[i].id_matiere + ")'> <i class='fa fa-edit'></i></a>";
                }
                table_affichage = table_affichage + "</td></tr></tbody></table></div>";

                $('.general').html(table_affichage);
            } else {
                $('.general').html("<h3>Il n'y a pas de note</h3>");

            }
        }
    })
})

$(document.body).on('click', '#btn_note_register', function() {
    alert('ici');
})