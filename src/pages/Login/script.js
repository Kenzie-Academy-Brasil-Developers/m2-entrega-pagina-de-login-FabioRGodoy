class Modal{
    static showModal(){
        const btnCadastrar = document.getElementById('criarConta')
        const btnRecovery = document.getElementById('recovery-password')
        const containerModalCadastro = document.getElementById('abrir')
        const containerModal = document.getElementById('container__modal')
        
        btnRecovery.addEventListener('click', (event) => {
            event.preventDefault()

            containerModal.classList.toggle('hidden')

        })

        btnCadastrar.addEventListener('click', (event) => {
            event.preventDefault()

            containerModalCadastro.classList.toggle('hidden')
        })
    }
    static closeModal(){
        const btnClose = document.getElementById('closeModal')
        const btnCloseCadastro = document.getElementById('closeModalcadastro')
        const containerModal = document.getElementById('container__modal')
        const containerModalCadastro = document.getElementById('abrir')

        btnClose.addEventListener('click', (event) => {
            event.preventDefault()

            containerModal.classList.toggle('hidden')

        })
        btnCloseCadastro.addEventListener('click', (event) => {
            event.preventDefault()

            containerModalCadastro.classList.toggle('hidden')
        })
    }
}
Modal.showModal()
Modal.closeModal()