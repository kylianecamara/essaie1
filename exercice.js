var id = 0;
function ajoutChamp(){
    id++;
    var row = document.createElement('div');
    row.setAttribute('class','row');
    row.setAttribute('id',id);
    row.innerHTML = `<input type="text" class="champ">
    <button type="button" class="btn sup" onclick="supprimerChamp(${id})">X</button>`;

    var div_input = document.getElementById('input');
    div_input.appendChild(row);

}

function supprimerChamp(id){
    rowSupp = document.getElementById(id);
    rowSupp.style.opacity = '0.4';
    setTimeout(`rowSupp.remove()`,500);

}