$('#etudiant_gestion').on('change', function() {
    var $etudiant = $('#etudiant_gestion').val();
    var data = "etudiant=" + $etudiant;
    $.ajax({
        url: "Controls/note.class.php",
        type: "POST",
        data: data,
        datatype: "json",
        success: function(data) {
            console.log(data);

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