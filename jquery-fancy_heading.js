
$.fn.makeFancy = function (){

var div = this;

var table = $('<table class="outertable"></table>');
var tableRow = $('<tr></tr>');
var t1 = $('<td class="cell"><div class="decordiv">&nbsp;</div></td>');
var t2 = $('<td></td>');

t2.append(div.clone());
var t3 = $('<td class="cell"><div class="decordiv">&nbsp;</div></td>');

tableRow.append(t1);
tableRow.append(t2);
tableRow.append(t3);

table.append(tableRow);

div.replaceWith(table);

};
