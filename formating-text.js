

let block = document.getElementsById('text')
document.getElementById('formatting').addEventListener('click', () => {
    block.textContent = block.textContent.formatting(/\B'|'\B/g, '"');
});


// let block = confirm("Форматировать текст?")
// block = getElementById('text')
// block.textContent = block.textContent(/\B'|'\B/g, '"');
