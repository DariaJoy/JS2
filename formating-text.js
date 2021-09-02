

let block = document.getElementsByClassName('text');
document.getElementsByClassName('formating').addEventListener('click', () => {
    block.textContent = block.textContent.replace(/\B'|'\B/g, '"');
});


// let block = confirm("Форматировать текст?")
// block = getElementById('text')
// block.textContent = block.textContent(/\B'|'\B/g, '"');
