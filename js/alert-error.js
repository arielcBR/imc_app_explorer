export const AlertError = {
    element: document.querySelector('.alert-error'),
    open() {
        AlertError.element.classList.add('open');
    },
    close() {
        AlertError.element.classList.remove('open');
    },
}

const inputsForm = document.querySelector('form');

inputsForm.addEventListener("input", (event) => { 
    if (AlertError.element.className === 'alert-error open')
        AlertError.close();
});