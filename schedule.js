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
    },
    'data-scientist': {
        '1-month': {
            title: '1-Month Intensive Data Science Preparation',
            motivationalTip: 'Data is the new oil, and you are the engineer who will refine it into insights. Your dedication to this intensive month will transform you into a data-driven professional. Stay curious, experiment relentlessly, and let the data guide your journey!',
            weeks: [
                {
                    title: 'Week 1: Data Fundamentals',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Learn Python basics for data science', 'Set up Jupyter environment'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Introduction to NumPy and Pandas', 'Basic data manipulation'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Data visualization with Matplotlib', 'Create simple plots'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Statistical concepts', 'Descriptive statistics'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Data cleaning basics', 'Handle missing values'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Practice with datasets', 'Kaggle exploration'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Review concepts', 'Plan next week'] }
                    ]
                },
                {
                    title: 'Week 2: Machine Learning Basics',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Supervised vs unsupervised learning', 'Linear regression'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Logistic regression', 'Classification problems'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Decision trees and random forests', 'Model evaluation'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Cross-validation techniques', 'Overfitting prevention'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Feature engineering', 'Data preprocessing'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Build first ML model', 'Kaggle competition'] },
                        { day: 'Sunday', duration: '1 hour', tasks: ['Model interpretation', 'Rest'] }
                    ]
                },
                {
                    title: 'Week 3: Advanced Analytics',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Unsupervised learning', 'Clustering algorithms'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['Dimensionality reduction', 'PCA and t-SNE'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['Time series analysis', 'Forecasting models'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['Natural language processing basics', 'Text mining'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['Deep learning introduction', 'Neural networks'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['End-to-end project', 'Data pipeline'] },
                        { day: 'Sunday', duration: '0 hours', tasks: ['Rest day'] }
                    ]
                },
                {
                    title: 'Week 4: Portfolio & Applications',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Review ML algorithms', 'Model selection'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['A/B testing concepts', 'Experimental design'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['SQL for data analysis', 'Complex queries'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Build portfolio project', 'GitHub repository'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Resume optimization', 'Data science focus'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Apply to data roles', 'LinkedIn networking'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Interview preparation', 'Rest'] }
                    ]
                }
            ],
            totalTime: '95 hours'
        },
        '3-months': {
            title: '3-Month Comprehensive Data Science Development',
            motivationalTip: 'In the world of data, curiosity is your greatest asset. Your 3-month journey will equip you with the tools to extract meaning from chaos. Embrace the complexity, question assumptions, and let data tell its story!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Python & Statistics Mastery',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Advanced Python programming', 'Data structures'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Statistical inference', 'Hypothesis testing'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Probability distributions', 'Bayesian concepts'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Data wrangling with Pandas', 'Advanced operations'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Data visualization libraries', 'Seaborn, Plotly'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['SQL advanced queries', 'Database design'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Weekly review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: Machine Learning Deep Dive',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Ensemble methods', 'Boosting algorithms'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Support vector machines', 'Kernel methods'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Neural networks fundamentals', 'Backpropagation'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Regularization techniques', 'Model tuning'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Model interpretability', 'SHAP, LIME'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Automated ML', 'AutoML tools'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Algorithm comparison', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 3: Big Data & Cloud',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Big data concepts', 'Hadoop ecosystem'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Spark fundamentals', 'Distributed computing'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Cloud platforms', 'AWS, GCP basics'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Data pipelines', 'ETL processes'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Data warehousing', 'Data lakes'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Real-time analytics', 'Streaming data'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Technology stack review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 4: Deep Learning & NLP',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Deep learning frameworks', 'TensorFlow, PyTorch'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Computer vision basics', 'CNNs'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['NLP preprocessing', 'Tokenization, embeddings'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Transformers architecture', 'BERT, GPT'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Reinforcement learning', 'Q-learning'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Generative models', 'GANs'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['AI ethics', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: Advanced Analytics',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Time series forecasting', 'ARIMA, Prophet'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Anomaly detection', 'Outlier analysis'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Recommendation systems', 'Collaborative filtering'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Graph analytics', 'Network analysis'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Causal inference', 'A/B testing advanced'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Bayesian statistics', 'Probabilistic modeling'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Research papers', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 2: Production ML',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Model deployment', 'Flask, FastAPI'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['MLOps fundamentals', 'Model versioning'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Monitoring and logging', 'Model performance'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['CI/CD for ML', 'Automated testing'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Scalable ML systems', 'Distributed training'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Edge computing', 'Model optimization'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Production challenges', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 3: Business Intelligence',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Business metrics', 'KPI development'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Dashboard creation', 'Tableau, Power BI'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Data storytelling', 'Presentation skills'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Stakeholder communication', 'Business translation'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Data strategy', 'Roadmap planning'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Industry case studies', 'Real-world applications'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Business acumen', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 4: Specialization',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Choose specialization', 'Domain expertise'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Healthcare analytics', 'Medical data'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Financial modeling', 'Risk analysis'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Marketing analytics', 'Customer segmentation'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['IoT data analysis', 'Sensor data'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Social media analytics', 'Sentiment analysis'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Industry trends', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Leadership & Innovation',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Data science leadership', 'Team management'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Innovation in AI', 'Emerging technologies'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Research methodology', 'Experimental design'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Publication and conferences', 'Academic writing'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Open-source contributions', 'Community building'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Personal branding', 'Thought leadership'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Future of AI', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 2: Career Preparation',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Technical interview prep', 'Algorithm questions'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['System design interviews', 'Scalability'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Behavioral interviews', 'Leadership examples'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Portfolio development', 'GitHub optimization'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Networking strategies', 'Industry connections'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Job applications', 'Resume tailoring'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Mock interviews', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 3: Launch & Sustain',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Final portfolio review', 'Showcase projects'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Certifications', 'Professional credentials'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Freelance opportunities', 'Side projects'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Continuous learning', 'Stay updated'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Mentorship and teaching', 'Knowledge sharing'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Industry conferences', 'Professional development'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Work-life balance', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 4: Reflection & Future',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Career planning', 'Long-term goals'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Skill assessment', 'Gap analysis'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Investment in learning', 'Budget planning'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Community involvement', 'Open-source'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Personal projects', 'Innovation'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Health and wellness', 'Sustainable habits'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Celebrate achievements', 'Rest'] }
                    ]
                }
            ],
            totalTime: '255 hours'
        },
        '6-months': {
            title: '6-Month Professional Data Science Enhancement',
            motivationalTip: 'Data science is not just about algorithms; it\'s about solving real problems. Your 6-month commitment will transform you from a data enthusiast to a data science professional. Embrace the challenges, learn from failures, and let curiosity drive your progress!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Foundations',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Python mastery', 'Advanced programming'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Mathematics for ML', 'Linear algebra'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Statistics deep dive', 'Advanced concepts'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Data structures', 'Efficient algorithms'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Version control', 'Git workflows'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Environment setup', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: Data Engineering',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Database systems', 'SQL advanced'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['NoSQL databases', 'MongoDB, Cassandra'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Data pipelines', 'Apache Airflow'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['ETL processes', 'Data quality'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Data warehousing', 'Snowflake, Redshift'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Big data tools', 'Spark, Hadoop'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Infrastructure review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: ML Algorithms',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Supervised learning', 'Regression models'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Classification algorithms', 'Evaluation metrics'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Unsupervised learning', 'Clustering'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Dimensionality reduction', 'Feature selection'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Ensemble methods', 'Model stacking'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Time series analysis', 'Forecasting'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Algorithm selection', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Deep Learning',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Neural networks', 'Backpropagation'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['CNNs for vision', 'Image classification'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['RNNs and LSTMs', 'Sequence modeling'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['Transformers', 'Attention mechanisms'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['Generative models', 'Autoencoders'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['Reinforcement learning', 'Q-learning'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['DL frameworks', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 5 - Week 1: Production & MLOps',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Model deployment', 'REST APIs'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Model monitoring', 'Drift detection'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['A/B testing', 'Experimentation'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['MLOps pipelines', 'CI/CD'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Model versioning', 'MLflow'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Scalable systems', 'Kubernetes'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Production challenges', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 6 - Week 1: Leadership',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Team leadership', 'Project management'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Stakeholder communication', 'Business translation'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Data strategy', 'Roadmap planning'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Innovation management', 'R&D'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Mentorship', 'Knowledge sharing'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Industry networking', 'Conferences'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Career advancement', 'Rest'] }
                    ]
                }
            ],
            totalTime: '510 hours'
        },
        '3-months': {
            title: '3-Month Comprehensive Data Science Development',
            motivationalTip: 'In the world of data, curiosity is your greatest asset. Your 3-month journey will equip you with the tools to extract meaning from chaos. Embrace the complexity, question assumptions, and let data tell its story!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Python & Statistics Mastery',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Advanced Python programming', 'Data structures'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Statistical inference', 'Hypothesis testing'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Probability distributions', 'Bayesian concepts'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Data wrangling with Pandas', 'Advanced operations'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Data visualization libraries', 'Seaborn, Plotly'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['SQL advanced queries', 'Database design'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Weekly review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: Machine Learning Deep Dive',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Ensemble methods', 'Boosting algorithms'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Support vector machines', 'Kernel methods'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Neural networks fundamentals', 'Backpropagation'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Regularization techniques', 'Model tuning'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Model interpretability', 'SHAP, LIME'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Automated ML', 'AutoML tools'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Algorithm comparison', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 3: Big Data & Cloud',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Big data concepts', 'Hadoop ecosystem'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Spark fundamentals', 'Distributed computing'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Cloud platforms', 'AWS, GCP basics'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Data pipelines', 'ETL processes'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Data warehousing', 'Data lakes'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Real-time analytics', 'Streaming data'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Technology stack review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 4: Deep Learning & NLP',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Deep learning frameworks', 'TensorFlow, PyTorch'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Computer vision basics', 'CNNs'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['NLP preprocessing', 'Tokenization, embeddings'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Transformers architecture', 'BERT, GPT'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Reinforcement learning', 'Q-learning'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Generative models', 'GANs'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['AI ethics', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: Advanced Analytics',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Time series forecasting', 'ARIMA, Prophet'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Anomaly detection', 'Outlier analysis'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Recommendation systems', 'Collaborative filtering'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Graph analytics', 'Network analysis'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Causal inference', 'A/B testing advanced'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Bayesian statistics', 'Probabilistic modeling'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Research papers', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 2: Production ML',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Model deployment', 'Flask, FastAPI'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['MLOps fundamentals', 'Model versioning'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Monitoring and logging', 'Model performance'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['CI/CD for ML', 'Automated testing'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Scalable ML systems', 'Distributed training'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Edge computing', 'Model optimization'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Production challenges', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 3: Business Intelligence',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Business metrics', 'KPI development'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Dashboard creation', 'Tableau, Power BI'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Data storytelling', 'Presentation skills'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Stakeholder communication', 'Business translation'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Data strategy', 'Roadmap planning'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Industry case studies', 'Real-world applications'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Business acumen', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 4: Specialization',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Choose specialization', 'Domain expertise'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Healthcare analytics', 'Medical data'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Financial modeling', 'Risk analysis'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Marketing analytics', 'Customer segmentation'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['IoT data analysis', 'Sensor data'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Social media analytics', 'Sentiment analysis'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Industry trends', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Leadership & Innovation',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Data science leadership', 'Team management'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Innovation in AI', 'Emerging technologies'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Research methodology', 'Experimental design'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Publication and conferences', 'Academic writing'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Open-source contributions', 'Community building'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Personal branding', 'Thought leadership'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Future of AI', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 2: Career Preparation',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Technical interview prep', 'Algorithm questions'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['System design interviews', 'Scalability'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Behavioral interviews', 'Leadership examples'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Portfolio development', 'GitHub optimization'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Networking strategies', 'Industry connections'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Job applications', 'Resume tailoring'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Mock interviews', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 3: Launch & Sustain',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Final portfolio review', 'Showcase projects'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Certifications', 'Professional credentials'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Freelance opportunities', 'Side projects'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Continuous learning', 'Stay updated'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Mentorship and teaching', 'Knowledge sharing'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Industry conferences', 'Professional development'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Work-life balance', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 4: Reflection & Future',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Career planning', 'Long-term goals'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Skill assessment', 'Gap analysis'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Investment in learning', 'Budget planning'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Community involvement', 'Open-source'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Personal projects', 'Innovation'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Health and wellness', 'Sustainable habits'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Celebrate achievements', 'Rest'] }
                    ]
                }
            ],
            totalTime: '255 hours'
        },
        '6-months': {
            title: '6-Month Professional Data Science Enhancement',
            motivationalTip: 'Data science is not just about algorithms; it\'s about solving real problems. Your 6-month commitment will transform you from a data enthusiast to a data science professional. Embrace the challenges, learn from failures, and let curiosity drive your progress!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Foundations',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Python mastery', 'Advanced programming'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Mathematics for ML', 'Linear algebra'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Statistics deep dive', 'Advanced concepts'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Data structures', 'Efficient algorithms'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Version control', 'Git workflows'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Environment setup', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: Data Engineering',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Database systems', 'SQL advanced'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['NoSQL databases', 'MongoDB, Cassandra'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Data pipelines', 'Apache Airflow'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['ETL processes', 'Data quality'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Data warehousing', 'Snowflake, Redshift'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Big data tools', 'Spark, Hadoop'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Infrastructure review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: ML Algorithms',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Supervised learning', 'Regression models'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Classification algorithms', 'Evaluation metrics'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Unsupervised learning', 'Clustering'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Dimensionality reduction', 'Feature selection'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Ensemble methods', 'Model stacking'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Time series analysis', 'Forecasting'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Algorithm selection', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Deep Learning',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Neural networks', 'Backpropagation'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['CNNs for vision', 'Image classification'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['RNNs and LSTMs', 'Sequence modeling'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['Transformers', 'Attention mechanisms'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['Generative models', 'Autoencoders'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['Reinforcement learning', 'Q-learning'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['DL frameworks', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 5 - Week 1: Production & MLOps',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Model deployment', 'REST APIs'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Model monitoring', 'Drift detection'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['A/B testing', 'Experimentation'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['MLOps pipelines', 'CI/CD'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Model versioning', 'MLflow'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Scalable systems', 'Kubernetes'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Production challenges', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 6 - Week 1: Leadership',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Team leadership', 'Project management'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Stakeholder communication', 'Business translation'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Data strategy', 'Roadmap planning'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Innovation management', 'R&D'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Mentorship', 'Knowledge sharing'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Industry networking', 'Conferences'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Career advancement', 'Rest'] }
                    ]
                }
            ],
            totalTime: '510 hours'
        },
        '1-year': {
            title: '1-Year Data Science Mastery Program',
            motivationalTip: 'The future belongs to those who understand data. Your one-year journey will not only master the technical skills but also develop the wisdom to apply them ethically and effectively. Become the data scientist who changes the world!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Programming Excellence',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Python advanced', 'Performance optimization'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['R programming', 'Statistical computing'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Scala for big data', 'Functional programming'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['C++ for performance', 'Numerical computing'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Julia language', 'High-performance computing'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Code review practices', 'Best practices'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Language selection', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 4 - Week 1: Advanced ML',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Bayesian ML', 'Probabilistic programming'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Causal inference', 'Counterfactuals'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Multi-armed bandits', 'Online learning'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Federated learning', 'Privacy-preserving ML'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Meta-learning', 'Few-shot learning'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Automated ML', 'Neural architecture search'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Research frontiers', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 7 - Week 1: AI Leadership',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['AI strategy', 'Business alignment'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Data governance', 'Ethics frameworks'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Innovation labs', 'R&D management'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Cross-functional leadership', 'Change management'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Thought leadership', 'Industry influence'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Academic collaboration', 'Research partnerships'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Future vision', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 10 - Week 1: Executive Data Science',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Board-level communication', 'Strategic decisions'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Investment in AI', 'ROI analysis'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Regulatory compliance', 'Data privacy laws'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Global data strategy', 'International markets'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Talent acquisition', 'Building data teams'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Industry partnerships', 'Ecosystem building'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Legacy building', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 12 - Week 1: Wisdom & Impact',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Philanthropic AI', 'Social impact'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Sustainable AI', 'Environmental considerations'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['AI for good', 'Global challenges'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Knowledge dissemination', 'Education'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Policy influence', 'AI governance'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Personal fulfillment', 'Life balance'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Reflect on impact', 'Celebrate journey'] }
                    ]
                }
            ],
            totalTime: '1030 hours'
        }
    },
    'product-manager': {
        '3-months': {
            title: '3-Month Comprehensive Product Management Development',
            motivationalTip: 'Great products are built by visionaries who understand users, markets, and execution. Your 3-month journey will transform you from a product enthusiast to a strategic product leader who can drive successful product development and business growth!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Product Strategy Foundations',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Product vision and mission', 'Strategic thinking'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Market analysis', 'Competitive intelligence'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Customer segmentation', 'Persona development'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Product positioning', 'Value proposition'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Roadmap planning', 'Prioritization frameworks'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Business model canvas', 'Revenue models'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategy review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: User Research & Validation',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['User research methods', 'Interview techniques'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Survey design', 'Quantitative research'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Usability testing', 'User feedback analysis'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Journey mapping', 'Pain point identification'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Hypothesis testing', 'Experiment design'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Data-driven insights', 'User behavior analysis'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Research synthesis', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 3: Product Development',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Product requirements', 'PRD writing'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Wireframing basics', 'Prototyping tools'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Agile methodologies', 'Sprint planning'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Backlog management', 'Story writing'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Cross-functional collaboration', 'Team dynamics'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Product metrics', 'Success measurement'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Development review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 4: Analytics & Optimization',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Product analytics', 'KPI tracking'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['A/B testing', 'Statistical significance'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Cohort analysis', 'Retention optimization'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Conversion optimization', 'Funnel analysis'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Data visualization', 'Dashboard creation'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Performance monitoring', 'Iterative improvement'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Analytics review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: Advanced Product Strategy',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Product portfolio management', 'Resource allocation'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Risk management', 'Mitigation strategies'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Go-to-market strategy', 'Launch planning'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Pricing strategy', 'Monetization models'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Competitive strategy', 'Market positioning'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Business development', 'Partnerships'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategy planning', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 2: Leadership & Communication',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Stakeholder management', 'Communication skills'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Team leadership', 'Motivation techniques'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Conflict resolution', 'Decision making'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Presentation skills', 'Executive communication'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Negotiation skills', 'Win-win strategies'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Change management', 'Organizational dynamics'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Leadership development', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 3: Technical Proficiency',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Technical fundamentals', 'System architecture'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['API design', 'Integration planning'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Data modeling', 'Database design'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Security considerations', 'Privacy compliance'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Scalability planning', 'Performance optimization'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['DevOps basics', 'CI/CD understanding'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Technical fluency', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 4: Innovation & Entrepreneurship',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Innovation methodologies', 'Design thinking'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Lean startup principles', 'MVP development'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Product-market fit', 'Validation techniques'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Growth hacking', 'Viral strategies'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Entrepreneurial mindset', 'Risk taking'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Startup ecosystem', 'Networking'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Innovation review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Advanced Analytics',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Predictive analytics', 'Forecasting models'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Machine learning basics', 'AI integration'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Customer lifetime value', 'Segmentation'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Churn prediction', 'Retention strategies'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Recommendation systems', 'Personalization'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Advanced experimentation', 'Multi-armed bandits'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Analytics mastery', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 2: Global Product Management',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['International markets', 'Localization strategy'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Cultural considerations', 'Global UX'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Regulatory compliance', 'GDPR, CCPA'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Global team management', 'Distributed teams'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Currency and pricing', 'International finance'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Cross-border partnerships', 'International business'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Global strategy', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 3: Career Preparation',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Resume optimization', 'PM-focused'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Portfolio development', 'Case studies'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Interview preparation', 'Behavioral questions'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Technical interviews', 'Product sense'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Networking strategies', 'Industry connections'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Personal branding', 'Thought leadership'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Career planning', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 4: Reflection & Future',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Skill assessment', 'Growth areas'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Product philosophy', 'Personal style'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Industry trends', 'Future of product'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Continuous learning', 'Professional development'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Mentorship and teaching', 'Knowledge sharing'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Work-life balance', 'Sustainable habits'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Celebrate achievements', 'Rest'] }
                    ]
                }
            ],
            totalTime: '255 hours'
        },
        '6-months': {
            title: '6-Month Professional Product Management Enhancement',
            motivationalTip: 'Exceptional product managers don\'t just manage products; they shape the future of business. Your 6-month commitment will transform you into a strategic leader who can drive innovation, build successful products, and lead high-performing teams!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Strategic Foundations',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Business strategy', 'Market analysis'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Competitive intelligence', 'SWOT analysis'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Customer discovery', 'Jobs-to-be-done'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Value proposition design', 'Lean canvas'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Product vision', 'OKRs and KPIs'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategy planning', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: Research Excellence',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Advanced user research', 'Ethnographic studies'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Quantitative research', 'Statistical analysis'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Survey methodology', 'Sampling techniques'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Usability testing', 'Remote testing tools'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Data synthesis', 'Insight generation'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Research reporting', 'Executive summaries'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Research culture', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: Product Development Mastery',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Product requirements', 'Advanced PRD writing'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Technical specification', 'API design'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['System architecture', 'Scalability planning'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Quality assurance', 'Testing strategies'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['DevOps integration', 'CI/CD pipelines'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Security and compliance', 'Risk assessment'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Technical leadership', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Analytics & Data Science',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Advanced analytics', 'Predictive modeling'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['Machine learning', 'AI integration'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['Customer analytics', 'Lifetime value'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['Experimentation platforms', 'A/B testing at scale'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['Data visualization', 'Executive dashboards'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['Business intelligence', 'Real-time analytics'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Data-driven culture', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 5 - Week 1: Leadership & Management',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Team management', 'Performance coaching'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Cross-functional leadership', 'Matrix management'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Change management', 'Organizational transformation'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Crisis management', 'Decision making'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Talent development', 'Succession planning'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Executive communication', 'Board presentations'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Leadership excellence', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 6 - Week 1: Innovation & Strategy',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Innovation management', 'R&D strategy'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Disruptive technologies', 'Emerging trends'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Platform strategy', 'Ecosystem building'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['M&A strategy', 'Integration planning'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['IPO preparation', 'Public company strategy'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Industry transformation', 'Future of work'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategic vision', 'Rest'] }
                    ]
                }
            ],
            totalTime: '510 hours'
        },
        '3-months': {
            title: '3-Month Comprehensive Product Management Development',
            motivationalTip: 'Great products are built by visionaries who understand users, markets, and execution. Your 3-month journey will transform you from a product enthusiast to a strategic product leader who can drive successful product development and business growth!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Product Strategy Foundations',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Product vision and mission', 'Strategic thinking'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Market analysis', 'Competitive intelligence'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Customer segmentation', 'Persona development'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Product positioning', 'Value proposition'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Roadmap planning', 'Prioritization frameworks'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Business model canvas', 'Revenue models'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategy review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: User Research & Validation',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['User research methods', 'Interview techniques'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Survey design', 'Quantitative research'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Usability testing', 'User feedback analysis'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Journey mapping', 'Pain point identification'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Hypothesis testing', 'Experiment design'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Data-driven insights', 'User behavior analysis'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Research synthesis', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 3: Product Development',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Product requirements', 'PRD writing'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Wireframing basics', 'Prototyping tools'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Agile methodologies', 'Sprint planning'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Backlog management', 'Story writing'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Cross-functional collaboration', 'Team dynamics'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Product metrics', 'Success measurement'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Development review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 4: Analytics & Optimization',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Product analytics', 'KPI tracking'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['A/B testing', 'Statistical significance'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Cohort analysis', 'Retention optimization'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Conversion optimization', 'Funnel analysis'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Data visualization', 'Dashboard creation'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Performance monitoring', 'Iterative improvement'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Analytics review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: Advanced Product Strategy',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Product portfolio management', 'Resource allocation'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Risk management', 'Mitigation strategies'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Go-to-market strategy', 'Launch planning'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Pricing strategy', 'Monetization models'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Competitive strategy', 'Market positioning'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Business development', 'Partnerships'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategy planning', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 2: Leadership & Communication',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Stakeholder management', 'Communication skills'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Team leadership', 'Motivation techniques'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Conflict resolution', 'Decision making'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Presentation skills', 'Executive communication'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Negotiation skills', 'Win-win strategies'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Change management', 'Organizational dynamics'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Leadership development', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 3: Technical Proficiency',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Technical fundamentals', 'System architecture'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['API design', 'Integration planning'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Data modeling', 'Database design'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Security considerations', 'Privacy compliance'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Scalability planning', 'Performance optimization'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['DevOps basics', 'CI/CD understanding'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Technical fluency', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 4: Innovation & Entrepreneurship',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Innovation methodologies', 'Design thinking'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Lean startup principles', 'MVP development'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Product-market fit', 'Validation techniques'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Growth hacking', 'Viral strategies'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Entrepreneurial mindset', 'Risk taking'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Startup ecosystem', 'Networking'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Innovation review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Advanced Analytics',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Predictive analytics', 'Forecasting models'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Machine learning basics', 'AI integration'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Customer lifetime value', 'Segmentation'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Churn prediction', 'Retention strategies'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Recommendation systems', 'Personalization'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Advanced experimentation', 'Multi-armed bandits'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Analytics mastery', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 2: Global Product Management',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['International markets', 'Localization strategy'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Cultural considerations', 'Global UX'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Regulatory compliance', 'GDPR, CCPA'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Global team management', 'Distributed teams'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Currency and pricing', 'International finance'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Cross-border partnerships', 'International business'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Global strategy', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 3: Career Preparation',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Resume optimization', 'PM-focused'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Portfolio development', 'Case studies'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Interview preparation', 'Behavioral questions'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Technical interviews', 'Product sense'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Networking strategies', 'Industry connections'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Personal branding', 'Thought leadership'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Career planning', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 4: Reflection & Future',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Skill assessment', 'Growth areas'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Product philosophy', 'Personal style'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Industry trends', 'Future of product'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Continuous learning', 'Professional development'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Mentorship and teaching', 'Knowledge sharing'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Work-life balance', 'Sustainable habits'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Celebrate achievements', 'Rest'] }
                    ]
                }
            ],
            totalTime: '255 hours'
        },
        '6-months': {
            title: '6-Month Professional Product Management Enhancement',
            motivationalTip: 'Exceptional product managers don\'t just manage products; they shape the future of business. Your 6-month commitment will transform you into a strategic leader who can drive innovation, build successful products, and lead high-performing teams!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Strategic Foundations',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Business strategy', 'Market analysis'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Competitive intelligence', 'SWOT analysis'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Customer discovery', 'Jobs-to-be-done'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Value proposition design', 'Lean canvas'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Product vision', 'OKRs and KPIs'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategy planning', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: Research Excellence',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Advanced user research', 'Ethnographic studies'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Quantitative research', 'Statistical analysis'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Survey methodology', 'Sampling techniques'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Usability testing', 'Remote testing tools'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Data synthesis', 'Insight generation'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Research reporting', 'Executive summaries'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Research culture', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: Product Development Mastery',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Product requirements', 'Advanced PRD writing'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Technical specification', 'API design'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['System architecture', 'Scalability planning'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Quality assurance', 'Testing strategies'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['DevOps integration', 'CI/CD pipelines'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Security and compliance', 'Risk assessment'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Technical leadership', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Analytics & Data Science',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Advanced analytics', 'Predictive modeling'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['Machine learning', 'AI integration'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['Customer analytics', 'Lifetime value'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['Experimentation platforms', 'A/B testing at scale'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['Data visualization', 'Executive dashboards'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['Business intelligence', 'Real-time analytics'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Data-driven culture', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 5 - Week 1: Leadership & Management',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Team management', 'Performance coaching'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Cross-functional leadership', 'Matrix management'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Change management', 'Organizational transformation'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Crisis management', 'Decision making'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Talent development', 'Succession planning'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Executive communication', 'Board presentations'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Leadership excellence', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 6 - Week 1: Innovation & Strategy',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Innovation management', 'R&D strategy'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Disruptive technologies', 'Emerging trends'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Platform strategy', 'Ecosystem building'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['M&A strategy', 'Integration planning'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['IPO preparation', 'Public company strategy'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Industry transformation', 'Future of work'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategic vision', 'Rest'] }
                    ]
                }
            ],
            totalTime: '510 hours'
        },
        '1-year': {
            title: '1-Year Product Management Mastery Program',
            motivationalTip: 'The greatest product managers are not just managers; they are visionaries who shape industries and change lives. Your one-year journey will transform you into a legendary product leader who can build products that matter, lead organizations that innovate, and create impact that lasts generations!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Philosophical Foundations',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Product philosophy', 'Purpose-driven product'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Human-centered design', 'Empathy at scale'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Systems thinking', 'Complex problem solving'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Design thinking', 'Creative problem solving'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Lean methodology', 'Waste elimination'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Agile philosophy', 'Adaptive planning'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Product wisdom', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 4 - Week 1: Advanced Strategy',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Corporate strategy', 'Business unit strategy'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Platform economics', 'Network effects'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Global expansion', 'International strategy'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Regulatory strategy', 'Policy influence'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Sustainability strategy', 'ESG integration'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Crisis management', 'Resilience planning'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategic mastery', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 7 - Week 1: Executive Leadership',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['C-suite communication', 'Board management'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Executive decision making', 'Strategic trade-offs'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Organizational design', 'Structure optimization'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Culture building', 'Values alignment'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Talent strategy', 'Leadership development'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Investor relations', 'Capital strategy'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Executive presence', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 10 - Week 1: Industry Leadership',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Industry analysis', 'Trend forecasting'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Competitive strategy', 'Blue ocean strategy'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Ecosystem strategy', 'Platform thinking'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Standards development', 'Industry influence'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Thought leadership', 'Content strategy'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Industry partnerships', 'Consortia leadership'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Industry impact', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 12 - Week 1: Legacy & Impact',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Product legacy', 'Long-term impact'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Social entrepreneurship', 'Purpose-driven business'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Philanthropic product', 'Social good'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Education and mentorship', 'Knowledge transfer'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Industry transformation', 'Paradigm shifts'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Personal fulfillment', 'Life balance'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Reflect on legacy', 'Celebrate impact'] }
                    ]
                }
            ],
            totalTime: '1030 hours'
        }
    },
    'product-manager': {
        '1-month': {
            title: '1-Month Intensive Product Management Preparation',
            motivationalTip: 'Products don\'t build themselves; they\'re crafted by visionaries who understand users, markets, and execution. Your intensive month will transform you into a strategic thinker who can turn ideas into successful products. Stay user-focused, data-driven, and relentlessly iterative!',
            weeks: [
                {
                    title: 'Week 1: Product Fundamentals',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Product management basics', 'Role and responsibilities'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['User research methods', 'Customer interviews'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Market analysis', 'Competitive research'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Product strategy', 'Vision and roadmap'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Agile methodologies', 'Scrum basics'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Product metrics', 'KPI definition'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Weekly review', 'Plan next week'] }
                    ]
                },
                {
                    title: 'Week 2: User-Centric Design',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['User personas', 'Journey mapping'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Wireframing basics', 'Prototyping tools'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Usability testing', 'Feedback collection'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Design thinking', 'Problem solving'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Prioritization frameworks', 'MoSCoW, Kano'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Product requirements', 'PRD writing'] },
                        { day: 'Sunday', duration: '1 hour', tasks: ['User empathy', 'Rest'] }
                    ]
                },
                {
                    title: 'Week 3: Data-Driven Decisions',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Analytics fundamentals', 'Data interpretation'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['A/B testing', 'Experiment design'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['Cohort analysis', 'Retention metrics'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['SQL for product', 'Basic queries'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['Business intelligence', 'Dashboard creation'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['Product-market fit', 'Validation methods'] },
                        { day: 'Sunday', duration: '0 hours', tasks: ['Rest day'] }
                    ]
                },
                {
                    title: 'Week 4: Execution & Launch',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Cross-functional collaboration', 'Stakeholder management'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Project management', 'Timeline planning'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Risk management', 'Mitigation strategies'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Go-to-market strategy', 'Launch planning'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Resume optimization', 'PM-focused'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Apply to PM roles', 'LinkedIn networking'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Interview preparation', 'Rest'] }
                    ]
                }
            ],
            totalTime: '95 hours'
        }
    },
    'ui-ux-designer': {
        '1-month': {
            title: '1-Month Intensive UI/UX Design Preparation',
            motivationalTip: 'Design is not just what it looks like and feels like. Design is how it works. Your intensive month will transform you into a user-centered designer who creates experiences that matter. Stay empathetic, iterative, and relentlessly focused on solving real problems!',
            weeks: [
                {
                    title: 'Week 1: Design Fundamentals',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['UI/UX basics', 'Design principles'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Color theory', 'Typography fundamentals'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Layout and composition', 'Grid systems'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['User research methods', 'Observation techniques'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Design tools introduction', 'Figma basics'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Sketching and ideation', 'Visual thinking'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Weekly review', 'Plan next week'] }
                    ]
                },
                {
                    title: 'Week 2: User Research & Analysis',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['User interviews', 'Question design'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Persona creation', 'User segmentation'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Journey mapping', 'Touchpoint analysis'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Usability testing', 'Test planning'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Data analysis', 'Insight synthesis'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Competitive analysis', 'Design audit'] },
                        { day: 'Sunday', duration: '1 hour', tasks: ['Empathy building', 'Rest'] }
                    ]
                },
                {
                    title: 'Week 3: Design & Prototyping',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Wireframing', 'Low-fidelity prototypes'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['Information architecture', 'Site mapping'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['High-fidelity mockups', 'Visual design'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['Interactive prototyping', 'Micro-interactions'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['Design systems', 'Component libraries'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['Responsive design', 'Mobile-first approach'] },
                        { day: 'Sunday', duration: '0 hours', tasks: ['Rest day'] }
                    ]
                },
                {
                    title: 'Week 4: Testing & Iteration',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Usability testing execution', 'Feedback collection'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['A/B testing design', 'Hypothesis creation'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Design iteration', 'Version control'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Accessibility principles', 'Inclusive design'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Portfolio creation', 'Case study writing'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Apply to design roles', 'LinkedIn networking'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Interview preparation', 'Rest'] }
                    ]
                }
            ],
            totalTime: '95 hours'
        },
        '3-months': {
            title: '3-Month Comprehensive UI/UX Design Development',
            motivationalTip: 'Great design is invisible; it just works. Your 3-month journey will develop you from a visual creator to a strategic designer who can create systems that scale and experiences that convert. Embrace the responsibility that comes with design excellence!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Research & Strategy',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Design thinking process', 'Double diamond'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Qualitative research', 'Interview techniques'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Quantitative research', 'Analytics review'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Competitive analysis', 'Design audits'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Stakeholder interviews', 'Business requirements'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Research synthesis', 'Insight generation'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Research mindset', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: Information Architecture',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Content strategy', 'Content inventory'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Card sorting', 'User testing'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Site mapping', 'Navigation design'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['User flows', 'Task analysis'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Wireframing advanced', 'Interaction design'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Prototyping tools', 'InVision, Framer'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['IA principles', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 3: Visual Design Systems',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Design systems', 'Atomic design'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Component libraries', 'Style guides'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Grid systems', 'Layout frameworks'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Responsive design', 'Mobile-first'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Brand integration', 'Visual identity'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Animation principles', 'After Effects'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Visual excellence', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 4: Testing & Iteration',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Usability testing methods', 'Remote testing'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['A/B testing design', 'Conversion optimization'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Heatmaps and analytics', 'User behavior'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Design critique skills', 'Feedback loops'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Iterative design', 'Version control'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Accessibility testing', 'Screen readers'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Testing culture', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: Advanced UX Patterns',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Mobile UX patterns', 'iOS/Android guidelines'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['E-commerce design', 'Conversion funnels'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['SaaS design patterns', 'B2B interfaces'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Dashboard design', 'Data visualization'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Onboarding flows', 'User activation'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Error states', 'Microcopy'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Pattern libraries', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 2: Technical Collaboration',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Design-developer collaboration', 'Handoff processes'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['CSS basics for designers', 'Flexbox, Grid'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Design tokens', 'Implementation'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Version control for design', 'Abstract, Git'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['API design consideration', 'Data structures'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Performance optimization', 'Design impact'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Technical fluency', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 3: Business & Strategy',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Design strategy', 'Business alignment'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Product design thinking', 'Feature prioritization'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['ROI of design', 'Metrics and KPIs'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Design leadership', 'Team management'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Client management', 'Project scoping'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Freelance design', 'Business development'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Business acumen', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 4: Emerging Technologies',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Voice UI design', 'Conversational interfaces'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['AR/VR design', 'Spatial computing'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['AI/ML interfaces', 'Algorithmic design'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['IoT design', 'Connected experiences'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Blockchain UX', 'Trust and transparency'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Cross-platform design', 'Omnichannel'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Future of design', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Leadership & Innovation',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Design leadership', 'Team building'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Innovation methodologies', 'Design sprints'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Service design', 'System thinking'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Design ethics', 'Responsible design'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Design education', 'Mentorship'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Industry trends', 'Thought leadership'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Design innovation', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 2: Career Preparation',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Portfolio development', 'Case study excellence'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Interview preparation', 'Design challenges'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Whiteboard exercises', 'Problem solving'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Networking strategies', 'Design community'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Personal branding', 'Online presence'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Job applications', 'Resume design'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Career planning', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 3: Launch & Sustain',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Final portfolio review', 'Presentation skills'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Certifications', 'Google UX, Interaction Design'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Freelance setup', 'Client acquisition'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Continuous learning', 'Design resources'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Industry conferences', 'Professional development'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Personal projects', 'Design exploration'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Work-life balance', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 4: Reflection & Future',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Skill assessment', 'Growth areas'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Design philosophy', 'Personal style'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Industry contribution', 'Open-source design'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Teaching and mentoring', 'Knowledge sharing'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Design activism', 'Social impact'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Creative exploration', 'Personal projects'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Reflect on impact', 'Celebrate mastery'] }
                    ]
                }
            ],
            totalTime: '255 hours'
        },
        '6-months': {
            title: '6-Month Professional UI/UX Design Enhancement',
            motivationalTip: 'Design is the silent ambassador of your brand. Your 6-month commitment will elevate you from a skilled designer to a design leader who can influence product strategy, mentor teams, and create experiences that define categories. Embrace the responsibility that comes with design excellence!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Design Foundations',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Design theory', 'Historical context'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Psychology of design', 'Cognitive principles'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Research methodologies', 'Mixed methods'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Design strategy', 'Business alignment'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Tool mastery', 'Advanced Figma/Sketch'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Design philosophy', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: User Research Excellence',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Advanced user research', 'Ethnographic methods'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Survey design', 'Statistical analysis'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Remote research', 'Unmoderated testing'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Data synthesis', 'Affinity mapping'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Research reporting', 'Executive summaries'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Continuous research', 'Analytics integration'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Research culture', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: Information Architecture',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Complex IA', 'Enterprise systems'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Content strategy', 'Content modeling'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Search and discovery', 'Findability'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Wayfinding', 'Spatial design'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Globalization', 'International UX'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Scalable design', 'Design at scale'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['IA mastery', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Advanced Visual Design',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Brand systems', 'Visual identity'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['Motion design', 'Advanced animation'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['3D design', 'Spatial interfaces'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['Data visualization', 'Information design'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['Design for emotion', 'Experiential design'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['Experimental interfaces', 'Novel interactions'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Visual innovation', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 5 - Week 1: Design Leadership',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Design team management', 'Leadership skills'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Cross-functional collaboration', 'Product teams'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Design operations', 'Process optimization'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Design culture', 'Organizational change'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Design advocacy', 'Business influence'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Design education', 'Internal training'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Design leadership', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 6 - Week 1: Innovation & Strategy',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Design innovation', 'Future thinking'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Strategic design', 'Business strategy'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Service design', 'Experience strategy'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Design thinking at scale', 'Transformation'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Industry disruption', 'Emerging trends'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Thought leadership', 'Industry influence'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategic design', 'Rest'] }
                    ]
                }
            ],
            totalTime: '510 hours'
        },
        '1-year': {
            title: '1-Year UI/UX Design Mastery Program',
            motivationalTip: 'Design masters don\'t just create beautiful interfaces; they shape how humanity interacts with technology. Your one-year journey will transform you into a design visionary who can lead design organizations, influence product strategy at the highest levels, and create experiences that define generations. The world needs your design wisdom!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Philosophical Foundations',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Design philosophy', 'Human-centered design'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Cognitive science', 'Human factors'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Cultural anthropology', 'User culture'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Design history', 'Evolution of UX'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Ethics in design', 'Responsible innovation'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Design criticism', 'Cultural impact'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Design wisdom', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 4 - Week 1: Advanced Research Methods',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Longitudinal research', 'Long-term studies'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Contextual inquiry', 'Field studies'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Participatory design', 'Co-creation'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Action research', 'Design research'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Mixed methods research', 'Triangulation'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Research ethics', 'Institutional review'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Research mastery', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 7 - Week 1: Design Leadership',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Executive design leadership', 'C-suite influence'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Design organization design', 'Team structure'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Design strategy', 'Business transformation'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Change management', 'Cultural transformation'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Design innovation labs', 'R&D leadership'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Industry partnerships', 'Ecosystem building'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Design leadership', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 10 - Week 1: Global Design Strategy',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Global design systems', 'International standards'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Cultural design', 'Localization strategy'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Inclusive design', 'Universal accessibility'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Sustainable design', 'Environmental impact'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Design policy', 'Regulatory influence'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Design education', 'Academic collaboration'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Global impact', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 12 - Week 1: Design Legacy',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Design theory development', 'New frameworks'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Design education reform', 'Curriculum design'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Industry transformation', 'Design advocacy'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Philanthropic design', 'Social good'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Design history contribution', 'Documentation'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Personal design philosophy', 'Legacy creation'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Reflect on impact', 'Celebrate mastery'] }
                    ]
                }
            ],
            totalTime: '1030 hours'
        }
    },
    'marketing-specialist': {
        '1-month': {
            title: '1-Month Intensive Marketing Specialist Preparation',
            motivationalTip: 'Marketing is no longer about the stuff that you make, but about the stories you tell. Your intensive month will transform you into a strategic storyteller who connects brands with audiences in meaningful ways. Stay authentic, data-driven, and relentlessly customer-focused!',
            weeks: [
                {
                    title: 'Week 1: Marketing Fundamentals',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Marketing basics', '4Ps of marketing'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Digital marketing channels', 'Content strategy'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Brand positioning', 'Target audience analysis'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['SEO fundamentals', 'Keyword research'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Social media marketing', 'Platform strategies'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Analytics basics', 'Google Analytics'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Weekly review', 'Plan next week'] }
                    ]
                },
                {
                    title: 'Week 2: Content & Social Media',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Content marketing strategy', 'Content calendars'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Social media advertising', 'Facebook Ads, Instagram Ads'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Copywriting fundamentals', 'Persuasive messaging'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Email marketing', 'Campaign automation'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Influencer marketing', 'Partnership strategies'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Video content creation', 'YouTube, TikTok'] },
                        { day: 'Sunday', duration: '1 hour', tasks: ['Content review', 'Rest'] }
                    ]
                },
                {
                    title: 'Week 3: Analytics & Optimization',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Google Analytics advanced', 'Conversion tracking'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['SEO optimization', 'Technical SEO'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['PPC advertising', 'Google Ads mastery'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['Marketing automation', 'HubSpot, Mailchimp'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['A/B testing', 'Landing page optimization'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['CRM systems', 'Customer segmentation'] },
                        { day: 'Sunday', duration: '0 hours', tasks: ['Rest day'] }
                    ]
                },
                {
                    title: 'Week 4: Strategy & Launch',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Marketing strategy development', 'Campaign planning'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Brand storytelling', 'Narrative creation'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Crisis communication', 'Brand reputation'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Marketing ROI measurement', 'Attribution models'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Resume optimization', 'Marketing-focused'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Apply to marketing roles', 'LinkedIn networking'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Interview preparation', 'Rest'] }
                    ]
                }
            ],
            totalTime: '95 hours'
        },
        '3-months': {
            title: '3-Month Comprehensive Marketing Specialist Development',
            motivationalTip: 'Marketing is the art of connecting brands with human emotions. Your 3-month journey will transform you from a marketer into a strategic brand builder who can create campaigns that resonate, drive growth, and build lasting customer relationships!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Strategic Marketing Foundations',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Marketing strategy frameworks', 'STP analysis'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Consumer behavior', 'Buying psychology'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Market research methodologies', 'Primary research'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Competitive analysis', 'SWOT, Porter\'s Five Forces'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Brand strategy', 'Brand architecture'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Marketing planning', 'Annual marketing plans'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategy review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: Digital Marketing Mastery',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['SEO strategy', 'Local SEO, International SEO'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['SEM and PPC', 'Advanced bidding strategies'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Social media strategy', 'Platform-specific tactics'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Content marketing', 'Content pillars and clusters'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Email marketing automation', 'Segmentation'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Affiliate marketing', 'Partnership programs'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Digital review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 3: Content & Creative',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Content strategy development', 'Editorial calendars'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Copywriting mastery', 'Brand voice guidelines'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Visual content creation', 'Graphic design basics'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Video marketing', 'Script writing, production'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Podcast marketing', 'Audio content strategy'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['User-generated content', 'Community building'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Content review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 4: Analytics & Measurement',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Advanced Google Analytics', 'Custom reports'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Marketing attribution', 'Multi-touch attribution'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Customer data platforms', 'CDP implementation'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Predictive analytics', 'Marketing forecasting'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Marketing dashboards', 'Real-time reporting'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Privacy and compliance', 'GDPR, CCPA'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Analytics review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: Advanced Campaign Management',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Integrated campaign planning', 'Omnichannel strategies'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Crisis communication', 'Brand reputation management'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Influencer marketing at scale', 'Micro vs macro influencers'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Event marketing', 'Virtual and hybrid events'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Partnership marketing', 'Co-branding strategies'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Guerrilla marketing', 'Viral campaign creation'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Campaign review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 2: B2B Marketing Excellence',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['B2B marketing fundamentals', 'Account-based marketing'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Lead generation', 'Lead nurturing'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Sales enablement', 'Marketing-sales alignment'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Content syndication', 'Thought leadership'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Webinar marketing', 'Virtual event strategy'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['B2B social selling', 'LinkedIn strategies'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['B2B review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 3: E-commerce & Conversion',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['E-commerce marketing', 'Customer journey optimization'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Conversion rate optimization', 'CRO frameworks'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Abandoned cart recovery', 'Remarketing strategies'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Product marketing', 'Launch strategies'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Customer retention', 'Loyalty programs'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Subscription marketing', 'SaaS growth strategies'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['E-commerce review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 4: International Marketing',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Global marketing strategy', 'Cultural adaptation'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['International SEO', 'Hreflang implementation'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Cross-border advertising', 'Platform localization'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Translation and localization', 'Transcreation'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['International PR', 'Global media relations'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Currency and pricing', 'International finance'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Global review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Leadership & Innovation',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Marketing leadership', 'Team management'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Innovation in marketing', 'Emerging technologies'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Marketing operations', 'Process optimization'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Budget management', 'ROI optimization'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Vendor management', 'Agency relationships'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Marketing technology stack', 'MarTech integration'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Leadership review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 2: Advanced Analytics & AI',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['AI in marketing', 'Machine learning applications'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Predictive marketing', 'Customer lifetime value'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Marketing mix modeling', 'Attribution analysis'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Voice search optimization', 'Smart speakers'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Blockchain marketing', 'NFT campaigns'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['AR/VR marketing', 'Immersive experiences'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['AI review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 3: Career Preparation',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Marketing portfolio development', 'Case studies'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Interview preparation', 'Marketing scenarios'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Certifications', 'Google Ads, HubSpot'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Personal branding', 'LinkedIn optimization'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Networking strategies', 'Industry connections'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Freelance marketing', 'Client acquisition'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Career planning', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 4: Reflection & Future',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Marketing philosophy', 'Ethical marketing'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Industry trends', 'Future of marketing'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Sustainability marketing', 'Purpose-driven brands'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Marketing education', 'Teaching and mentoring'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Marketing research', 'Academic contributions'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Creative exploration', 'Personal projects'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Reflect on journey', 'Celebrate mastery'] }
                    ]
                }
            ],
            totalTime: '255 hours'
        },
        '6-months': {
            title: '6-Month Professional Marketing Specialist Enhancement',
            motivationalTip: 'Marketing is the heartbeat of business growth. Your 6-month commitment will transform you from a marketing specialist into a marketing leader who can drive revenue, build brands, and create experiences that customers never forget!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Strategic Marketing Foundations',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Marketing strategy frameworks', 'Business alignment'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Market research advanced', 'Quantitative methods'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Consumer insights', 'Behavioral economics'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Brand equity measurement', 'Brand valuation'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Marketing planning', 'Integrated marketing communications'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategy planning', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 1 - Week 2: Digital Marketing Excellence',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Advanced SEO', 'Enterprise SEO strategies'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Programmatic advertising', 'RTB, DSPs'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Social commerce', 'Shoppable posts, live shopping'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Voice search marketing', 'Smart home integration'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Mobile marketing', 'App store optimization'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Privacy-first marketing', 'Consent management'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Digital excellence', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 2 - Week 1: Content Marketing Mastery',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Content strategy at scale', 'Content operations'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['SEO content optimization', 'Topic clusters'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Video content strategy', 'YouTube SEO'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Podcast marketing', 'Audio branding'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Interactive content', 'Quizzes, calculators'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Content distribution', 'Earned media'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Content mastery', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 3 - Week 1: Performance Marketing',
                    days: [
                        { day: 'Monday', duration: '5 hours', tasks: ['Performance marketing frameworks', 'Customer acquisition cost'] },
                        { day: 'Tuesday', duration: '5 hours', tasks: ['Advanced Google Ads', 'Smart campaigns'] },
                        { day: 'Wednesday', duration: '5 hours', tasks: ['Facebook Ads mastery', 'Custom audiences'] },
                        { day: 'Thursday', duration: '5 hours', tasks: ['Cross-platform attribution', 'Data-driven optimization'] },
                        { day: 'Friday', duration: '5 hours', tasks: ['Marketing automation', 'Lead scoring'] },
                        { day: 'Saturday', duration: '5 hours', tasks: ['Conversion optimization', 'Landing page testing'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Performance review', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 5 - Week 1: Marketing Leadership',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['Marketing team leadership', 'Talent development'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Cross-functional collaboration', 'Stakeholder management'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Marketing operations', 'Process automation'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Budget planning', 'Resource allocation'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Vendor negotiation', 'Contract management'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Marketing technology', 'Stack evaluation'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Leadership excellence', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 6 - Week 1: Innovation & Future',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Marketing innovation', 'Emerging technologies'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['AI-driven marketing', 'Personalization at scale'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Web3 marketing', 'NFT, metaverse'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Sustainability marketing', 'ESG campaigns'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Crisis marketing', 'Brand resilience'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Future of marketing', 'Industry disruption'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Innovation review', 'Rest'] }
                    ]
                }
            ],
            totalTime: '510 hours'
        },
        '1-year': {
            title: '1-Year Marketing Specialist Mastery Program',
            motivationalTip: 'Marketing is the art of human connection in a digital world. Your one-year journey will transform you into a marketing visionary who can build brands that endure, create campaigns that inspire, and drive growth that scales. You will become the marketer who shapes how businesses connect with humanity!',
            weeks: [
                {
                    title: 'Month 1 - Week 1: Philosophical Foundations',
                    days: [
                        { day: 'Monday', duration: '3 hours', tasks: ['Marketing philosophy', 'Purpose-driven marketing'] },
                        { day: 'Tuesday', duration: '3 hours', tasks: ['Human psychology', 'Consumer neuroscience'] },
                        { day: 'Wednesday', duration: '3 hours', tasks: ['Cultural anthropology', 'Brand culture'] },
                        { day: 'Thursday', duration: '3 hours', tasks: ['Marketing ethics', 'Responsible marketing'] },
                        { day: 'Friday', duration: '3 hours', tasks: ['Marketing history', 'Evolution of advertising'] },
                        { day: 'Saturday', duration: '3 hours', tasks: ['Marketing criticism', 'Cultural impact'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Marketing wisdom', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 4 - Week 1: Advanced Strategy',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Corporate marketing strategy', 'Brand portfolio management'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Global marketing strategy', 'International expansion'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Digital transformation', 'Marketing technology'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Marketing innovation', 'Disruptive strategies'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Competitive intelligence', 'War gaming'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Marketing due diligence', 'M&A marketing'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Strategic mastery', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 7 - Week 1: Executive Marketing Leadership',
                    days: [
                        { day: 'Monday', duration: '4.5 hours', tasks: ['CMO-level strategy', 'Board communication'] },
                        { day: 'Tuesday', duration: '4.5 hours', tasks: ['Marketing organization design', 'Team structure'] },
                        { day: 'Wednesday', duration: '4.5 hours', tasks: ['Executive decision making', 'Strategic trade-offs'] },
                        { day: 'Thursday', duration: '4.5 hours', tasks: ['Investor relations', 'Capital markets'] },
                        { day: 'Friday', duration: '4.5 hours', tasks: ['Crisis management', 'Brand reputation'] },
                        { day: 'Saturday', duration: '4.5 hours', tasks: ['Marketing governance', 'Compliance frameworks'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Executive presence', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 10 - Week 1: Marketing Innovation',
                    days: [
                        { day: 'Monday', duration: '4 hours', tasks: ['Marketing R&D', 'Innovation labs'] },
                        { day: 'Tuesday', duration: '4 hours', tasks: ['Emerging technology adoption', 'Marketing tech'] },
                        { day: 'Wednesday', duration: '4 hours', tasks: ['Behavioral economics', 'Nudge marketing'] },
                        { day: 'Thursday', duration: '4 hours', tasks: ['Predictive marketing', 'AI-driven insights'] },
                        { day: 'Friday', duration: '4 hours', tasks: ['Experience design', 'Customer journey innovation'] },
                        { day: 'Saturday', duration: '4 hours', tasks: ['Marketing automation', 'Intelligent systems'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Innovation leadership', 'Rest'] }
                    ]
                },
                {
                    title: 'Month 12 - Week 1: Marketing Legacy',
                    days: [
                        { day: 'Monday', duration: '3.5 hours', tasks: ['Marketing theory development', 'New frameworks'] },
                        { day: 'Tuesday', duration: '3.5 hours', tasks: ['Industry education', 'Curriculum design'] },
                        { day: 'Wednesday', duration: '3.5 hours', tasks: ['Marketing research', 'Academic contributions'] },
                        { day: 'Thursday', duration: '3.5 hours', tasks: ['Philanthropic marketing', 'Social impact'] },
                        { day: 'Friday', duration: '3.5 hours', tasks: ['Marketing history', 'Industry documentation'] },
                        { day: 'Saturday', duration: '3.5 hours', tasks: ['Personal marketing philosophy', 'Legacy creation'] },
                        { day: 'Sunday', duration: '2 hours', tasks: ['Reflect on impact', 'Celebrate mastery'] }
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
function generateTextContent(role, timeframe) {
    const roleSchedules = schedules[role];
    if (!roleSchedules) return '';

    const schedule = roleSchedules[timeframe];
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
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role') || 'software-engineer';

    const textContent = generateTextContent(role, timeframe);
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
