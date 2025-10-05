document.addEventListener("DOMContentLoaded", function() {
    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // Create a URL object to easily access the pathname
        const linkUrl = new URL(link.href, window.location.origin);
        
        // Remove existing active class
        link.classList.remove('active');

        // Check if the link's pathname matches the current page's pathname
        if (linkUrl.pathname === activePage) {
            link.classList.add('active');
        }
    });
});