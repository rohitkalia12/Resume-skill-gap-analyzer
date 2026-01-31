// Schedule data for different timeframes with daily breakdowns
const schedules = {
    'software-engineer': {
        '1-month': {
            title: '1-Month Intensive Skill Preparation',
            motivationalTip: 'Remember: Every expert was once a beginner. Your dedication to this intensive month will transform you into a skilled professional. Stay consistent, believe in your potential, and celebrate small victories along the way!',
            weeks: [
                {
                    title: 'Week 1: Rapid Foundation Building',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Analyze resume gaps and prioritize 2-3 key skills', 'Set up development environment quickly'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Complete crash-course tutorials on fundamentals', 'Practice basic exercises'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Review learned concepts', 'Build a simple project'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Deepen understanding of key skills', 'Solve coding problems'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Integrate skills in mini-project', 'Document progress'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Review weak areas', 'Practice more exercises'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Plan for next week', 'Rest and reflect'] }
                    ]
                },
                {
                    title: 'Week 2: Skill Acquisition Sprint',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Deep dive into primary missing skills', 'Complete 10 coding problems'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Build mini-project 1', 'Debug and optimize'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Participate in coding challenges', 'Study solutions'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Build mini-project 2', 'Add features'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Review projects', 'Refactor code'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Solve advanced problems', 'Contribute to community'] },
                        { day: 'Sunday', duration: '1 hour', tasks: ['Quick review', 'Prepare for Week 3'] }
                    ]
                },
                {
                    title: 'Week 3: Project Integration',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Start portfolio project', 'Plan architecture'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['Implement core features', 'Test functionality'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['Add advanced features', 'Debug issues'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['Optimize performance', 'Code review'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['Document project', 'Create README'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['Polish UI/UX', 'Final testing'] },
                        { day: 'Sunday', duration: '0 hours', tasks: ['Rest day'] }
                    ]
                },
                {
                    title: 'Week 4: Final Polish & Application',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Review all learned skills', 'Identify gaps'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Practice interview questions', 'Mock coding'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Update resume with projects', 'Tailor for jobs'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Apply to 5 job openings', 'Network on LinkedIn'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Follow up on applications', 'Prepare pitch'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Continue applying', 'Refine portfolio'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Reflect on progress', 'Plan next steps'] }
                    ]
                }
            ],
            totalTime: '95 hours'
        },
        '3-months': {
            title: '3-Month Comprehensive Skill Development',
            motivationalTip: 'Success is not final, failure is not fatal: It is the courage to continue that counts. Your 3-month journey will build resilience, expertise, and the confidence to pursue your dreams relentlessly!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Foundation & Core Skills',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Master programming fundamentals', 'Set up learning environment'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Learn core technologies', 'Practice basic coding'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Study data structures', 'Complete tutorials'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Build small projects', 'Debug code'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Review progress', 'Solve problems'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Advanced practice', 'Contribute to projects'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Plan next week', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: Intermediate Building',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Deepen core skills', 'Work on algorithms'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Implement features', 'Test applications'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Learn frameworks', 'Build prototypes'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Optimize code', 'Code reviews'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Collaborate on projects', 'Document work'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Advanced topics', 'Personal projects'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Reflect and plan', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 3: Skill Application',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Apply skills in real scenarios', 'Debug complex issues'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Develop full features', 'Unit testing'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Learn best practices', 'Refactor code'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Work on team projects', 'Version control'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Present work', 'Gather feedback'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Explore new technologies', 'Build portfolio'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Review month', 'Plan ahead'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 4: Review & Advance',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Review fundamentals', 'Strengthen weak areas'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Advanced algorithms', 'Problem solving'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Integrate skills', 'Build complex apps'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Optimize performance', 'Security basics'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Collaborate and learn', 'Networking'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Personal development', 'Side projects'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Rest and recharge', 'Weekly summary'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: Advanced Skill Building',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Tackle complex problems', 'Algorithm mastery'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Develop intermediate projects', 'API integration'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Learn design patterns', 'Code architecture'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Contribute to open-source', 'Pull requests'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Team collaboration', 'Agile practices'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Explore emerging tech', 'Experiment'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Plan for next month', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 2: Mastery & Application',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Master advanced topics', 'System design'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Build scalable apps', 'Database management'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Implement security', 'Testing strategies'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Work on real-world projects', 'Deployment'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Code reviews and feedback', 'Mentorship'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Personal branding', 'Portfolio updates'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Reflect on progress', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 3: Specialization',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Specialize in a stack', 'Deep dive'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Advanced frameworks', 'Microservices'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Cloud technologies', 'DevOps basics'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['AI/ML integration', 'Data science'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Full-stack development', 'End-to-end'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Open-source contributions', 'Community'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Skill assessment', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 4: Integration & Review',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Integrate all skills', 'Capstone project start'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Advanced problem solving', 'Interviews prep'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Portfolio refinement', 'Case studies'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Networking and outreach', 'LinkedIn'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Mock interviews', 'Feedback'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Freelance opportunities', 'Side gigs'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Monthly review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Expertise Development',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Expert-level coding', 'Performance optimization'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Leadership in projects', 'Team management'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Emerging technologies', 'Innovation'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Business acumen', 'Product development'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Certifications', 'Professional development'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Advanced portfolio', 'Showcase work'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Plan career moves', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 2: Professional Readiness',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Intensive interview prep', 'Technical questions'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Behavioral interviews', 'Soft skills'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['System design', 'Architecture'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Salary negotiation', 'Job offers'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Application strategy', 'Target companies'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Networking events', 'Conferences'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Final preparations', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 3: Launch & Sustain',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Apply to jobs', 'Resume tailoring'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Follow up on applications', 'Interviews'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Onboarding process', 'New job prep'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Continuous learning', 'Stay updated'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Mentorship and growth', 'Feedback loops'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Personal projects', 'Hobbies'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Work-life balance', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 4: Reflection & Future',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Review 3-month journey', 'Achievements'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Skill gaps analysis', 'Future learning'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Career planning', 'Goals setting'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Networking maintenance', 'Alumni'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Freelance or side work', 'Income streams'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Community involvement', 'Teaching'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Celebrate success', 'Rest'] }
                    ]
                }
            ],
            totalTime: '255 hours'
        },
        '6-months': {
            title: '6-Month Professional Skill Enhancement',
            motivationalTip: 'The journey of a thousand miles begins with a single step. Your 6-month commitment will transform you from a learner into a professional ready to tackle real-world challenges. Every day brings you closer to your goals!',
            weeks: [
                // Months 1-2: Comprehensive Foundation (8 weeks)
                {
                    title: 'Month 1 - Week 1: Core Fundamentals',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Master programming basics', 'Environment setup'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Learn data structures', 'Basic algorithms'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Study core languages', 'Practice syntax'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Build simple apps', 'Debug basics'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Review concepts', 'Solve problems'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Plan ahead', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: Intermediate Skills',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Advanced data structures', 'Algorithm complexity'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Framework introduction', 'Build prototypes'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Database basics', 'SQL queries'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['API development', 'REST principles'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Testing fundamentals', 'Unit tests'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Version control', 'Git workflows'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Weekly review', 'Rest'] }
                    ]
                },
                // ... Continuing for other weeks in Months 1-2
                // For brevity, summarizing remaining weeks
                {
                    title: 'Month 2 - Week 1: Specialized Development',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Industry-specific skills', 'Domain knowledge'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Full-stack development', 'Frontend-backend integration'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Deployment basics', 'Cloud services'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Security principles', 'Best practices'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Performance optimization', 'Scalability'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Open-source contributions', 'Community engagement'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Reflect and plan', 'Rest'] }
                    ]
                },
                // Months 3-4: Specialized Development (8 weeks)
                {
                    title: 'Month 3 - Week 1: Advanced Projects',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Complex project planning', 'Architecture design'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['Implement advanced features', 'Microservices'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['Database optimization', 'NoSQL databases'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['CI/CD pipelines', 'Automation'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['Code reviews', 'Quality assurance'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['Personal portfolio', 'Showcase projects'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Monthly assessment', 'Rest'] }
                    ]
                },
                // ... Continuing for Months 3-4
                // Months 5-6: Expertise & Career Preparation (8 weeks)
                {
                    title: 'Month 5 - Week 1: Mastery & Leadership',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Expert-level coding', 'System design'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Team leadership', 'Project management'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Emerging technologies', 'Innovation'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Business skills', 'Product thinking'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Certifications', 'Professional credentials'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Networking', 'Industry connections'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Career planning', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 6 - Week 1: Final Preparation',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Intensive interview prep', 'Technical questions'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Behavioral interviews', 'Soft skills'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Portfolio refinement', 'Case studies'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Job applications', 'Resume optimization'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Follow-ups', 'Networking'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Mock interviews', 'Feedback'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Final review', 'Rest'] }
                    ]
                }
            ],
            totalTime: '510 hours'
        },
        '1-year': {
            title: '1-Year Career Transformation Program',
            motivationalTip: 'The only way to do great work is to love what you do. Your one-year commitment will not only transform your skills but also shape your passion for technology and innovation. Embrace the journey!',
            weeks: [
                // Months 1-3: Solid Foundation Building (12 weeks)
                {
                    title: 'Month 1 - Week 1: Programming Mastery',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Master multiple languages', 'Syntax and basics'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Data structures deep dive', 'Implementation'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Algorithms mastery', 'Problem solving'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Build diverse projects', 'Experimentation'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Code optimization', 'Best practices'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Open-source study', 'Contributions'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Weekly planning', 'Rest'] }
                    ]
                },
                // ... Continuing for Months 1-3
                // Months 4-6: Intermediate Mastery (12 weeks)
                {
                    title: 'Month 4 - Week 1: Stack Specialization',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Choose technology stack', 'Deep specialization'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Advanced frameworks', 'Expert usage'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Complex applications', 'Real-world scenarios'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Software engineering', 'Design patterns'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Team collaboration', 'Agile methodologies'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['GitHub profile building', 'Portfolio enhancement'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Mid-year review', 'Rest'] }
                    ]
                },
                // ... Continuing for Months 4-6
                // Months 7-9: Advanced Expertise (12 weeks)
                {
                    title: 'Month 7 - Week 1: Leadership & Innovation',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['AI/ML integration', 'Machine learning basics'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Cloud architecture', 'Scalable systems'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Microservices design', 'Distributed systems'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Business development', 'Product management'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Team leadership', 'Mentorship'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Certifications', 'Professional growth'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Innovation projects', 'Rest'] }
                    ]
                },
                // ... Continuing for Months 7-9
                // Months 10-12: Professional Readiness (12 weeks)
                {
                    title: 'Month 10 - Week 1: Career Launch',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Advanced portfolio', 'Showcase expertise'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Intensive interview prep', 'Mock sessions'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Networking strategy', 'Industry connections'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Job search optimization', 'Target companies'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Application process', 'Follow-ups'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Continuous learning', 'Stay updated'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Final preparations', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 12 - Week 1: Sustained Success',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Onboarding excellence', 'New role adaptation'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Professional development', 'Certifications'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Mentorship and teaching', 'Knowledge sharing'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Side projects', 'Personal branding'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Work-life balance', 'Health and wellness'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Community involvement', 'Open-source'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Reflect on journey', 'Celebrate achievements'] }
                    ]
                }
            ],
            totalTime: '1030 hours'
        }
    }
};

