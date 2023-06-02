<?php

    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $code = $_POST['code'];
    $random = substr(md5(mt_rand()), 0, 7);
    $filePath = "temp/" . $random . ".py";
    $programFile = fopen($filePath, "w");
    fwrite($programFile, $code);
    fclose($programFile);
    $output = shell_exec('"C:\Users\Taha Rasool\AppData\Local\Programs\Python\Python37\python.exe" ' . $filePath . ' 2>&1');
    echo $output;

    $files = glob("temp/*.py");
    foreach ($files as $file) {
        if (is_file($file)) {
            unlink($file);
        }
    }
?>