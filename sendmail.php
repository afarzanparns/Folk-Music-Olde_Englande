
if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {
if(
    !empty($_POST['name'])
 && !empty($_POST['email'])
 && !empty($_POST['message'])
){
   $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
$message = $_POST['message'];


$to = 'prestonnewhorizons@gmail.com';
$subject = 'fresh contact form submission';
$body = 'Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}';
$headers = 'From: {$email}';


if (mail($to, $subject, $body, $headers)) {
echo 'mesg sent sccssfll';
} else {
echo 'failed to send that';
}
}
}
