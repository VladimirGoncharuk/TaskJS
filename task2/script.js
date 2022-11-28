const consoleLog=document.querySelector('#consoleLog');

consoleLog.addEventListener('click',()=> {
    alert('Служит для вывода информации в консоль')
});
document.querySelector('#alert').addEventListener('click',()=>{
    alert('Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK')
});

document.querySelector('#prompt').addEventListener('click',()=>{
    prompt('Отображает диалоговое окно с запросом на ввод текста','любая информация')
}); 


