/*
var valor_tinta_madeira = valor_tinta_ferro;
var cobertura_tinta_madeira = cobertura_tinta_ferro;
var valor_tinta_ferro = 55.29; //0.9l https://www.balaroti.com.br/tinta-esmalte-sintetico-09l-acetinado-sempre-branco-121584/p?idsku=121584&gclid=CjwKCAjwgaeYBhBAEiwAvMgp2iHKjtuhFyqiSvcqLpx7GuNXZ85MtZq_Hf_K7G9TDE1GUfBHcsLDfxoCsaYQAvD_BwE
var cobertura_tinta_ferro = 16/demao; //m²
var demao = 3; //reforma de 3 demaos
var selador_madeira = 47.99; // 0.9l https://www.ferramentaskennedy.com.br/100068663/seladora-para-madeira-incolor-900ml-suvinil?utm_source=google&utm_medium=cpc&utm_campaign=google_shop&gclid=CjwKCAjwgaeYBhBAEiwAvMgp2pTm6TIaJbStGAalZd_5nlcuc01YNN6QaqeRblKg38MkiJ0KmKfZ4BoCO_QQAvD_BwE#
var selador_externo = 169.90; // 20L 200m² https://www.leroymerlin.com.br/selador-acrilico-para-paredes-internas-e-externas-20l-luxens_88205754
var cobertura_selador = 133; //m² 18L
var area_externa = document.getElementById("area_externa").value;//m²
var valor_tinta_externa = 299.90; // vedacity 18L https://www.leroymerlin.com.br/vedapren-parede-branco-18kg-vedacit_90944833?store_code=39&gclid=CjwKCAjwgaeYBhBAEiwAvMgp2lD6WNLN_m_oBlmISwS_FCSXjqGd47T2OsFD0HU7Z_CXc02xJPb6ShoChvkQAvD_BwE
*/
//--------------------------funções de esconder----------------------------------------------//
function areaexterna() {
    var checkBox = document.getElementById("area_externa_ativa");
    var areaexternacontainer = document.getElementById("area_externa");
    var areaexternainput = document.getElementById("input_area_externa");
    var areaexternainputradio = document.getElementById("area_externa_radio");

        if (checkBox.checked == true){
            areaexternacontainer.style.display = "block";
            areaexternainput.required = true;
            areaexternainputradio.required = true;
            } else {
                areaexternacontainer.style.display = "none";
                areaexternainput.required = false;
                areaexternainputradio.required = false;
            }	
}
function portoes() {
    var checkBoxportoes = document.getElementById("existem_portoes");
    var estadoportoescontainer = document.getElementById("estado_portoes");
    var portoesinput = document.getElementById("quantidade_portoes");
    var portoesinputradio = document.getElementById("portao_pintado");

        if (checkBoxportoes.checked == true){
            estadoportoescontainer.style.display = "block";
            portoesinput.required = true;
            portoesinputradio.required = true;
            } else {
                estadoportoescontainer.style.display = "none";
                portoesinput.required = false;
                portoesinputradio.required = false;
            }	
}
function portas() {
    var checkBoxportas = document.getElementById("existem_portas");
    var estadoportascontainer = document.getElementById("estado_portas");
    var portasinput = document.getElementById("quantidade_portas");
    var portasinputradio = document.getElementById("porta_pintada");

        if (checkBoxportas.checked == true){
            estadoportascontainer.style.display = "block";
            portasinput.required = true;
            portasinputradio.required = true;
            } else {
                estadoportascontainer.style.display = "none";
                portasinput.required = false;
                portasinputradio.required = false;
            }	
}
function rodapes() {
    var checkBoxrodape = document.getElementById("existem_rodapes");
    var estadorodapecontainer = document.getElementById("estado_rodape");
    var rodapeinput = document.getElementById("quantidade_rodapes");
    var rodapeinputradio = document.getElementById("rodape_pintada");

        if (checkBoxrodape.checked == true){
            estadorodapecontainer.style.display = "block";
            rodapeinput.required = true;
            rodapeinputradio.required = true;
            } else {
                estadorodapecontainer.style.display = "none";
                rodapeinput.required = false;
                rodapeinputradio.required = false;
            }	
}