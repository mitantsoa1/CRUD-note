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
note();

$('#etudiant_gestion').on('change', function() {
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
})

$(document.body).on('click', '#btn_gestion', function() {
    var $etud = $('#etudiant_gestion').val();
    var $mat = $('#matiere_gestion').val();
    $note = $("#note_gestion").val();

    var data = "etud=" + $etud + "&mat=" + $mat + "&note=" + $note;
    $.ajax({
        url: "Controls/note.class.php",
        type: "POST",
        data: data,
        datatype: "json",
        success: function(data) {
            if (data == "ok") {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "succes!"
                });
                note();
                $('#matiere').val("");

            } else if (data == "non") {
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "La matiere existe déjà!"
                });
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Erreur de connexion à la base"
                });
            }

        }
    })
})

$(document.body).on('click', '#btn_gestion', function() {
    var $etud = $('#etudiant_gestion').val();
    var $mat = $('#matiere_gestion').val();
    var $note = $("#note_gestion").val();
    var id = $('#id_gestion').val();

    var data = "etud_modif=" + $etud + "&mat=" + $mat + "&note=" + $note + "&id=" + id;
    $.ajax({
        url: "Controls/note.class.php",
        type: "POST",
        data: data,
        datatype: "json",
        success: function(data) {
            if (data == "ok") {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "succes!"
                });
                note();
                $('#note').val("");

            } else if (data == "non") {
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "La matiere existe déjà!"
                });
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Erreur de connexion à la base"
                });
            }

        }
    })
})