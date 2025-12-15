// Enhanced Gallery JavaScript
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    const img = card.querySelector("img");
    const text = card.querySelector("p");

    // ES6 #3: Template literal dengan emoji
    const productName = `✨ ${img.alt} ✨`;

    // Saat gambar diklik → tampilkan nama produk dengan animasi
    img.addEventListener("click", () => {
        // Animation effect
        text.style.transform = 'scale(0.9)';
        text.style.opacity = '0.5';
        
        setTimeout(() => {
            text.textContent = productName;
            text.style.transform = 'scale(1)';
            text.style.opacity = '1';
            
            // Show temporary notification
            showImageNotification(`Melihat: ${img.alt}`);
        }, 300);
    });

    // Efek hover dengan classList dan transform
    img.addEventListener("mouseover", () => {
        // ES6 #4: classList add dengan timeout
        card.classList.add("hover-aktif");
        
        // Add glow effect
        card.style.boxShadow = '0 15px 35px rgba(33, 150, 243, 0.3)';
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.5s ease';
    });

    img.addEventListener("mouseout", () => {
        // ES6 #5: classList remove
        card.classList.remove("hover-aktif");
        
        // Remove glow effect
        card.style.boxShadow = '';
        img.style.transform = 'scale(1)';
    });

    // Add double click for favorite
    let clickCount = 0;
    img.addEventListener('dblclick', () => {
        card.classList.toggle('favorited');
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            font-size: 3rem;
            animation: heart-pop 0.6s ease;
            pointer-events: none;
            z-index: 100;
        `;
        card.appendChild(heart);
        
        setTimeout(() => heart.remove(), 600);
    });
});

// Add heart animation
const style = document.createElement('style');
style.textContent = `
    @keyframes heart-pop {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        50% { transform: translate(-50%, -50%) scale(1.2); }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
    }
    
    .favorited {
        border: 2px solid #ff4081 !important;
    }
    
    .hover-aktif {
        transform: translateY(-10px) !important;
        transition: transform 0.3s ease !important;
    }
`;
document.head.appendChild(style);

// Notification function for gallery
function showImageNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'image-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #1e88e5, #2196f3);
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideUp 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideUp {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes slideDown {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyle);