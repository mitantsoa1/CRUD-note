$(document).ready(function() {
    function selectionAll() {
        $.ajax({
            url: "Controls/ajax.php",
            type: "POST",
            data: "data=data",
            datatype: "json",
            success: function(data) {
                var table_affichage = "<div class='table_etudiant'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom</th><th>Prenom</th><th>Date de naissance</th><th>Sexe</th><th>Actions</th></thead><tbody>";
                for (var i = 0; i < data.length; i++) {
                    table_affichage = table_affichage + "<tr><td>" + data[i].nom + "</td><td>" + data[i].prenom + "</td><td>" + data[i].date_de_naissance + "</td><td>" + data[i].sexe + "<tr><td><a href='#' id='effacer' class='m-l-50 glyph'  data-toggle='tooltip' data-placement='bottom' title='effacer' onclick='effacer(" + $table[$i].id + ")'> <i class='glyphicon glyphicon-trash'></i></a><a href='#' id='modifierP' class='m-l-50' data-toggle='tooltip'  data-placement='bottom' title='modifier' onclick='modifier(" + $table[$i].id_a + ")'> <i class='glyphicon glyphicon-edit'></i></a>";
                }
                table_affichage = table_affichage + "</td></tr></tbody></table></div>";

                $('.affichage_etudiant').html(table_affichage);
            }
        })
    }
    selectionAll();

    $('#btn_enregistrer').on('click', function() {
        var $nom = $('#nom').val();
        var $prenom = $('#prenom').val();
        var $dtn = $('#dtn').val();
        var $sexe = $('#sexe').val();

        var data = "nom=" + $nom + "&prenom=" + $prenom + "&date_naissance=" + $dtn + "&sexe=" + $sexe;
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
                        title: "succes!"
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


});