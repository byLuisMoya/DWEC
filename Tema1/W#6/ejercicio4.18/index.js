// WS#6 --> 4.18

let columns = parseInt(prompt("Numero de columnas: "));
let lines = parseInt(prompt("Numero de filas: "));
let high = parseInt(prompt("Pixeles de altura: "));
let width = parseInt(prompt("Pixeles de anchura: "));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');

for (let c = 0; c<lines;c++) {
    document.write(`<tr bgcolor="white" height="${high}">`);

    for (let i = 0; i<columns; i++) {
        document.write(`<td width="${width}">&nbsp;</td>`);
    }
    document.write('</tr>');

}

document.write('</table>');