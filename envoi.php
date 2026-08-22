<?php
/* Miss Voli — traitement du formulaire de contact */
mb_internal_encoding('UTF-8');

function clean_header($v) {
    return trim(str_replace(["\r", "\n"], '', (string) $v));
}
function field($name) {
    return isset($_POST[$name]) ? trim((string) $_POST[$name]) : '';
}
function redirect($status) {
    header('Location: contact.html?envoi=' . $status);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect('erreur');
}

/* Honeypot : rejet silencieux si rempli */
if (field('website') !== '') {
    redirect('ok');
}

$prenom = field('prenom');
$email = field('email');
$telephone = field('telephone');
$message = field('message');
$consentement = field('consentement');
$intention = field('intention');
$pour = field('pour');
$groupe = field('groupe');
$objectif = field('objectif');
$classe = field('classe');
$societe = field('societe');
$effectif = field('effectif');

/* Validation stricte côté serveur */
$errors = [];
if ($prenom === '' || mb_strlen($prenom) > 100) $errors[] = 'prenom';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if ($consentement === '') $errors[] = 'consentement';

if (!empty($errors)) {
    redirect('erreur');
}

$labelsIntention = ['essai' => "Réserver une séance d'essai", 'question' => 'Poser une question'];
$labelsPour = [
    'groupe' => 'Un groupe de conversation',
    'particuliers' => 'Des cours particuliers',
    'enfant' => 'Mon enfant, au collège ou au lycée',
    'entreprise' => 'Mon entreprise',
    'indecis' => 'Je ne sais pas encore',
];

$sujetIntention = $labelsIntention[$intention] ?? 'Demande de contact';
$sujetPour = $labelsPour[$pour] ?? '';
$subject = '[missvoli.com] ' . $sujetIntention . ($sujetPour ? ' — ' . $sujetPour : '');

$lines = [];
$lines[] = 'Nouvelle demande depuis missvoli.com';
$lines[] = '';
$lines[] = 'Prénom : ' . $prenom;
$lines[] = 'E-mail : ' . $email;
$lines[] = 'Téléphone : ' . ($telephone !== '' ? $telephone : '(non renseigné)');
$lines[] = 'Je souhaite : ' . $sujetIntention;
$lines[] = "C'est pour : " . $sujetPour;
if ($groupe !== '') $lines[] = 'Groupe : ' . $groupe;
if ($objectif !== '') $lines[] = 'Objectif : ' . $objectif;
if ($classe !== '') $lines[] = 'Classe : ' . $classe;
if ($societe !== '') $lines[] = 'Société : ' . $societe;
if ($effectif !== '') $lines[] = 'Effectif à former : ' . $effectif;
$lines[] = '';
$lines[] = 'Message :';
$lines[] = ($message !== '' ? $message : '(aucun message)');

$body = implode("\n", $lines);

$headers = [];
$headers[] = 'From: Miss Voli <contact@missvoli.com>';
$headers[] = 'Reply-To: ' . clean_header($email);
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$sent = mail(
    'hello@missvoli.com',
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers)
);

redirect($sent ? 'ok' : 'erreur');
