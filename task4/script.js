const link1 = document.querySelector ('#link');

link1.addEventListener ('click',function(){
    this.textContent=prompt('измените название ссылки');
});

