<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tienda_ropa_db";
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Verificar la conexión
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// Obtener datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$user = $_POST['user'];
$plain_password = $_POST['password'];

// Insertar datos en la base de datos
$hashed_password = password_hash($plain_password, PASSWORD_BCRYPT);
$sql = "INSERT INTO users (name, email, user, password) VALUES ('$name', '$email', '$user', '$hashed_password')";

if (mysqli_query($conn, $sql)) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Cerrar conexión
mysqli_close($conn);
?>
