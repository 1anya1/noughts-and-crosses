
var won = false;

var player = {
    player1:{
        piece: 'X',
        name: '',
        wins: 0

    },
    player2:{
        piece: 'O',
        name: '',
        wins:0
    }  
}

function my() {
    var name = document.getElementById('name').value;
    if(player.player1.name !== '' && player.player2.name!==''){
        return;
    } else{
        player.player1.name==='' ? player.player1.name=name : player.player2.name=name;
    }
    if(player.player2.name==='') {
        document.getElementById('player1').innerHTML = name;
    } else{
        document.getElementById('player2').innerHTML = name;
    }
}
document.getElementById('piece1').innerHTML = `Player 1 : ${player.player1.piece}`;
document.getElementById('piece2').innerHTML = `Player 2 : ${player.player2.piece}`;
// document.getElementById('piece2').innerHTML = player.player2.piece;

document.getElementById('wins2').innerHTML = `wins: ${player.player2.wins}`;
document.getElementById('wins1').innerHTML = `wins: ${player.player1.wins}`;

var currentPlayer = player.player1.piece;

function place(box) {
    if(box.innerText != '' || won) return;
    box.innerText = currentPlayer;
    if(currentPlayer === player.player2.piece){
        currentPlayer = player.player1.piece
        
        
    }
    else{
        currentPlayer = player.player2.piece
        
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
function restartBoard(){
        document.getElementById('0_0').innerHTML='',
        document.getElementById('0_1').innerHTML='',
        document.getElementById('0_2').innerHTML='',

        document.getElementById('1_0').innerHTML='',
        document.getElementById('1_1').innerHTML='',
        document.getElementById('1_2').innerHTML='',

        document.getElementById('2_0').innerHTML='',
        document.getElementById('2_1').innerHTML='',
        document.getElementById('2_2').innerHTML='';
    won= false;
    document.getElementById('winner').innerHTML=''
        
    
}
function checkWinner(first, second, third){
    if(first !='' && first == second && first == third){
        let winner = first

      Object.values(player).map(el=>{
            Object.values(el).map(i =>{
               if( i===winner) {
                document.getElementById('winner').innerHTML=`The winner is ${el.name}`
                el.wins +=1
                console.log(el.wins)
                document.getElementById('wins2').innerHTML = `wins: ${player.player2.wins}`;
                document.getElementById('wins1').innerHTML = `wins: ${player.player1.wins}`;
                won = true;   
               } 
            })
        })
        
       
        
    }  else {
        if ( document.getElementById('0_0').innerHTML!=='' &&
            document.getElementById('0_1').innerHTML!=='' &&
            document.getElementById('0_2').innerHTML!==''&&

            document.getElementById('1_0').innerHTML!=='' &&
            document.getElementById('1_1').innerHTML!=='' &&
            document.getElementById('1_2').innerHTML!=='' &&

            document.getElementById('2_0').innerHTML!=='' &&
            document.getElementById('2_1').innerHTML!=='' &&
            document.getElementById('2_2').innerHTML!=='')
        
        { document.getElementById('winner').innerHTML=`It's a tie`    
        }
    }
    
}
    