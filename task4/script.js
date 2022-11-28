const link1 = document.querySelector ('a');

link1.addEventListener ('click',function(){
    this.textContent=prompt('измините название ссылки');
});

