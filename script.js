document.addEventListener('DOMContentLoaded' ,() => {
    const circle = document.querySelector ('.circulo');

    function handleMouseMove(e) {
        e.preventDefault();

        const rect = circle.getBoundingClientRect();

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const offsetX = ((mouseX - centerX) / centerX) *50;
        const offsetY = ((mouseY - centerY) / centerY) *50;

        const posX = 50 + offsetX;
        const posY = 50 + offsetY;
        circle.style.backgroundPosition = `${posX}% ${posY}%`;
    }

    function resetPosition() {
        circle.style.backgroundPosition = 'center';

        circle.addEventListener('mousemove', handleMouseMove);
        circle.addEventListener('mouseleave', resetPosition);

        circle.parentElement.addEventListener('click', (e) => {
            if (!circle.contains(e.target)) {
                e.preventDefault();
            }
        });
    });
    
    
