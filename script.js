// 
// SIMPLE INTERACTIVITY & ANIMATIONS
// 

document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for all section-cards on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initial styles and observing
    const cards = document.querySelectorAll('.section-card, .project-card, .app-card, .contact-card');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // --- LIGHTBOX MODAL LOGIC ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close-modal");

    // All images that can be enlarged
    const expandableImages = document.querySelectorAll('.project-preview img, .app-preview img');

    expandableImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Close the modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    // Close on click outside image
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
