/* need to declare variables usinf const
or let

use of functions use of document.getelement body
use of events on click
use either a loop or arathmatic and comparative operator

use github
*/

/*alert ('');

function displayDate() {
    document.getElementById("demo") = Date();
  }*/
/*
let m4 = 'F82 M4';

function bmw(){
    const m3 = 'F80 M3';
    alert(m4 + ' ' + m3);
}
bmw();
alert(m4);
alert(m3);

//loops

const looped = '';

for (let i = 1; i => 10; i++ ){
    looped += 'this is a loop';
}
*/

//event on click and use of getelementbyid

const m2 = document.getElementById('m2');
const showmore = document.getElementById('showmore');

showmore.onclick = function() {
    if(m2.className =='open'){
        m2.className = '';
        showmore.innerHTML = 'SHOW MORE';
    } else {
        m2.className= 'open';
        showmore.innerHTML = 'SHOW LESS';
    }
};


//loop

const bmw = 3;

for (let i = 1; i <= bmw; i++) {
    console.log('BMW sheer driving pleasure.');
}
/*
const models = ['f82 m4', 'f80 m3', 'f87 m2'];

for (models) {
    console.log (`Selected ${models}`);
};
*/