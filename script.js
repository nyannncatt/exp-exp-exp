

document.querySelectorAll('.sidebar a').forEach((link) => {
    link.addEventListener('click', function(e) {
    
        e.preventDefault();
        
       
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.style.display = 'block';
        }
    });
});

document.querySelector('#reports').style.display = 'block';
