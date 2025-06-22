<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mensaje Enviado | Soluciones Web</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header>
    <nav>
        <img src="img/logo.png" alt="Logo Soluciones Web" class="logo">
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="about.html">Sobre Nosotros</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
</header>
<main>
    <section class="respuesta-contacto">
        <?php
        function limpiar($dato) {
            return htmlspecialchars(trim($dato));
        }

        $nombre = limpiar($_GET['nombre'] ?? '');
        $email = limpiar($_GET['email'] ?? '');
        $telefono = limpiar($_GET['telefono'] ?? '');
        $empresa = limpiar($_GET['empresa'] ?? 'No indicada');
        $asunto = limpiar($_GET['asunto'] ?? '');
        $mensaje = limpiar($_GET['mensaje'] ?? '');

        $errores = [];
        if (!$nombre || strlen($nombre) < 3) $errores[] = "Nombre incorrecto.";
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errores[] = "Email inválido.";
        if (!$telefono || strlen($telefono) < 7) $errores[] = "Teléfono inválido.";
        if (!$asunto) $errores[] = "Selecciona un asunto.";
        if (!$mensaje || strlen($mensaje) < 10) $errores[] = "Mensaje demasiado corto.";

        if ($errores) {
            echo "<div class='errores'><h2>Corrige los siguientes errores:</h2><ul>";
            foreach ($errores as $e) echo "<li>$e</li>";
            echo "</ul><a href='contacto.html' class='btn-primario'>&larr; Volver al formulario</a></div>";
        } else {
            switch($asunto) {
                case "Presupuesto":
                    $respuesta = "¡Te enviaremos una cotización personalizada a la brevedad!";
                    break;
                case "Soporte Técnico":
                    $respuesta = "Nuestro equipo de soporte te contactará pronto.";
                    break;
                case "Consultoría":
                    $respuesta = "¡Gracias por tu interés en nuestra consultoría!";
                    break;
                default:
                    $respuesta = "Gracias por comunicarte con Soluciones Web.";
            }

            echo "<h2>¡Gracias por contactarnos, $nombre!</h2>";
            echo "<div class='resumen-contacto'>";
            echo "<p><b>Email:</b> $email</p>";
            echo "<p><b>Teléfono:</b> $telefono</p>";
            echo "<p><b>Empresa:</b> $empresa</p>";
            echo "<p><b>Asunto:</b> $asunto</p>";
            echo "<p><b>Mensaje:</b> $mensaje</p>";
            echo "</div>";

            echo "<div class='respuesta-automatica'><strong>$respuesta</strong></div>";

            // Función mail (descomenta para activar en hosting real)
            /*
            $to = "tucorreo@dominio.com";
            $subject = "Nuevo mensaje de $nombre ($asunto)";
            $body = "Nombre: $nombre\nEmail: $email\nTeléfono: $telefono\nEmpresa: $empresa\nAsunto: $asunto\nMensaje:\n$mensaje";
            $headers = "From: $email\r\n";
            mail($to, $subject, $body, $headers);
            echo "<p>Se ha notificado al administrador por correo electrónico.</p>";
            */
        }
        ?>
        <p><a href="index.html" class="btn-primario">Volver al inicio</a></p>
    </section>
</main>
<footer>
    <div class="footer-content">
        <span>&copy; 2025 Soluciones Web</span>
    </div>
</footer>
</body>
</html>
