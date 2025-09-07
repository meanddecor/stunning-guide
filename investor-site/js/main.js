// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
            const spans = document.querySelectorAll('.mobile-nav-toggle span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active state to current page in navigation
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
    
    // Interactive data visualization placeholders
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        // This would be replaced with actual chart libraries like Chart.js or D3.js
        container.addEventListener('click', function() {
            alert('Interactive chart would be displayed here. In production, this would use Chart.js or D3.js for data visualization.');
        });
    });
    
    // Tooltips initialization
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            const tooltipText = this.querySelector('.tooltiptext');
            if (tooltipText) {
                // Position tooltip to avoid edge overflow
                const rect = tooltipText.getBoundingClientRect();
                if (rect.left < 0) {
                    tooltipText.style.left = '0';
                    tooltipText.style.marginLeft = '0';
                } else if (rect.right > window.innerWidth) {
                    tooltipText.style.left = 'auto';
                    tooltipText.style.right = '0';
                }
            }
        });
    });
    
    // Progress indicators for roadmap
    if (document.querySelector('.roadmap-timeline')) {
        animateRoadmap();
    }
    
    // Form validation for contact/data room request
    const requestForm = document.getElementById('request-form');
    if (requestForm) {
        requestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.email || !data.name || !data.company) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In production, this would send data to a server
            console.log('Form submitted:', data);
            alert('Thank you for your interest! We will send the diligence pack to your email shortly.');
            this.reset();
        });
    }
});

// Animate roadmap timeline
function animateRoadmap() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Number counter animation for stats
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = entry.target;
                const value = target.innerText;
                const number = parseFloat(value.replace(/[^0-9.-]+/g, ''));
                const suffix = value.replace(/[0-9.-]+/g, '');
                const duration = 2000;
                const step = number / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= number) {
                        current = number;
                        clearInterval(timer);
                        target.classList.add('animated');
                    }
                    target.innerText = (suffix.includes('.') ? current.toFixed(1) : Math.floor(current)) + suffix;
                }, 16);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
        observer.observe(stat);
    });
}

// Initialize number animation
animateNumbers();

// Table sorting functionality
document.querySelectorAll('.sortable th').forEach(header => {
    header.addEventListener('click', function() {
        const table = this.closest('table');
        const index = Array.from(this.parentElement.children).indexOf(this);
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        const isAsc = this.classList.contains('asc');
        
        rows.sort((a, b) => {
            const aText = a.children[index].textContent;
            const bText = b.children[index].textContent;
            
            if (isNaN(aText) || isNaN(bText)) {
                return isAsc ? aText.localeCompare(bText) : bText.localeCompare(aText);
            } else {
                return isAsc ? parseFloat(aText) - parseFloat(bText) : parseFloat(bText) - parseFloat(aText);
            }
        });
        
        table.querySelector('tbody').innerHTML = '';
        rows.forEach(row => table.querySelector('tbody').appendChild(row));
        
        // Update sort indicators
        table.querySelectorAll('th').forEach(th => th.classList.remove('asc', 'desc'));
        this.classList.toggle('asc', !isAsc);
        this.classList.toggle('desc', isAsc);
    });
});

// Export functions for use in other scripts
window.VentureOps = {
    animateNumbers,
    animateRoadmap
};