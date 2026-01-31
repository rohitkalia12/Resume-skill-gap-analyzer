// Resume Skill Gap Analyzer JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('analyzer-form');
    const resultsSection = document.getElementById('results-section');
    const analyzeBtn = document.getElementById('analyze-btn');
    const timeframeSelect = document.getElementById('timeframe');
    const planBtn = document.getElementById('plan-btn');
    


    function generatePlanPreview(role, timeframe) {
        const roleSchedules = schedules[role];
        if (!roleSchedules) return '';

        const schedule = roleSchedules[timeframe];
        if (!schedule) return '';

        let preview = `<h4>${schedule.title}</h4>`;
        schedule.items.slice(0, 2).forEach((item, index) => {
            const period = item.title.split(':')[0]; // Get "Week 1", "Month 1", etc.
            const firstTask = item.tasks[0].substring(0, 50) + '...'; // First 50 chars
            preview += `<p><strong>${period}:</strong> ${firstTask}</p>`;
        });

        if (schedule.items.length > 2) {
            preview += `<p><em>And ${schedule.items.length - 2} more phases...</em></p>`;
        }

        return preview;
    }

    // Handle "Let's Plan" button click
    planBtn.addEventListener('click', function() {
        const timeframe = timeframeSelect.value;
        const jobRole = document.getElementById('job-role').value;
        window.location.href = `schedule.html?timeframe=${timeframe}&role=${jobRole}`;
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const resumeFile = document.getElementById('resume-upload').files[0];
        const jobRole = document.getElementById('job-role').value;
        const timeframe = document.getElementById('timeframe').value;

        if (!resumeFile || !jobRole || !timeframe) {
            alert('Please upload a resume, select a job role, and choose a preparation timeframe.');
            return;
        }

        // Show loading state
        analyzeBtn.disabled = true;
        analyzeBtn.textContent = 'Analyzing...';

        // Simulate AI analysis (in a real app, this would call an AI API)
        setTimeout(() => {
            analyzeResume(resumeFile, jobRole, timeframe);
        }, 2000); // Simulate 2-second processing time
    });
    
    function analyzeResume(file, role) {
        // In a real implementation, you would:
        // 1. Extract text from PDF
        // 2. Send to AI API for analysis
        // 3. Process the response
        
        // For demo purposes, we'll use mock data based on job role
        const mockResults = getMockResults(role);
        
        displayResults(mockResults);
        
        // Reset button
        analyzeBtn.disabled = false;
        analyzeBtn.textContent = 'Analyze Resume';
    }
    
    function getMockResults(role) {
        const results = {
            'software-engineer': {
                score: 75,
                matched: ['JavaScript', 'Python', 'Git', 'HTML/CSS', 'SQL'],
                missing: ['React', 'Node.js', 'Docker', 'AWS', 'Machine Learning'],
                roadmap: [
                    'Learn React.js fundamentals',
                    'Study Node.js and Express',
                    'Get familiar with Docker containers',
                    'Obtain AWS certification',
                    'Explore machine learning basics'
                ]
            },
            'data-scientist': {
                score: 68,
                matched: ['Python', 'Statistics', 'SQL', 'Excel', 'Data Visualization'],
                missing: ['Machine Learning', 'Deep Learning', 'Big Data', 'R Programming', 'Cloud Computing'],
                roadmap: [
                    'Master machine learning algorithms',
                    'Learn deep learning with TensorFlow',
                    'Study big data technologies (Hadoop/Spark)',
                    'Improve R programming skills',
                    'Get certified in cloud platforms'
                ]
            },
            'product-manager': {
                score: 82,
                matched: ['Agile', 'User Research', 'Data Analysis', 'Communication', 'Project Management'],
                missing: ['Technical Background', 'Product Strategy', 'Analytics Tools', 'Leadership', 'Market Research'],
                roadmap: [
                    'Build technical knowledge',
                    'Develop product strategy skills',
                    'Learn advanced analytics tools',
                    'Enhance leadership abilities',
                    'Conduct market research studies'
                ]
            },
            'ui-ux-designer': {
                score: 71,
                matched: ['Adobe Creative Suite', 'Sketch', 'Wireframing', 'User Research', 'Prototyping'],
                missing: ['Figma', 'Usability Testing', 'Design Systems', 'Accessibility', 'Motion Design'],
                roadmap: [
                    'Master Figma for design',
                    'Learn usability testing methods',
                    'Create design systems',
                    'Study accessibility guidelines',
                    'Explore motion design principles'
                ]
            },
            'marketing-specialist': {
                score: 79,
                matched: ['Social Media', 'Content Creation', 'SEO', 'Google Analytics', 'Email Marketing'],
                missing: ['Digital Advertising', 'Marketing Automation', 'Data Analysis', 'Brand Strategy', 'Video Production'],
                roadmap: [
                    'Learn digital advertising platforms',
                    'Implement marketing automation',
                    'Improve data analysis skills',
                    'Develop brand strategy expertise',
                    'Master video production techniques'
                ]
            }
        };
        
        return results[role] || {
            score: 50,
            matched: ['Basic skills'],
            missing: ['Advanced skills'],
            roadmap: ['Continue learning']
        };
    }
    
    function displayResults(results) {
        document.getElementById('score-value').textContent = results.score + '%';
        
        const matchedList = document.getElementById('matched-list');
        matchedList.innerHTML = '';
        results.matched.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            matchedList.appendChild(li);
        });
        
        const missingList = document.getElementById('missing-list');
        missingList.innerHTML = '';
        results.missing.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            missingList.appendChild(li);
        });
        
        const roadmapList = document.getElementById('roadmap-list');
        roadmapList.innerHTML = '';
        results.roadmap.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            roadmapList.appendChild(li);
        });
        
        resultsSection.classList.remove('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth' });

        // Show the "Let's Plan" button after analysis
        planBtn.classList.remove('hidden');
    }
});
