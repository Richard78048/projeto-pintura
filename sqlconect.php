<?php
$host = "localhost";
$senha = "";
$table = "orcamentos";
$conect_database = "";

try {
$conect_database -> new pdo($host,$senha,$table);
}catch{
    echo "Erro, Não conectou ao Banco de daods!"; 
}
?>