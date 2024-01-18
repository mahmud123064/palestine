document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typewriter-text');
    const textContent = textElement.innerHTML;
    textElement.innerHTML = '';

    function typeWriter() {
        let i = 0;
        const speed = 30; // Adjust the typing speed (milliseconds per character)

        function type() {
            if (i < textContent.length) {
                textElement.innerHTML += textContent.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    typeWriter();

    function scrollText() {
        const container = document.getElementById('typewriter-container');
        container.scrollTop = container.scrollHeight;
    }

    setInterval(scrollText, 3000); // Adjust the interval for scrolling (milliseconds)
});
