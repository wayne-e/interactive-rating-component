const btnSubmit = document.querySelector('#send')
const divStars = document.querySelector('.stars')
const divThank = document.querySelector('.thanku')
const selectedRate = document.querySelector('.selected-rate')

btnSubmit.addEventListener('click', function (event) {
    let checked = document.querySelector('input[name="points"]:checked')
    if (checked) {
        divStars.classList.add('d-none')
        divThank.classList.remove('d-none')
        console.log(checked.getAttribute('point'))
        selectedRate.innerText = checked.getAttribute('point')
    }
})