// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'neo-green': {
                    DEFAULT: '#10b981',
                    glow: '#34d399',
                    dark: '#064e3b',
                },
                'dark-space': '#0f172a',
                'dark-card': '#1e293b',
            },
            boxShadow: {
                'neo-glow': '0 0 15px rgba(16, 185, 129, 0.4)',
                'neo-glow-lg': '0 0 25px rgba(16, 185, 129, 0.6)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'glow-pulse': 'glowPulse 2s infinite',
                'data-flow': 'dataFlow 3s linear infinite',
                'pixel-flow': 'pixelFlow 3s linear infinite',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)' },
                    '50%': { boxShadow: '0 0 25px rgba(16, 185, 129, 0.7)' },
                },
                dataFlow: {
                    '0%': { left: '0%', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { left: '100%', opacity: '0' },
                },
                pixelFlow: {
                    '0%': { left: '0%', opacity: '0', transform: 'translateY(0) scale(1)' },
                    '10%': { opacity: '1', transform: 'translateY(-1px) scale(1.1)' },
                    '30%': { transform: 'translateY(1px) scale(0.9)' },
                    '50%': { transform: 'translateY(-2px) scale(1)' },
                    '70%': { transform: 'translateY(1px) scale(1.1)' },
                    '90%': { opacity: '1', transform: 'translateY(-1px) scale(1)' },
                    '100%': { left: '100%', opacity: '0', transform: 'translateY(0) scale(1)' },
                }
            }
        }
    }
};

// Reveal Animations on Scroll
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    const btn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}




// Initialize
window.addEventListener("scroll", reveal);
window.addEventListener("DOMContentLoaded", () => {
    reveal(); // Initial check
    initMobileMenu();
});
