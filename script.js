
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
        
        // Print Resume
        document.getElementById('printBtn').addEventListener('click', () => {
            window.print();
        });
        
        // Download PDF (simulated)
        document.getElementById('downloadBtn').addEventListener('click', () => {
            alert('In a real implementation, this would generate a PDF version of the resume. For now, use the print function and save as PDF.');
        });
        
        // Skill tag interaction
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
        
        // Project card hover effect enhancement
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.12)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'var(--box-shadow)';
            });
        });