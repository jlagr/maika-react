<?php
    $destino = 'contacto@maikateatro.com';
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $header = "Mensaje desde MaikaTeatro.com";
    $mensajeCompleto = "NOMBRE: \n" . $nombre . "\nMAIL: \n" . $email . "\nMENSAJE: \n" . $mensaje;

    echo "<h1>Mensaje enviado</h1>";
    mail($destino, $header, $mensajeCompleto);

    echo "<script>alert('Mensaje enviado, te responderemos a la brevedad.')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\", 1000)</script>";
?>