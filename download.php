<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # FIX: Replace this email with recipient email
        $mail_to = "zhirayr.harutyunyan93@gmail.com";
        
        # Sender Data
        $subject = trim($_POST["subject"]);
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $phone = trim($_POST["phone"]);
       
        
        if ( empty($name)) {
            # Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Заполните форму и повторите попытку.";
            exit;
        }
        
        # Mail Content
        $content = "subject: $subject\n";
        $content = "Имя: $name\n";
        $content .= "Телефон: $phone\n";
        
        # email headers.
        $headers = "From: $name <$email>";

        # Send the email.
        $success = mail($mail_to, $subject, $content, $headers);
        if ($success) {
                ?>
            <script>
            var link = document.createElement('a'); 
            link.href = 'dlText.txt'; 
            link.download = 'dlText.txt'; 
            link.dispatchEvent(new MouseEvent('click'));
            </script>
            <?php
            # Set a 200 (okay) response code.
            http_response_code(8000);
            echo "<div class='alert'>
                
                <div class='form-coll_title'>
                             <h3>СПАСИБО! СЕЙЧАС НАЧНЕТСЯ СКАЧИВАНИЕ ФАЙЛА<br><br> Если оно не началось автоматически, <a download href='dlText.txt'>скачайте каталог здесь</a></h3> 
                            
                </div>
            </div>";
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong, we couldn't send your message.";
        }

    } else {
        
        # Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";

    }

?>
