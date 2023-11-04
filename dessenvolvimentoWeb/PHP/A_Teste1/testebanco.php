<?php
require_once './Veiculo.php';
///Desconsiderar os parametros utilizados
$veiculo = new Veiculo(0,'');
$veiculo->inclui();
var_dump($veiculo->lista());