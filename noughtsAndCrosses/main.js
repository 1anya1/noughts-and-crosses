
var won = false;
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
    if(box.innerText != '' || won) return;
    box.innerText = currentPlayer;
    if(currentPlayer === player2.piece){
        currentPlayer = player1.piece
        
    }
    else{
        currentPlayer = player2.piece
    }
 checkBoard();
}
function checkBoard(){
    for(var i=0; i<=2; i++){
        checkWinner(document.getElementById(i + '_0').innerText,
            document.getElementById(i+'_1').innerText,
            document.getElementById(i+'_2').innerText);
        checkWinner(document.getElementById('0_'+i).innerText,
            document.getElementById('1_'+i).innerText,
            document.getElementById('2_'+i).innerText);
        
    }
    checkWinner(document.getElementById('0_0').innerText,
        document.getElementById('1_1').innerText,
        document.getElementById('2_2').innerText);
    checkWinner(document.getElementById('0_2').innerText,
        document.getElementById('1_1').innerText,
        document.getElementById('2_0').innerText);
}
function checkWinner(first, second, third){
    if(first !='' && first == second && first ==third){
        alert(`winner ${first}`);
        won = true;   
        first.wins++
    }
}