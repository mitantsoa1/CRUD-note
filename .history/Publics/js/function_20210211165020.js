function effacer(id) {
    $.ajax({
        url: "Controls/ajax.php",
        type: "POST",
        data: "id_effacer=" + id,
        datatype: "json",
        success: function(data) {
            if (data == "ok") {
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