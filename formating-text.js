

let block = document.getElementsById('text')
document.getElementById('replace').addEventListener('click', () => {
    block.textContent = block.textContent.replace(/\B'|'\B/g, '"');
});


// let block = confirm("Форматировать текст?")
// block = getElementById('text')
// block.textContent = block.textContent(/\B'|'\B/g, '"');
