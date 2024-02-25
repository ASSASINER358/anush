const letters = document.querySelectorAll('.letter');
const alignButton = document.getElementById('alignButton');

let alignCount = 0;

function alignText() {
    alignCount++;
    if (alignCount === letters.length) {
        // All letters are aligned
        alert("Text is aligned!");
        alignButton.style.display = 'none';
    }
}
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    console.log('Scrolling...');
    letters.forEach((letter, index) => {
        const offset = index * 50; // Adjust this value based on your preference
        const isVisible = scrollPosition >= offset;

        letter.style.opacity = isVisible ? 1 : 0;

        if (index === letters.length - 1 && isVisible) {
            // Last letter is visible, show the align button
            alignButton.style.display = 'block';
        }
    });
});
