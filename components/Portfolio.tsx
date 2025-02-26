/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';
import { Mail, Sun, Moon, Linkedin, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
    const [isDark, setIsDark] = useState(false);
  
    const personalInfo = {
      name: "Aditya Mogli",
      title: "Computer Science Student",
      about: "Computer Science student at Northeastern University with a concentration in Artificial Intelligence. Experienced in full-stack development, machine learning, and data engineering with a passion for self-driving technology.",
      email: "adimogli2@gmail.com",
      phone: "(408)-858-1540",
      location: "San Jose, CA",
      linkedin: "https://linkedin.com/in/aditya-mogli",
      github: "https://github.com/adimogli2"
    };
  
    const education = {
      school: "Northeastern University",
      college: "Khoury College of Computer Sciences",
      degree: "BS in Computer Science",
      graduation: "May 2027",
      concentration: "Artificial Intelligence",
      achievements: [],
      relevantCourses: [
        "Object Oriented Design",
        "Machine Learning and Data Mining 1",
        "Digital Design and Computer Architecture",
        "Projects in Cloud Computing",
        "Cybersecurity",
        "Mathematics of Data Models",
        "Discrete Structures"
      ]
    };

    const experience = [
      {
        company: "Northeastern University - College of Arts, Media, and Design",
        role: "Data Analyst/Engineering Co-op",
        bullets: [
          "Engineering automated data pipelines and interactive dashboards integrating Salesforce, NUWorks, and SharePoint data sources, reducing manual processing time by 40% and enabling data-driven decision making across the co-op team",
          "Developing a natural language interface for Snowflake database access and created comprehensive data collection surveys to measure program effectiveness, establishing critical metrics for curriculum changes and co-op search patterns"
        ]
      }
    ]
  
    const projects = [
      {
        title: "Self-Driving Robot Project",
        role: "Software Developer",
        description: "Reverse engineered a Robotics Controller and implemented self-driving capabilities using Nvidia's Dave-2 learning model.",
        technologies: ["Java", "Raspberry PI", "Machine Learning", "GitHub Actions"],
        achievements: [
          "Ported Java code from Android to Raspberry PI",
          "Trained system to map camera images to steering commands",
          "Built CI/CD pipeline for deployment"
        ]
      },
      {
        title: "OKC Thunder Technical Project",
        role: "Backend Developer",
        description: "Developed a comprehensive backend system for basketball statistics and analysis.",
        technologies: ["PostgreSQL", "Python", "Django", "API Development"],
        achievements: [
          "Architected normalized database schema",
          "Implemented data population scripts",
          "Created PlayerSummary API"
        ]
      },
      {
        title: "EZScore",
        role: "Full Stack Developer",
        description: "AI-powered web application for grading student essays, developed during PawHacks Hackathon.",
        technologies: ["HTML", "CSS", "JavaScript", "Python Flask", "OpenAI API", "AWS"],
        achievements: [
          "Integrated OpenAI API for essay grading",
          "Deployed on AWS EC2 for scalable access"
        ]
      }
    ];
  
    const skills = {
      languages: ["Java", "Python", "HTML", "CSS", "JS", "Kotlin"],
      tools: ["AWS", "GitHub Actions", "Keras", "PyTorch", "OpenCV", "PostgreSQL", "Django"],
      platforms: ["Windows", "Android", "Linux", "FTC"]
    };

    return (
        <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
          {/* Header/Hero Section */}
          <header className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
            <div className="max-w-4xl mx-auto px-4 py-16">
              <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
              <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>{personalInfo.title}</p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mb-8`}>{personalInfo.about}</p>
              
              <div className="flex flex-wrap gap-4">
                <a href={`mailto:${personalInfo.email}`} className={`flex items-center ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  {personalInfo.email}
                </a>
                <a href={personalInfo.linkedin} className={`flex items-center ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a href={personalInfo.github} className={`flex items-center ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <span className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </header>
    
          <main className="max-w-4xl mx-auto px-4 py-12">
            {/* Education Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardHeader>
                  <CardTitle>{education.school}</CardTitle>
                  <CardDescription className={isDark ? 'text-gray-300' : ''}>
                    {education.degree} - {education.graduation}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Concentration: {education.concentration}
                  </p>
                  <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {education.achievements.join(', ')}
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Experience Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              {experience.map((job, index) => (
                <Card key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                  <CardHeader>
                    <CardTitle>{job.company}</CardTitle>
                    <CardDescription className={isDark ? 'text-gray-300' : ''}>
                      {job.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className={`list-disc list-inside ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {job.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="mb-2">{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </section>

            {/* Skills Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDark ? 'bg-blue-900 text-blue-100' : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Tools & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDark ? 'bg-purple-900 text-purple-100' : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Projects</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                  <Card key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className={isDark ? 'text-gray-300' : ''}>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 rounded text-sm ${
                              isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className={`list-disc list-inside ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-t'} mt-16`}>
            <div className="max-w-4xl mx-auto px-4 py-8">
              <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </p>
            </div>
          </footer>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition-colors ${
              isDark ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
      );
    };

    export default Portfolio;