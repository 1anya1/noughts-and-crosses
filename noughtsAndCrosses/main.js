

var player1 = {
    piece: 'X',
    name: ''
}
var player2= {
    piece: 'O',
    name: ''
}
function my() {
    var name = document.getElementById('name').value;
    if(player1.name !== '' && player2.name!==''){
        return;
    } else{
        player1.name==='' ? player1.name=name : player2.name=name;
    }
    document.getElementById('playerName').innerHTML = name;
}
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