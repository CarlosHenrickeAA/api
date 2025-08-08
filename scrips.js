console.log("ola")
const x = document.getElementById("demo")
function getLocation(){
    try{
        navigator.geolocation.getCurrentPosition(showPosition, showError);

    }catch(err){
        x.innerHTML = err;
        }
}
function showPosition(position) {
    x.innerHTML = "Latitude:" + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Permissão negada pelo usuário.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Informações de localização indisponíveis.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "Tempo para obter localização esgotado.";
            break;
        default:
            x.innerHTML = "Ocorreu um erro desconhecido.";
            break;
    }
}