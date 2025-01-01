document.addEventListener('DOMContentLoaded', (event) => {
    const submitBtn = document.getElementById('submitBtn');
    const nameInput = document.getElementById('nameInput');
    const greeting = document.getElementById('greeting');
    const wishSound = document.getElementById('wishSound');
    const emojis = ['🎉', '🎊', '✨', '🎆', '🥳'];

    submitBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            const message = `🫰🫰😊\n${name}\n 🤗🫰🫰 " Happy New Year, dear ! i blessing May 2025 be filled with moments that make you smile every single day.🎊"`;

            greeting.innerHTML = message.split(' ').map(word => `<span class="word">${word}</span>`).join(' ');
            greeting.style.opacity = '1';
            greeting.style.transform = 'translateY(0)';
            wishSound.play();

            // Apply the word-by-word animation
            const words = document.querySelectorAll('.word');
            words.forEach((word, index) => {
                word.style.animation = `appearWordByWord 0.5s ease-in-out forwards`;
                word.style.animationDelay = `${index * 0.3}s`;
            });

            // Hide the input and button
            nameInput.style.display = 'none';
            submitBtn.style.display = 'none';

            // Start emoji rain
            setInterval(createEmoji, 300);

            // Add slow-motion up and down effect after a short delay
            setTimeout(() => {
                greeting.classList.add('animate');
                greeting.style.animation = 'upDown 5s ease-in-out infinite, colorChange 5s linear infinite';
            }, 3000); // Adjust the delay to match the initial animation duration
        }
    });

    greeting.addEventListener('mouseover', () => {
        greeting.style.color = '#ffcc00';
    });

    greeting.addEventListener('mouseout', () => {
        greeting.style.color = 'white';
    });

    function createEmoji() {
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.classList.add('emoji');
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random speed
        document.body.appendChild(emoji);

        emoji.addEventListener('animationend', () => {
            emoji.remove();
        });
    }
});
