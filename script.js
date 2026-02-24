document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('dbSearch');
    const cards = document.querySelectorAll('.wiki-card');

    // Live Search Feature
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        cards.forEach(card => {
            const content = card.textContent.toLowerCase();
            if (content.includes(query)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Mobile Menu Toggle (Basic)
    const mobileBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.background = '#0a0c0f';
        navLinks.style.width = '100%';
        navLinks.style.left = '0';
        navLinks.style.padding = '1rem';
    });
});
