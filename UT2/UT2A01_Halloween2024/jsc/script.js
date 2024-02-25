function seleccionarAuriculares(opcion) {
    if (opcion === 'si') {
        document.getElementById('auricularesSiBtn').style.backgroundColor = 'green';
        document.getElementById('auricularesNoBtn').style.backgroundColor = '';
    } else if (opcion === 'no') {
        document.getElementById('auricularesSiBtn').style.backgroundColor = '';
        document.getElementById('auricularesNoBtn').style.backgroundColor = 'red';
    }
}
function updateProgressBar() {
    var numPersonas = parseInt(document.getElementById('numPersonas').value);
    var progressText = document.getElementById('progress-text');

    progressText.textContent = numPersonas;
}