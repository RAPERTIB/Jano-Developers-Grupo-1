function GenerarVentaModal(mensaje){
    document.querySelector('#mjeAsignado').innerHTML=mensaje;
    var elem= document.querySelector('#mensajeModal');
    var instance = M.Modal.getInstance(elem);
    instance.open();
}