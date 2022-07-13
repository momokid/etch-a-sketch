const container = document.getElementById("container");
let rows = document.getElementsByClassName('gridRow')

//create row
function createRow(rowCount) {
  for (let i = 0; i < rowCount; i++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  }
}


function createColumn(colCount){
    for(let i=0; i<rows.length; i++){
        for(let j=0;j<colCount; j++){
            let newCell = document.createElement('div')
            rows[j].appendChild(newCell).className='cell'
        }
    }
}

createRow(5)
createColumn(5)