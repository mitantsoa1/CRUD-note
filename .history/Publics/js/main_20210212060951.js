$(document).ready(function() {
    function selectionAll() {
        $.ajax({
            url: "Controls/ajax.php",
            type: "POST",
            data: "data=data",
            datatype: "json",
            success: function(data) {
                if (data.length > 0) {
                    var table_affichage = "<div class='table_etudiant'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom</th><th>Prenom</th><th>Date de naissance</th><th>Sexe</th><th>Actions</th></thead><tbody>";
                    for (var i = 0; i < data.length; i++) {
                        table_affichage = table_affichage + "<tr><td>" + data[i].nom + "</td><td>" + data[i].prenom + "</td><td>" + data[i].date_de_naissance + "</td><td>" + data[i].sexe + "</td><td><a href='#' class=' glyph'  data-toggle='tooltip' data-placement='bottom' title='effacer' onclick='effacer(" + data[i].id + ")'> <i class='fa fa-trash'></i></a><a href='#' class='glyph' data-toggle='tooltip'  data-placement='bottom' title='modifier' onclick='modifier(" + data[i].id + ")'> <i class='fa fa-edit'></i></a>";
                    }
                    table_affichage = table_affichage + "</td></tr></tbody></table></div>";

                    $('.affichage_etudiant').html(table_affichage);
                } else {
                    $('.affichage_etudiant').html("<h3>Il n'y a pas d'etudiant</h3>");
                }

            }
        })
    }
    selectionAll();

    function afficheNote() {
        var etudiant = $("#select_etudiant_note").val();
        $.ajax({
            url: "Controls/ajax.php",
            type: "POST",
            data: "etudiant=" + etudiant,
            datatype: "json",
            success: function(data) {
                if (data.length > 0) {
                    var table_affichage = "<div class='nom_etudiant'><span> " + data[0].nom + " </span><span> " + data[0].prenom + " </span><span> " + data[0].sexe + " </span><span>  " + data[0].date_de_naissance + "</span>";

                    $('.nom').html(table_affichage);
                } else {
                    $('.nom').html("<h3>Il n'y a pas d'etudiant</h3>");
                }

            }
        })
    }
    afficheNote();

    $('#select_etudiant_note').on('change', function() {
        var etudiant = $("#select_etudiant_note").val();
        $.ajax({
            url: "Controls/ajax.php",
            type: "POST",
            data: "etudiant=" + etudiant,
            datatype: "json",
            success: function(data) {
                if (data.length > 0) {
                    afficheNote();
                } else {
                    $('.nom').html("<h3>Il n'y a pas d'etudiant</h3>");
                }

            }
        })
    })

    function affiche_matiere() {
        $.ajax({
            url: "Controls/ajax.php",
            type: "POST",
            data: "affiche_matiere=affiche_matiere",
            datatype: "json",
            success: function(data) {
                if (data.length > 0) {
                    console.log(data);
                    // var table_affichage = "<div class='table_etudiant'> <table class='table table-striped  m-t-10' style='position: relative !important;'><thead style='position: sticky !important;z-index: 1000;'><th>Nom</th><th>Prenom</th><th>Date de naissance</th><th>Sexe</th><th>Actions</th></thead><tbody>";
                    // for (var i = 0; i < data.length; i++) {
                    //     table_affichage = table_affichage + "<tr><td>" + data[i].nom + "</td><td>" + data[i].prenom + "</td><td>" + data[i].date_de_naissance + "</td><td>" + data[i].sexe + "</td><td><a href='#' class=' glyph'  data-toggle='tooltip' data-placement='bottom' title='effacer' onclick='effacer(" + data[i].id + ")'> <i class='fa fa-trash'></i></a><a href='#' class='glyph' data-toggle='tooltip'  data-placement='bottom' title='modifier' onclick='modifier(" + data[i].id + ")'> <i class='fa fa-edit'></i></a>";
                    // }
                    // table_affichage = table_affichage + "</td></tr></tbody></table></div>";

                    // $('.affichage_etudiant').html(table_affichage);
                } else {
                    $('.affichage_etudiant').html("<h3>Il n'y a pas de matiere</h3>");
                }

            }
        })
    }
    affiche_matiere();

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