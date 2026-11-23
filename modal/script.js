const openModalBtn = document.getElementById('openModalBtn')
const closeModalBtn = document.getElementById('closeModalBtn')
const modalBackdrop = document.getElementById('modalBackdrop')

openModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('active');
})
closeModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.remove('active')
})

modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop)
        modalBackdrop.classList.remove('active')
})

document.addEventListener('keydown', (e) =>{
    if(e.key === 'Escape' && modalBackdrop.classList.contains('active'))
    modalBackdrop.classList.remove('active')
})

document.addEventListener('keydown', (e) =>{
    if(e.key === 'o' )
    modalBackdrop.classList.add('active')
})



