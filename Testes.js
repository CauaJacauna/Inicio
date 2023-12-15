function cubo(num){
    var cubo = (num * num * num);
    return cubo;
}
document.write(cubo(12));

//Alteração feita pelo GitHub Mobile

document.write("Olá");

//Pequeno código com Função e alert ↓↓

function funcao() { 
     var quantidade = prompt("Digite valor do saque"); 
     alert("O valor digitado é " + quantidade); 
 } 
 funcao();

//Fim da função ↑↑


/*


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Formulário PHP</title>
</head>
<body>
    <form action="processar.php" method="post">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="idade">Idade:</label>
        <input type="number" id="idade" name="idade" required><br>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>
```


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $idade = $_POST["idade"];

    // Exibir os dados coletados
    echo "Nome: $nome<br>";
    echo "Email: $email<br>";
    echo "Idade: $idade anos";
} else {
    // Se o formulário não foi enviado corretamente
    echo "Erro no envio do formulário.";
}
?>
```

*/
