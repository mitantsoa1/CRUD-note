$(document).ready(function() {
    function selectionAll() {
        $.ajax({
            url: "Controls/ajax.php",
            type: "POST",
            data: "data=data",
            datatype: "json",
            success: function(data) {
                var table_affichage = "<div class='table_etudiant'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom</th><th>Prenom</th><th>Date de naissance</th><th>Sexe</th></thead><tbody>";
                for (var i = 0; i < data.length; i++) {
                    table_affichage = table_affichage + "<tr><td>" + data[i].nom + "</td><td>" + data[i].prenom + "</td><td>" + data[i].date_de_naissance + "</td><td>" + data[i].sexe;
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
                }

            }
        })
    })


});