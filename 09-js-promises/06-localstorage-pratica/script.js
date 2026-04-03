const toggle = document.getElementById("theme-toggle");

// O document.body já é uma referência do <body> sem precisar usar ID.
const body = document.body;

const savedTheme = localStorage.getItem('theme')

if (savedTheme === 'dark') {
    body.classList.add('dark')
    toggle.checked = true
}
// O 'click' é o evento que ocorre quando o usuário clica no elemento. 
toggle.addEventListener('click', () => {

    if (toggle.checked) {
        body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        body.classList.remove('dark')
        localStorage.removeItem('theme')

    }

})


