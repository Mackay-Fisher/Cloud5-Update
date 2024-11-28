document.addEventListener('DOMContentLoaded', function() {
    const numberOfDots = 100;  // Adjust this to the number of stars you want

    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';

        // Randomize size (between 1px and 3px for our small stars)
        const size = Math.random() * (4 - 1) + 1;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        // Randomize position
        const leftPosition = Math.random() * (100 - 0) + 0;
        const topPosition = Math.random() * (100 - 0) + 0;
        dot.style.left = `${leftPosition}vw`;
        dot.style.top = `${topPosition/2}vh`;

        // Randomize animation duration (between 1s and 3s for a subtle twinkle effect)
        const animationDuration = Math.random() * (3 - 1) + 1;
        dot.style.animationDuration = `${animationDuration}s`;

        // Attach to the body
        document.body.appendChild(dot);
    }
});