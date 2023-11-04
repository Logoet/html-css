<?php
class Veiculo
{
    private $codigo;
    private $nome;

    public function __construct($c, $n){
        $this->codigo = $c;
        $this->nome = $n;
    }

    public function inclui() {
        ///Variavel que cria conexão com BD
        $con = new PDO('mysql:host=localhost;port=3306;dbname=aula', 'root', '12345');
        $sql = 'insert into grupo (nome) values (?);';
        $pst = $con->prepare($sql);
        $pst->bindValue(1, 'Teste');
        if ($pst->execute()){
            echo 'Inserido.';
        } else {
            echo 'Deu Ruim.';
        }
    }

    public function lista() {
        $con = new PDO('mysql:host=localhost;port=3306;dbname=aula', 'root', '12345');
        $sql = 'select * from grupo;';
        $pst = $con->prepare($sql);
        if($pst->execute()){
            return $pst->fetchAll(PDO::FETCH_ASSOC);
        }
    }
}
