function selectionAll() {
    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: "data=data",
        datatype: "json",
        success: function(data) {
            alert(data.length);
            if (data.length > 0) {
                var table_affichage = "<div class='table_etudiant'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom</th><th>Prenom</th><th>Date de naissance</th><th>Sexe</th><th>Actions</th></thead><tbody>";
                for (var i = 0; i < data.length; i++) {
                    table_affichage = table_affichage + "<tr><td>" + data[i].nom + "</td><td>" + data[i].prenom + "</td><td>" + data[i].date_de_naissance + "</td><td>" + data[i].sexe + "</td><td><a href='#' class=' glyph'  data-toggle='tooltip' data-placement='bottom' title='effacer' onclick='effacer(" + data[i].id + ")'> <i class='fa fa-trash'></i></a><a href='#' class='glyph' data-toggle='tooltip'  data-placement='bottom' title='modifier' onclick='modifier(" + data[i].id + ")'> <i class='fa fa-edit'></i></a>";
                }
                table_affichage = table_affichage + "</td></tr></tbody></table></div>";

                $('.affichage_etudiant').html(table_affichage);
            } else {
                $('.affichage_etudiant').html("Il n'y a pas d'etudiant");
            }

        }
    })
}

function effacer(id) {
    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: "id_effacer=" + id,
        datatype: "json",
        success: function(data) {
            if (data == "effacer") {
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

function modifier(id) {
    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: "id_modifier=" + id,
        datatype: "json",
        success: function(data) {
            if (data != "") {
                $('#id').val(data[0].id);
                $('#nom').val(data[0].nom);
                $('#prenom').val(data[0].prenom);
                $('#dtn').val(data[0].date_de_naissance);
                $('#sexe').val(data[0].sexe);

                $('#btn_enregistrer').addClass('hide');
                $('#btn_modification').removeClass('hide');
                $('#btn_annuler').removeClass('hide');
            }

        }
    })
}
$('#btn_modification').on('click', function() {
    var $nom = $('#nom').val();
    var $prenom = $('#prenom').val();
    var $dtn = $('#dtn').val();
    var $sexe = $('#sexe').val();

    var data = "nom_modif=" + $nom + "&prenom=" + $prenom + "&date_naissance=" + $dtn + "&sexe=" + $sexe;
    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: data,
        datatype: "json",
        success: function(data) {
            if (data == "ok") {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Modifié!"
                });
                selectionAll();
                $('#nom').val("");
                $('#prenom').val("");
                $('#dtn').val("");
                $('#sexe').val("");
            }

        }
    })
})