function note() {
    var $etudiant = $('#etudiant_gestion').val();
    var data = "etudiant=" + $etudiant;
    $.ajax({
        url: "Controls/note.class.php",
        type: "POST",
        data: data,
        datatype: "json",
        success: function(data) {
            if (data.length > 0) {
                var table_affichage = "<div class=' m-t-10'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom </th><th>Prenom </th><th>Matiere </th><th>Note </th><th>Actions</th></thead><tbody>";
                for (var i = 0; i < data.length; i++) {
                    table_affichage = table_affichage + "<tr><td>" + data[i].nom + "</td><td>" + data[i].prenom + "</td><td>" + data[i].matiere + "</td><td>" + data[i].note + "</td><td><a href='#' class=' glyph'  data-toggle='tooltip' data-placement='bottom' title='effacer' onclick='supr_note(" + data[i].id_note + ")'> <i class='fa fa-trash'></i></a><a href='#' class='glyph' data-toggle='tooltip'  data-placement='bottom' title='modifier' onclick='modif_note(" + data[i].id_note + ")'> <i class='fa fa-edit'></i></a>";
                }
                table_affichage = table_affichage + "</td></tr></tbody></table></div>";

                $('.affiche').html(table_affichage);
            } else {
                $('.affiche').html("<h3>Choisir un étudiant</h3>");
            }
        }
    })
}

function supr_note(id) {
    $.ajax({
        url: "Controls/note.class.php",
        type: "POST",
        data: "id_effacer_note=" + id,
        datatype: "json",
        success: function(data) {
            if (data == "delete") {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Effacé!"
                });
                note();
            }

        }
    })
}

function modif_note(id) {

    $.ajax({
        url: "Controls/note.class.php",
        type: "POST",
        data: "id_mod_note=" + id,
        datatype: "json",
        success: function(data) {
            if (data != "") {
                $('#id_gestion').val(data[0].id_note);
                $('#matiere_gestion').val(data[0].matiere);
                $('#note_gestion').val(data[0].note);

                $('#btn_gestion').addClass('hide');
                $('#btn_gestion_modif').removeClass('hide');
            }
        }
    })
}