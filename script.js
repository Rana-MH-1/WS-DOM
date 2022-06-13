//access to an element
var myInput = document.getElementsByClassName('myInput')[0]
console.log(myInput)

var container = document.querySelector('.container')
var myBtn = document.querySelector('.myBtn')
//console.log(myBtn)

//Add event Listener
myBtn.addEventListener('click',function(){
  //create elements
var row = document.createElement('div')

//methode 1
row.className = 'row'
//methode 2
//row.setAttribute('class','row')
//console.log(row)

var col = document.createElement('div');
col.className = 'col'

var text = document.createElement('h3')
//console.log(myInput.value);
text.innerHTML = myInput.value
//console.log(text)
var btnDelete = document.createElement('button')
btnDelete.className = "btn btn-danger";
btnDelete.innerHTML = 'Delete'
//console.log(btnDelete);

var btnDone = document.createElement('button')
btnDone.className = "btn btn-secondary";
btnDone.innerHTML = 'Done'
//console.log(btnDone);

var line = document.createElement('hr')

//append el to conatiner

col.appendChild(text)
col.appendChild(btnDelete)
col.appendChild(btnDone)
col.appendChild(line)

//console.log(col);

row.appendChild(col)
//console.log(row);

container.appendChild(row)
console.log(container);

myInput.value = ''

//Delete to do 
btnDelete.addEventListener('click',function(){
    row.remove()
    //methode2
    //row.hidden = true
})

btnDone.addEventListener('click', function(){
    text.classList.toggle('text')  
    if(btnDone.innerHTML === 'Done'){
      btnDone.innerHTML = 'UnDone'
    }
    else{
      btnDone.innerHTML = 'Done'
    }
})

//change css
var titre = document.getElementById('titre')
titre.style.color = 'blue'


})

