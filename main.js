var boton = document.querySelector('#Ingresar');
boton.addEventListener('click', Ingresar);

var resultado = document.querySelector('#resultado');

function Ingresar(){
    let HoraEntrda = Number(document.querySelector('#HoraSalida').value);
    let MinutosEntrada = Number(document.querySelector('#MinutosEntrada').value);
    let SegundosEntrada = Number(document.querySelector('#SegundosEntrada').value);
    let HoraSalida = Number(document.querySelector('#HoraSalida').value);
    let MinutosSalida = Number(document.querySelector('#MinutosSalida').value);
    let SegundosSalida = Number(document.querySelector('#SegundosSalida').value);

    let TiempoEntrada = new Date();
    let TiempoSalida = new Date();
    let TiempoTrabajo = new Date();

    TiempoEntrada.setHours(HoraEntrda, MinutosEntrada, SegundosEntrada);
    TiempoSalida.setHours(HoraSalida, MinutosSalida, SegundosSalida);
    
    TiempoTrabajo.setHours( TiempoEntrada.getHours() - TiempoSalida.getHours() , TiempoEntrada.getMinutes() - TiempoSalida.getMinutes(), TiempoEntrada.getSeconds()  - TiempoSalida.getSeconds());

    resultado.innerHTML = "El tiempo trabajado es: " + (TiempoTrabajo.getHours() ? TiempoTrabajo.getHours() + (TiempoTrabajo.getHours() > 1 ? " horas" : " hora") : "") + (TiempoTrabajo.getMinutes() ? ", " + TiempoTrabajo.getMinutes() + (TiempoTrabajo.getMinutes() > 1 ? " minutos" : " minuto") : "") + (TiempoTrabajo.getSeconds() ? (TiempoTrabajo.getHours() || TiempoTrabajo.getMinutes() ? " y " : "") + TiempoTrabajo.getSeconds() + (TiempoTrabajo.getSeconds() > 1 ? " segundos" : " segundo") : "");

}

