// Add any interactivity such as form submission or event handlers here.
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});
