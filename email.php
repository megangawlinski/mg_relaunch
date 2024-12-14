<?
    require 'class.phpmailer.php';

    $mail = new PHPMailer;

    $mail->IsSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.strato.de';  // Specify main and backup server
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'info@megan-gawlinski.de';                            // SMTP username
    $mail->Password = 'ildms1403';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

    $mail->From = 'kontakt@megan-gawlinski.de';
    $mail->FromName = 'Kontaktformular';
    $mail->AddAddress('info@megan-gawlinski.de');  // Add a recipient
    $mail->AddReplyTo($_POST['email']);

    $mail->WordWrap = 50;                                 // Set word wrap to 50 characters
    $mail->IsHTML(true);                                  // Set email format to HTML

    $mail->Subject = '[Kontakt] Anfrage von ' . $_POST['name'] . ' (' . $_POST['email'] . ')';
    $mail->Body    = $_POST['message'];
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if(!$mail->Send())
    {
       echo 'failed';
    }
    else
    {
       echo 'sent';
    }

?>
