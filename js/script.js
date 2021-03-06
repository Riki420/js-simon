

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                  ESERCIZIO JS-SIMON                                  //
//                                                                                      //
//--------------------------------------------------------------------------------------//



// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano    │
// │ essere tutti                                                                 │
// │ diversi)                                                                     │
// │ Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus:    │
// │ visualizzare il                                                              │
// │ timer)                                                                       │
// │ Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri   │
// │ che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i    │
// │ numeri da un                                                                 │
// │ form)                                                                        │
// │ Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert      │
// │ quanti e quali dei numeri da indovinare sono stati individuati. (Bonus:      │
// │ stampare in pagina il risultato, in alternativa                              │
// │ all'alert.)                                                                  │
// └──────────────────────────────────────────────────────────────────────────────┘



//* 1 Genero 5 numeri casuali e li mostro con un alert
//* 2 Quando viene chiuso questo alert, parte il timer di 30 secondi
//* 3 Dopo 30 secondi, creo un prompt per far inserire i numeri all'utente
//* 4 Stabilisco se i numeri dell'utente coincidono con quelli iniziali


//genero i numeri del computer
var comNum = [];
var listUser = [];
var num = 5;
var seconds = 1; //!da cambiare a seconda dei secondi voluti
var countElement = document.getElementById('count');
var resultElement = document.getElementById('result');
var counter = 0;
var listDupli = [];

while(comNum.length < num){
   var randNum = getRandomNumber(1,100);
   comNum.push(randNum); 

}

alert('Ricorda questi numeri: ' + comNum);
console.log(comNum);



//creare un timer di 30 secondi con setTimeout
seconds *= 1000;
setTimeout(function(){
    //chiedo i numeri all'utente tramite la funzione getUserNumber
    while (listUser.length < num) {     
        var userNum = getUserNumber(1,100);
        listUser.push(userNum);

    }   
    console.log(listUser);
    
    //verifico se i numeri sono uguali e quanti sono
      for (var i = 0; i < 5; i++) {
        var numListItem = comNum[i];
    
        for (var b = 0; b < 5; b++) {
    
            var check = listUser.includes(numListItem, b);
            var b = 0;
    
            do {
                var check = listUser.includes(numListItem, b);
    
                if (check && listDupli.includes(numListItem) == false) {
                    listDupli.push(numListItem);
                    counter++;
                }
                b++;
            } while (b < 5);
        }
      }
    

      //Stampa su pagina
      if (counter == 5) {
        resultElement.innerHTML = 'Hai vinto, hai indovinato tutti i numeri, ecco i numeri del COM: ' + comNum + '.<br> Ecco invece i tuoi: ' + listUser
        
    } else if (counter == 0) {
        resultElement.innerHTML = 'Hai perso, non hai indovinato nemmeno un numero, ecco i numeri del COM: ' + comNum + '.<br> Ecco invece i tuoi: ' + listUser
    } else {
        resultElement.innerHTML = 'Non hai ne vinto ne perso, hai semplicemente indovinato ' + counter + ' numeri: ' + listDupli + '.<br> La lista completa dei numeri del COM era questa: ' + comNum;
    }
    
}, seconds);







//--------------------------------------------------------------------------------------//
//                                DICHIARAZIONI FUNZIONI                                //
//--------------------------------------------------------------------------------------//


//funzione numeri random COM
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  //funzione per replicare un .includes()
function isInArray(needle, arr){
    var found = false;
    var i = 0;
    while(!found && i < arr.length){
      if(needle === arr[i]){
        found = true;
      }
      i++;
    }
    return found;
  }


  //funzione per chiedere i numeri all'utetnte
  function getUserNumber(min,max){
    var number;
    do{
      number = parseInt(prompt('Inserisci un numero'));
    } while(!number || isNaN(number) || number < min || number > max);
    return parseInt(number);   
  }

  