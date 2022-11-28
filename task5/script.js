let inpt=document.querySelector('input');
let duplicateField=document.querySelector('#duplicateField');
let button=document.querySelector('button');

inpt.addEventListener('keyup',function(event){
  
    duplicateField.textContent = inpt.value;
    });

    button.addEventListener('click',(event)=>{
        event.preventDefault();
        console.log(inpt.value);
        inpt.value ='';
        duplicateField.textContent='';

    });




