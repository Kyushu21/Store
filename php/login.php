<?php
session_start(); // Inicia la sesión

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tienda_ropa_db";

// Crear conexión
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar la conexión
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Obtener datos del formulario
$email = mysqli_real_escape_string($conn, $_POST['email']); // Asegurar contra inyección SQL
$password_ingresada = $_POST['password'];

// Buscar el usuario en la base de datos
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);

    // Verificar la contraseña
    echo "Contraseña ingresada: " . $password_ingresada . "<br>";
    echo "Contraseña almacenada: " . $row['password'] . "<br>";

    // Comparamos la contraseña ingresada con la contraseña almacenada en la base de datos
    if (password_verify($password_ingresada, $row['password'])) {
        // Contraseña correcta, iniciar sesión
        $_SESSION['user_id'] = $row['id'];
        echo "Inicio de sesión exitoso";
        // Puedes redirigir al usuario a otra página aquí
    } else {
        echo "Contraseña incorrecta";
    }
} else {
    echo "Usuario no encontrado - Verificar SQL";
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Cerrar conexión
mysqli_close($conn);
?>