// Function to animate text word by word
function animateTextWordByWord(element, text, delay = 50) {
    const words = text.split(' ');
    element.innerHTML = '';
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.opacity = '0';
        span.style.animation = `fadeInWord 0.5s ease-in-out ${index * delay}ms forwards`;
        element.appendChild(span);
    });
}

// Function to render schedule
function renderSchedule(timeframe, role) {
    const roleSchedules = schedules[role];
    if (!roleSchedules) return;

    const schedule = roleSchedules[timeframe];
    if (!schedule) return;

    // Update title
    const titleElement = document.querySelector('header h1');
    animateTextWordByWord(titleElement, schedule.title);

    // Render timeline items
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';

    schedule.weeks.forEach(week => {
        const weekDiv = document.createElement('div');
        weekDiv.className = 'week-item';

        const weekTitle = document.createElement('h2');
        animateTextWordByWord(weekTitle, week.title);
        weekDiv.appendChild(weekTitle);

        week.days.forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day-item';

            const dayTitle = document.createElement('h3');
            animateTextWordByWord(dayTitle, `${day.day}: ${day.duration}`);
            dayDiv.appendChild(dayTitle);

            const taskList = document.createElement('ul');
            day.tasks.forEach(task => {
                const li = document.createElement('li');
                animateTextWordByWord(li, task);
                taskList.appendChild(li);
            });
            dayDiv.appendChild(taskList);

            weekDiv.appendChild(dayDiv);
        });

        timeline.appendChild(weekDiv);
    });

    // Update total time
    const totalTimeElement = document.querySelector('.total-time h3');
    animateTextWordByWord(totalTimeElement, `Total Preparation Time: ${schedule.totalTime}`);

    // Add motivational tip
    if (schedule.motivationalTip) {
        const tipDiv = document.createElement('div');
        tipDiv.className = 'motivational-tip';
        tipDiv.innerHTML = '<h3>💪 Motivational Tip</h3>';
        const tipParagraph = document.createElement('p');
        animateTextWordByWord(tipParagraph, schedule.motivationalTip);
        tipDiv.appendChild(tipParagraph);
        timeline.appendChild(tipDiv);
    }
}

