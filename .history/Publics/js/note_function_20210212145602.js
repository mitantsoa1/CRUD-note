// function selectionNote() {
//     $.ajax({
//         url: "Controls/ajax.php",
//         type: "POST",
//         data: "data=All",
//         datatype: "json",
//         success: function(data) {
//             console.log(data);
//             if (data.length > 0) {
//                 var table_affichage = "<div class='table_etudiant'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom</th><th>Prenom</th><th>Français</th><th>Anglais</th><th>Mathématiques</th><th>Malagasy</th><th>Actions</th></thead><tbody>";
//                 for (var i = 0; i < data.length; i++) {
//                     table_affichage = table_affichage + "<tr><td>" + data[i].nom + "</td><td>" + data[i].prenom + "</td><td>" + data[i].francais + "</td><td>" + data[i].anglais + "</td><td>" + data[i].mathematiques + "</td><td>" + data[i].Malagasy + "</td><td><a href='#' class=' glyph'  data-toggle='tooltip' data-placement='bottom' title='effacer' onclick='eff(" + data[i].id_note + ")'> <i class='fa fa-trash'></i></a><a href='#' class='glyph' data-toggle='tooltip'  data-placement='bottom' title='modifier' onclick='mod(" + data[i].id_note + ")'> <i class='fa fa-edit'></i></a>";
//                 }
//                 table_affichage = table_affichage + "</td></tr></tbody></table></div>";

//                 $('.total_note').html(table_affichage);
//             } else {
//                 $('.total_note').html("Il n'y a pas d'etudiant");
//             }

//         }
//     })
// }

function eff(id) {
    $.ajax({
        url: "Controls/ajax.php",
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
                selectionAll();
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