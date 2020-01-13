$( () => {
    //Global Variables
    let num1=0;
    let num2=0;
    let operator='';
    let total=0;
    
//    $('.button2').on('click', (event)=> {
//         ($('#total').append($(event.currentTarget).val()))
     
//    });
//    $('.key--operator').on('click',(event)=> {
//      $('#total').append($(event.currentTarget).val())
//     return operator
//    })
//    $('#clear').on('click', (event)=>{
//        return $('#total').empty()
//    })
//    $('#calculate').on('click', (event)=> {
//     if (operator === '+') {
//         result = n1 + n2
//       } else if (operator === '-') {
//         result = n1 - n2
//       } else if (operator === '*') {
//         result = n1 * n2
//       } else if (operator === '/') {
//         result = n1 / n2
//       }
//       return $('#total').append(result)
    
//    })
function handleNumber(num) {
    if (num1 === 0) {        
        num1 = num;    
    } else {        
        num2 = num;    
    }    
    displayButton(num);
}

function handleOperator(oper) {
    if (operator === '') {        
        operator = oper;  
        handleTotal();  
    } else {       
         handleTotal();        
         operator = oper;    
        } 
       
}
function handleTotal() {    
    switch (operator) {        
        case '+':            
        total = +num1 + +num2;            
        displayButton(num2);            
        break;  
        case '-':            
        total = +num1 - +num2;            
        displayButton(num2);            
        break;
        case '/':            
        total = +num1 / +num2;            
        displayButton(num2);            
        break;
        case 'X':            
        total = +num1 * +num2;            
        displayButton(num2);            
        break;
        case 'CLEAR':   
        total=0;                    
        displayButton(total);            
        break;
        case '=':                       
        displayButton( total);            
        break;
    }
    updateVariables();
}

function displayButton(btn) {
    $('#total').text(btn);
}
function updateVariables() {
    num1 = total;
    num2 = '';
}

$(document).ready(function() {    
    $('button').on('click', function(e) {       
         let btn = e.target.innerHTML;        
         if (btn >= '0' && btn <= '9') {            
            //  console.log('number');    
            handleNumber(btn)    
            } else {            
                // console.log('operator');        
            }     handleOperator(btn); 
        });
    });

});
