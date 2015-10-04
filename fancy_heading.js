if (typeof jQuery !== 'undefined') {
  $.fn.makeFancy = function (){
	makeFancy(this[0]);
  }
};

function makeFancy(elem){
	var table = document.createElement('table');
	table.className = 'outertable';
	var tableRow = document.createElement('tr');
	var t2 =  document.createElement('td');
	t2.innerHTML = elem.innerHTML;
	addFancySide(tableRow);
	tableRow.appendChild(t2);
	addFancySide(tableRow);
	table.appendChild(tableRow);
	elem.innerHTML = "";
	elem.appendChild(table);
}

function addFancySide(tableRow){
	var t1 = document.createElement('td');
	var te1 = document.createElement('div');
	t1.className = 'cell';
	te1.className = 'decordiv';
	t1.appendChild(te1);
	tableRow.appendChild(t1);
}