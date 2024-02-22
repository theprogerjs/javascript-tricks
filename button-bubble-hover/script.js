const rippleEffectOnHover = document.querySelectorAll('.button-ripple');

if(rippleEffectOnHover){
    rippleEffectOnHover.forEach(button => {
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        //Create SPAN element and append inside of the button element
        const circle = document.createElement('span');
        circle.classList.add('ripple_outline_effect');
        circle.style.width = circle.style.height = `${diameter * 3}px`;
        button.appendChild(circle);
        
        const calculateCirclePosition = (event) => {
            const viewportOffset = button.getBoundingClientRect();
            const x = event.clientX - Math.round(viewportOffset.left) - diameter * 1.5;
            const y = event.clientY - Math.round(viewportOffset.top) - diameter * 1.5;
            circle.style.top = `${ y }px`;
            circle.style.left = `${ x }px`;
        }

        button.addEventListener('mouseenter', (event) => {
            calculateCirclePosition(event);
            circle.classList.add('ripple_animate');
        })

        button.addEventListener('mouseout', (event) => {
            calculateCirclePosition(event);
            circle.classList.remove('ripple_animate');
        }, true);
    });
}