document.addEventListener('DOMContentLoaded', function() {
    const userName = 'Student'; 
    document.querySelector('h2').textContent = `Welcome, ${userName}!`;

    
    const internships = [
        { 
            title: 'AI & Data Science Internship', 
            company: 'Refonte Learning', 
            location: 'Remote', 
            field: 'Internship', 
            type: 'Internship', 
            url: 'https://www.linkedin.com/jobs/view/4093524339/',
            tags: ['AI', 'Data']
        },
        { 
            title: 'Cyber Security Training & Internship', 
            company: 'Refonte Learning', 
            location: 'Remote', 
            field: 'Internship', 
            type: 'Internship', 
            url: 'https://www.linkedin.com/jobs/view/4093380970/',
            tags: ['Cybersecurity']
        },
        { 
            title: 'Stagiaire en développement Web', 
            company: 'Dhahri AlKubaisi Technologies', 
            location: 'Gabes, Tunisia', 
            field: 'Full-time', 
            type: 'Hybrid', 
            url: 'https://www.linkedin.com/jobs/view/4092728451/',
            tags: ['Web']
        },
        { 
            title: 'Software Engineering Intern', 
            company: 'MASS Analytics', 
            location: 'Tunis, Tunisia', 
            field: 'Internship', 
            type: 'On-site', 
            url: 'https://www.linkedin.com/jobs/view/4070261863/',
            tags: ['Web']
        },
        { 
            title: 'Data Science Intern', 
            company: 'MASS Analytics', 
            location: 'Tunis, Tunisia', 
            field: 'Internship', 
            type: 'On-site', 
            url: 'https://www.linkedin.com/jobs/view/4068048954/',
            tags: ['Data', 'AI']
        },
        { 
            title: 'Data Analyst/PFE-2025', 
            company: 'Kamioun', 
            location: 'Tunis, Tunisia', 
            field: 'Full-time', 
            type: 'On-site', 
            url: 'https://www.linkedin.com/jobs/view/4065947501/',
            tags: ['Data']
        },
        { 
            title: 'DevOps Intern', 
            company: 'MASS Analytics', 
            location: 'Tunis, Tunisia', 
            field: 'Internship', 
            type: 'On-site', 
            url: 'https://www.linkedin.com/jobs/view/4065993162/',
            tags: ['DevOps']
        },
        { 
            title: 'Test Engineering/PFE-2025', 
            company: 'Kamioun', 
            location: 'Tunis, Tunisia', 
            field: 'Full-time', 
            type: 'On-site', 
            url: 'https://www.linkedin.com/jobs/view/4065944660/',
            tags: ['QA']
        },
        { 
            title: 'Junior Quality Analyst / Programme d\'alternance', 
            company: 'Linedata', 
            location: 'Tunis, Tunisia', 
            field: 'Full-time', 
            type: 'On-site', 
            url: 'https://www.linkedin.com/jobs/view/3965380834/',
            tags: ['QA']
        }
    ];

    const container = document.getElementById('internshipContainer');

   
    window.filterInternships = function() {
        const tag = document.getElementById('searchTags').value;
        const location = document.getElementById('searchLocation').value;
        const type = document.getElementById('searchType').value;

        container.innerHTML = '';

        internships.forEach(internship => {
            if ((tag === '' || internship.tags.includes(tag)) &&
                (location === '' || internship.location.includes(location)) &&
                (type === '' || internship.type === type)) {
                
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4';
                
                const card = document.createElement('div');
                card.className = 'card-internship';
                
                const content = `
                    <h5>${internship.title}</h5>
                    <div class="company">${internship.company}</div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i> ${internship.location}
                    </div>
                    <div class="type">
                        <i class="fas fa-briefcase"></i> ${internship.type}
                    </div>
                    <div class="tags">
                        ${internship.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${internship.url}" target="_blank" class="btn-apply">Apply Now</a>
                `;
                
                card.innerHTML = content;
                col.appendChild(card);
                container.appendChild(col);
            }
        });
    }

    
    internships.forEach(internship => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        
        const card = document.createElement('div');
        card.className = 'card-internship';
        
        const content = `
            <h5>${internship.title}</h5>
            <div class="company">${internship.company}</div>
            <div class="location">
                <i class="fas fa-map-marker-alt"></i> ${internship.location}
            </div>
            <div class="type">
                <i class="fas fa-briefcase"></i> ${internship.type}
            </div>
            <div class="tags">
                ${internship.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${internship.url}" target="_blank" class="btn-apply">Apply Now</a>
        `;
        
        card.innerHTML = content;
        col.appendChild(card);
        document.getElementById('internshipContainer').appendChild(col);
    });

    
    document.getElementById('searchTags').addEventListener('change', filterInternships);
    document.getElementById('searchLocation').addEventListener('change', filterInternships);
    document.getElementById('searchType').addEventListener('change', filterInternships);

    
    const internshipCards = document.querySelectorAll('.card-internship');

    internshipCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
            card.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        });
    });
});