// Function to generate text content for PDF
function generateTextContent(timeframe) {
    const schedule = schedules[timeframe];
    if (!schedule) return '';

    let content = `${schedule.title}\n\n`;
    content += `Total Preparation Time: ${schedule.totalTime}\n\n`;

    schedule.weeks.forEach((week, weekIndex) => {
        content += `${week.title}\n`;
        content += '='.repeat(week.title.length) + '\n\n';

        week.days.forEach(day => {
            content += `${day.day}: ${day.duration}\n`;
            content += '-'.repeat(`${day.day}: ${day.duration}`.length) + '\n';

            day.tasks.forEach(task => {
                content += `• ${task}\n`;
            });
            content += '\n';
        });

        if (weekIndex < schedule.weeks.length - 1) {
            content += '\n' + '='.repeat(50) + '\n\n';
        }
    });

    content += '\nGenerated by Gen AI Squad - Resume Skill Gap Analyzer';

    return content;
}

// Function to download PDF
function downloadPDF() {
    const timeframe = document.getElementById('timeframe-select').value;

    const textContent = generateTextContent(timeframe);
    const lines = textContent.split('\n');

    // Create PDF with jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let yPosition = 20;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const lineHeight = 7;

    lines.forEach(line => {
        // Check if we need a new page
        if (yPosition + lineHeight > pageHeight - margin) {
            doc.addPage();
            yPosition = 20;
        }

        // Check if line is a heading (contains ':' or is all caps)
        if (line.includes(':') && !line.startsWith('•')) {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
        } else if (line.length > 0 && line === line.toUpperCase() && !line.includes('•')) {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(14);
        } else if (line.startsWith('•')) {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
        } else {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
        }

        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
    });

    doc.save('skill-preparation-schedule.pdf');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const timeframeSelect = document.getElementById('timeframe-select');
    const downloadBtn = document.getElementById('download-pdf-btn');

    // Get timeframe and role from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const initialTimeframe = urlParams.get('timeframe') || '1-month';
    const role = urlParams.get('role') || 'software-engineer'; // Default to software-engineer

    // Set the select value
    timeframeSelect.value = initialTimeframe;

    // Render initial schedule
    renderSchedule(initialTimeframe, role);

    // Handle timeframe change
    timeframeSelect.addEventListener('change', function() {
        renderSchedule(this.value, role);
    });

    // Handle PDF download
    downloadBtn.addEventListener('click', downloadPDF);
});
