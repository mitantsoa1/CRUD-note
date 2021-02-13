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

function mod(id) {
    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: "id_mod_note=" + id,
        datatype: "json",
        success: function(data) {
            if (data != "") {
                $('#id_note').val(data[0].id_note);
                $('#fr').val(data[0].francais);
                $('#ang').val(data[0].anglais);
                $('#maths').val(data[0].mathematiques);
                $('#mal').val(data[0].Malagasy);

                $('#btn_enregistrer').addClass('hide');
                $('#btn_modification').removeClass('hide');
                $('#btn_annuler').removeClass('hide');
            }

        }
    })
}

$('#b_matiere_modif').on('click', function() {
    var id_et = $('#select_etudiant_note').val();
    var fr = $('#fr').val();
    var mal = $('#mal').val();
    var maths = $('#maths').val();
    var ang = $('#ang').val();
    var id_n = $('#id_note').val();

    var data = "id_et_modif=" + id_et + "&fr=" + fr + "&mal=" + mal + "&maths=" + maths + "&ang=" + ang + "&id_n=" + id_n;

    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: data,
        datatype: "json",
        success: function(data) {

            if (data == "ok") {
                selectionNote();
                $('#fr').val("");

                $('#mal').val("");

                $('#maths').val("");

                $('#ang').val("");

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "succes!"
                });

            }
        }
    })
})