document.addEventListener('DOMContentLoaded', function () {
    var table = document.getElementById('dataTable');
    var newRow = table.insertRow();
    newRow.insertCell(0).textContent = 'New Data 1';
    newRow.insertCell(1).textContent = 'New Data 2';
    newRow.insertCell(2).textContent = 'New Data 3';
    newRow.insertCell(3).textContent = 'New Data 4';
});
