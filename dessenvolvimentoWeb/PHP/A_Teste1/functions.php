<?php
///Int no final da função faz com que ele tente converter o retorno
///Caso não consiga ele tratará ocmo um erro.
function f1(){
    echo 'função 1 <br>';
}
function f2(float $a, float $b) :int {
    $s = $a + $b;
    return $s;
}
f1();
echo '<br>';
echo 'Soma: ' . f2(32, 58);
echo '<br>';

var_dump(f2(32, 58.5));
echo '<br>';
///Require PHP
