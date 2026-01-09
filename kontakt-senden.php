<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Honeypot-Spam-Schutz
    if (!empty($_POST["website"])) {
        exit;
    }

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $nachricht = trim($_POST["nachricht"]);

    if (empty($name) || empty($email) || empty($nachricht)) {
        echo "Bitte alle Felder ausfüllen.";
        exit;
    }

    $empfaenger = "kontakt@lunar-studio.de"; // <-- HIER ÄNDERN
    $betreff = "Neue Kontaktanfrage – LUNAR STUDIO";

    $inhalt  = "Name: $name\n";
    $inhalt .= "E-Mail: $email\n\n";
    $inhalt .= "Nachricht:\n$nachricht";

    $header  = "From: LUNAR Studio <no-reply@deinedomain.de>\r\n";
    $header .= "Reply-To: $email\r\n";
    $header .= "Content-Type: text/plain; charset=UTF-8";

    if (mail($empfaenger, $betreff, $inhalt, $header)) {
        header("Location: danke.html");
        exit;
    } else {
        echo "Beim Senden der Nachricht ist ein Fehler aufgetreten.";
    }
}
?>
