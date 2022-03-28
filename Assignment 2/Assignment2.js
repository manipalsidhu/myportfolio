var numberCols = 15;
var numberRows = 15;

window.addEventListener('load', drawTable, false);

function getInput() {
    numberCols = document.getElementById("numCol").value;
    numberRows = document.getElementById("numRow").value;
    drawTable();
}


function drawTable() {

    var TableHead = '<table border = "2">\n';
    var TableBody = "";

    for (var r = 1; r <= numberRows; r++) {

        TableBody = TableBody + '<tr>';
        for (var c = 1; c <= numberCols; c++) {
            TableBody = TableBody + '<td>';
            TableBody = TableBody + r + ',' + c;
            TableBody = TableBody + '</td>';
        }
        TableBody = TableBody + '</tr>\n';
    }
    var TableFooter = '</table>';

    document.getElementById('output').innerHTML = TableHead + TableBody + TableFooter;   
  

}
