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
            alert(data);
            // var button = "<a href='#' class='btn btn-primary col-sm-offset-5' id='btn_note_register'>Enregistrer</a> ";
            // if (data.length > 0) {
            //     var table_affichage = "<div class='table_note m-t-10'><form id='form_note'><table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom de la matiere</th><th>Note</th></thead><tbody>";
            //     for (var i = 0; i < data.length; i++) {
            //         table_affichage = table_affichage + "<tr><td>" + data[i].nom_matiere + "</td><td><input type='number' class='form-control input' id='" + data[i].nom_matiere + "'></td></tr>";
            //     }
            //     table_affichage = table_affichage + "</tbody></form></table></div>";

            //     $('.matiere_table').html(table_affichage + button);

            // } else {
            //     $('.matiere_table').html("<h3>Il n'y a pas de matiere</h3>");
            // }

        }
    })
})