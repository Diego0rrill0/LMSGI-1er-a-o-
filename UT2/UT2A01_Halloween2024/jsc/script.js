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
document.addEventListener('DOMContentLoaded', function() {
    var inputsNumero = document.querySelectorAll('.input-numero');
    inputsNumero.forEach(function(input) {
        input.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
        });
    });
});