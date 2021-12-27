document.getElementById('add-user').addEventListener('click', () => {
    document.getElementById('jsModal').classList.remove('hide');
})

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('jsModal').classList.add('hide');
})

document.getElementById('account-container').addEventListener('click', (e) => {
    e.stopPropagation();
})

document.getElementById('jsModal').addEventListener('click', () => {
    document.getElementById('jsModal').classList.add('hide');
})