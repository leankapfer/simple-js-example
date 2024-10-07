// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the button and paragraph elements
    const button = document.getElementById('changeTextButton');
    const greetingParagraph = document.getElementById('greeting');

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Change the text of the paragraph
        greetingParagraph.textContent = 'You have changed the text!';
    });
});
