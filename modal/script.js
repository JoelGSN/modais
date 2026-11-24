const openModalBtn = document.getElementById('openModalBtn')
const closeModalBtn = document.getElementById('closeModalBtn')
const modalBackdrop = document.getElementById('modalBackdrop')
const triggerAlertBtn = document.getElementById('triggerAlertBtn')
const toastContainer = document.getElementById('toastContainer')

const closemodal = () => {
    modalBackdrop.classList.remove('active')
}
const openmodal = () => {
    modalBackdrop.classList.add('active')
}

openModalBtn.addEventListener('click', () => {
    // modalBackdrop.classList.add('active');
    openmodal()
})
// closeModalBtn.addEventListener('click', () => {
//     // modalBackdrop.classList.remove('active')
//     closemodal()
// })

closeModalBtn.addEventListener('click', closemodal)

modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop)
        // modalBackdrop.classList.remove('active')
        closemodal()
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active'))
        // modalBackdrop.classList.remove('active')
        closemodal()
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'o')
        // modalBackdrop.classList.add('active')
        openmodal()
})

triggerAlertBtn.addEventListener('click', () => {
    const toast = document.createElement('div')
    toast.className = 'toast'
    toast.innerHTML = `
            <span class="toast-dot">
            </span><span>Alerta enviado com sucesso!</span>

    `
    toastContainer.appendChild(toast)
    setTimeout(() => {
        toast.classList.add('hide')
        toast.addEventListener('animationend', () => {
            toast.remove()
        }, { once: true })
        setTimeout(() => {
            if (document.body.contains(toast))
                toast.remove()
        }, 500)
    }, 3000)
})




