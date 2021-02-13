$(document).ready(function() {
    function selectionAll() {
        $.ajax({
            url: "Ajax/selectAll",
            type: "POST",
            data: "data=data",
            datatype: "json",
            success: function(data) {
                alert(data);
                var table_affichage = "<div class='table_etudiant'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom</th><th>Prenom</th><th>Date de naissance</th><th>Sexe</th></thead><tbody>";
                for (var i = 0; i < data.length; i++) {
                    table_affichage = table_affichage + "<tr><td>" + data[i].nom + "</td><td>" + data[i].prenom + "</td><td>" + data[i].date_naissance + "</td><td>" + data[i].sexe;
                }
                table_affichage = table_affichage + "</td></tr></tbody></table></div>";

                $('.affichage_etudiant').html(table_affichage);
            }
        })
    }
    selectionAll();

    function insert() {
        var $nom = $('#nom').val();
        var $prenom = $('#prenom').val();
        var $dtn = $('#dtn').val();
        var $sexe = $('#sexe').val();

        var data = "nom=" + $nom + "&prenom=" + $prenom + "&date_naissance=" + $dtn + "&sexe=" + $sexe;
    }
});