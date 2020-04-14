

var player1 = {
    piece: 'X',
    name: '',
    wins: 0
}
var player2= {
    piece: 'O',
    name: '',
    wins:0
}
function my() {
    var name = document.getElementById('name').value;
    if(player1.name !== '' && player2.name!==''){
        return;
    } else{
        player1.name==='' ? player1.name=name : player2.name=name;
    }
    if(player2.name==='') {
        document.getElementById('player1').innerHTML = name;
    } else{
        document.getElementById('player2').innerHTML = name;
    }
}
document.getElementById('piece1').innerHTML = player1.piece;

document.getElementById('piece2').innerHTML = player2.piece;


var currentPlayer = player1.piece;

function place(box) {
    if(box.innerText != '') return;
    box.innerText = currentPlayer;
    if(currentPlayer === player2.piece){
        currentPlayer = player1.piece
    }
    else{
        currentPlayer = player2.piece
    }
}