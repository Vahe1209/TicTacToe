function runTicTacToe(size) {
  let myTableDiv = document.getElementById("myDynamicTable");
  let table = document.createElement("TABLE");
  table.border = "1";
  let tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);
  let bool = true;
  let cell = [];
  let horizonLine = [];
  let vertLine = [];
  let diagLine = [];
  let secondDiagLine = [];
  let winner;

  for (let i = 0; i < size; i++) {
    let tr = document.createElement("TR");
    tableBody.appendChild(tr);
    for (let j = 0; j < size; j++) {
      let td = document.createElement("TD");
      td.width = "75";
      cell.push(td);
      td.addEventListener("click", function () {
        if (bool && td.innerHTML === "") {
          td.appendChild(document.createTextNode("X"));
          bool = !bool;
        } else if (!bool && td.innerHTML === "") {
          td.appendChild(document.createTextNode("O"));
          bool = !bool;
        }
      });
      tr.appendChild(td);
    }
  }
  for (let m = 0; m < cell.length; m += size) {
    horizonLine.push(cell.slice(m, m + size));
  }
  for (let k = 0; k < size; k++) {
    vertLine.push([cell[k], cell[k + size], cell[k + size * 2]]);
  }
  for (let i = 0; i < horizonLine.length; i++) {
    diagLine.push(horizonLine[i][i]);
    secondDiagLine.push(horizonLine[i][horizonLine.length - i - 1]);
  }
  myTableDiv.appendChild(table);
}

runTicTacToe(3);
