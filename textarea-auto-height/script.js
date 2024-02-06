const textareas = document.querySelectorAll('.form-control-auto-height');

const autoResize = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

textareas.forEach(textarea => {
    autoResize(textarea);

    textarea.addEventListener('input', () => {
        autoResize(textarea);
    })
});

