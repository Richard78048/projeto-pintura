<?php
		
if (isset($_POST['area_externa_ativa']) && !empty($_POST['area_externa_ativa'])){
    $area_externa = $_POST['area_externa'];
    $estado_externo = $_POST['estado_externo'];
    $rendimento_tinta_externa = 130; //m²
    $custo_galao_tinta_externo = 299.90;
    $capacidade_litros_tinta_externa:18; //litros
    $rendimento_tinta_externa_litro = $rendimento_externo18l/18; //1L = 7,22m²
    $valor_tinta_externa_litro = $custo_galao_tinta_externo/18; // 1L = 16,66 reais
    
    $custo_selador_externo20l = 169.90;
    $rendimento_selador_externo20l = 200; //m²
    $capacidade_litros_selador_externo:20;//litros
    $rendimento_selador_externo_litro = $rendimento_selador_externo/20; //1L = 10m²
    $valor_selador_externo_litro = $custo_selador_externo/20; //1L = 8,49 reais

    if(isset($_POST['alterar_padroes'])&& !empty($_POST['alterar_padroes'])){
        $rendimento_tinta_externa = $_POST['rendimento_tinta_externa']; //m²
        $custo_galao_tinta_externa = $_POST['valor_tinta_externa'];
        $capacidade_litros_tinta_externa:$_POST['capacidade_tinta_externa'];
        $rendimento_tinta_externa_litro = $rendimento_externo18l/$capacidade_litros_tinta_externa; 
        $valor_tinta_externa_litro = $custo_galao18l_externo/$capacidade_litros_tinta_externa;
    
        $custo_selador_externo = $_POST['valor_selador_externo'];
        $rendimento_selador_externo = $_POST['rendimento_selador_externo']; //m²
        $capacidade_litros_selador_externo:$_POST['capacidade_selador_externo'];//litros
        $rendimento_selador_externo_litro = $rendimento_selador_externo/$capacidade_litros_selador_externo; 
        $valor_selador_externo_litro = $custo_selador_externo/$capacidade_litros_selador_externo; 
    }
    
    if($estado_externo === "escuro"){
        $demao_externa = 3;
        $usar_selador_externo = "não";
        }else{
            if($estado_externo === "cru"){
                $demao = 2;
                $usar_selador_externo = "sim";
                $demao_selador_externo = 2;
            }else{
            $demao = 2;
            $usar_selador_externo = "não";
            }
        }
    //---------------------------------------calculo tinta e Selador----------------------------------------//
    if($usar_selador_externo === "sim"){
        $selador_externo_usado = $area_externa*$demao_selador_externo ; //duas demãos de selador
        $selador_externo_usado = $selador_externo_usado/$rendimento_selador_externo20l; //galões usados
        $selador_externo_litros_usados = $selador_externo_usado*$capacidade_litros_selador_externo; // litros gastos
        $custo_selador_externo_usados = $selador_externo_litros_usados*$valor_selador_externo_litro; //a qualidade de litros usadas equivalem a x reais.
        }else{ 
            $custo_selador_externo_usados = 0;
        }
    $area_externa_tinta = $area_externa*$demao; //m² isso so para tinta
    $galao_tinta_externa_usadas = $area_externa_tinta/$rendimento_externo18l; //galões usados
    $tinta_externa_litros_usadas = $galao_tinta_externa_usadas*$capacidade_litros_tinta_externa; //litros gastos
    $custo_tinta_externa_usadas = $galao_tinta_externa_usadas*$valor_tinta_externa_litro; //custo rem reais baseados nos litros gastos
    //---------------------------------------calculo tinta e Selador----------------------------------------//
    $valor_total = $custo_tinta_externa_usadas+$custo_selador_externo_usados;
}
if(isset($_POST['existem_portoes']) && !empty($_POST[''])){
$quantidade_portoes = $_POST['quantidade_portoes']; 
$estado_portoes = $_POST['portao_pintado']; //ta pintado?

}
?>

?>