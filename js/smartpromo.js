

$(document).ready(function(){
    var datos = getSmartPromo(); //cargamos la promoción

    //Comprobamos si el objeto contiene valor para levantar el popup
    if(!$.isEmptyObject(datos)){
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        $(".info-popup").html(datos['content']);
    }
 
    //cerramos el popup al pulsar sobre el aspa
    $('#close').on('click', function(){
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });

    /* Añadimos estilos del POPUP*/
    $("#popup").css({
        "left": "0",
        "position": "absolute",
        "top": "0",
        "width": "100%",
        "z-index": "1001",
    });

    
    $(".content-popup").css({
        "margin" : "0px auto",
        "margin-top" : "120px",
        "position" : "relative",
        "padding" : "10px",
        "width" : "500px",
        "min-height" : "250px",
        "border-radius" : "4px",
        "background-color" : "#FFFFFF",
        "box-shadow": "0 2px 5px #666666",
    });
    
    $(".content-popup h2").css({
        "color" : "#48484B",
        "border-bottom" : "1px solid #48484B",
        "margin-top" : "0",
        "padding-bottom" : "4px",
    });
    
    $(".popup-overlay").css({
        "left" : "0",
        "position" : "absolute",
        "top" : "0",
        "width" : "100%",
        "z-index" : "999",
        "display" : "none",
        "background-color" : "#777777",
        "cursor" : "pointer",
        "opacity" : "0.7",
    });
    
    $(".close").css({
        "position" : "absolute",
        "right": "15px",
    });

});

//función que nos devuelve el contenido del popup
function getSmartPromo(){
    let promos = [
    {
    slug:"promo-1",
    content:'<div style="text-align:center"><h1>Promoción1</h1><p>Por ser tú te ofrecemos un descuento genial</p><h4>Código: PROMO1</h4></div>'},
    {
    slug:"promo-2",
    content:'<div style="text-align:center"><h1>Promoción2</h1><p>La promoción 2 ha llegado</p><h4>Código: PROMO2</h4></div>'},
    {
    slug:"promo-3",
    content:'<div style="text-align:center"><h1>Promoción 3</h1><p>1, 2, 3... Esta es la tuya</p><h4>Código: PROMO3</h4></div>'}
    ];
    var random = Math.floor(Math.random() * 8);
    if(random < 4){
        return promos[random];
    }else{
        return {};
    }
}