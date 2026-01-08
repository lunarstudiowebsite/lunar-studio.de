<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit;
}

// Spamschutz (Honeypot)
if (!empty($_POST["website"])) {
    exit;
}

// Eingaben sichern
$name = strip_tags(trim($_POST["name"]));
$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$nachricht = trim($_POST["nachricht"]);

if (empty($name) || empty($email) || empty($nachricht)) {
    header("Location: kontakt.html?status=error");
    exit;
}

// >>> HIER DEINE E-MAIL-ADRESSE EINTRAGEN <<<
$empfaenger = "info@deinedomain.de";

$betreff = "Neue Kontaktanfrage – LUNAR Studio";

$inhalt = "Name: $name\n";
$inhalt .= "E-Mail: $email\n\n";
$inhalt .= "Nachricht:\n$nachricht\n";

$header = "From: $name <$email>";

if (mail($empfaenger, $betreff, $inhalt, $header)) {
    header("Location: kontakt.html?status=success");
} else {
    header("Location: kontakt.html?status=error");
}
