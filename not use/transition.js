// Function to fade out the current content
function fadeOutCurrentContent() {
    const content = document.querySelector('body');
    content.style.opacity = '0';
    setTimeout(() => {
        window.location.href = linkToGo; // Redirect to the new page
    }, 100); // Adjust the time as needed for the fade out effect
}

// Add a click event listener to all links with the class "transition-link"
const transitionLinks = document.querySelectorAll('.transition.js');
transitionLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const linkToGo = link.getAttribute('href');
        fadeOutCurrentContent(linkToGo);
    });
});
