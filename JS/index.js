const btnMode = document.getElementById('btn-mode')
initMode()
btnMode.addEventListener('click', () => {
   checkMode()
})

function initMode() {
    const body = document.querySelector('body')
    const status = localStorage.getItem('status-mode');
    if (status === 'Dark') {
        btnMode.textContent = 'Light'
        body.classList = 'dark-mode'
    } else {
        btnMode.textContent = 'Dark'
        body.classList = 'light-mode'
    }
}

function checkMode() {
    const body = document.querySelector('body')
    const status = localStorage.getItem('status-mode')
    if (status === 'Dark'){
        btnMode.textContent = 'Dark'
        body.classList = 'light-mode'
        localStorage.setItem('status-mode', 'Light')
    } else {
        btnMode.textContent = 'Light'
        body.classList = 'dark-mode'
        localStorage.setItem('status-mode', 'Dark')
    }
}

