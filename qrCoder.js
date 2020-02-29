let clicked = true;
function generateQR() {
  div = document.getElementById('contain');
  if(clicked == false){
    tab = document.getElementById('table');
    div.removeChild(tab)
  }
  var tab = document.createElement('table');
  clicked = false;
  for(i=0; i<100; i++) {
    var tableRow = document.createElement('tr');
    for(j=0; j<100; j++) {
      var tableCollumn = document.createElement('th');
      let random = Math.random() * 10;
      random > 5 ? tableCollumn.style.backgroundColor = 'black' : tableCollumn.style.backgroundColor = 'white';
      tableRow.appendChild(tableCollumn);
    }
    tab.appendChild(tableRow);
  }
  tab.setAttribute('id', 'table');
  div.appendChild(tab)
}
