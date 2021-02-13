<?php 
    $db = new Database();
    $tab = $db->select("etudiant")
                ->execute(null);

    $table = $db->select("etudiant")
                ->execute(null);
?>