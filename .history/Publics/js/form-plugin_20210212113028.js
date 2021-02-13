function data_form(name) {


    this.name_form = name.trim();

    // verifier si tous les champs sont bien rempli

    this.verify = function() {
            var etat = true;
            $("#" + this.name_form + " .obligatoire").each(function() {
                var ceci = $(this);

                if (ceci.val() == "") {
                    etat = false;
                    // CSS afaka ovaina
                    ceci.css("border", "red 1px solid");
                } else {
                    ceci.css("border", "");
                }

            });
            return etat;
        }
        // envoye des données
    this.sendInfo = function(uri, callback) {

        // console.log(this.getDataSend());
        $.ajax({
            url: uri,
            type: 'post',
            data: this.getDataSend(),
            success: function(data) {

                callback(data);
            },
            error: function() {

                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Erreur de connexion au serveur !',
                    showConfirmButton: false,
                    timer: 1600
                })
            }


        });


    }
    this.getDataSend = function() {
        // données à envoyer à PhP
        var dataSend = "tosend";
        var cpt = 0;
        // parcours de tous les inputs et les selects dans la form
        $("#" + this.name_form + " input, #" + this.name_form + " select, #" + this.name_form + " textarea").each(function() {
            var ceci = $(this);
            if (cpt == 0) {
                dataSend += ceci.attr("id") + "=" + ceci.val();
            } else {
                dataSend += "&" + ceci.attr("id") + "=" + ceci.val();
            }
            cpt++;


        });
        return dataSend;
    }

}

function forDelete(valeur) {

    this.sendInfo = function(uri, callback) {

        // console.log(this.getDataSend());
        $.ajax({
            url: uri,
            type: 'post',
            data: "id=" + valeur,
            dataType: 'json',
            success: function(data) {

                callback(data);
            },
            error: function() {

                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Erreur de connexion au serveu !',
                    showConfirmButton: false,
                    timer: 1600
                })
            }


        });


    }
}
//affiche
function forSearch(valeur) {

    this.sendInfo = function(uri, callback) {

        // console.log(this.getDataSend());
        $.ajax({
            url: uri,
            type: 'post',
            data: "value=" + valeur,
            dataType: 'json',
            success: function(data) {

                callback(data);
            },
            error: function() {

                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Erreur de connexion au serveur !',
                    showConfirmButton: false,
                    timer: 1600
                })
            }


        });


    }
}

function forSearchAll() {

    this.sendInfo = function(uri, callback) {

        // console.log(this.getDataSend());
        $.ajax({
            url: uri,
            type: 'post',
            data: "value=all",
            dataType: 'json',
            success: function(data) {

                callback(data);
            },
            error: function() {

                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Erreur de connexion au serveur !',
                    showConfirmButton: false,
                    timer: 1600
                })
            }


        });


    }
}