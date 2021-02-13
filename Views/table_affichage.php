<?php 
    include('Models/Database.class.php');
    $db = new Database();
    $db->select("etudiant");
?>