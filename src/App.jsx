import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Links from './components/Links';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { fetchLinks, fetchProfile, fetchProjects, fetchResume } from './supabaseClient';

// Fallback data when Supabase is not connected
const fallbackData = {
  profile: {
    name: 'Muhammad Faiq Fitri',
    title: 'Software Engineer',
    bio: 'Highly competent software engineer with interest in web development and UI/UX design. I love taking on challenging tasks, working collaboratively with diverse teams, and writing clean, readable code. Currently seeking software engineering or IT-related roles.',
    avatar_url: '/images/profile.jepg',
    email: 'faiqramli123@gmail.com',
    phone: '+60 17-737 6965',
    location: 'Kuala Lumpur, Malaysia'
  },
  projects: [
    {
      id: 1,
      title: 'InfluencerHire System',
      description: 'Final Year Project - A platform streamlining influencer recruitment for paid reviews, connecting brands with influencers.',
      image_url: '/images/influencerhire-logo.png',
      tech_stack: ['React.js', 'Supabase', 'Stripe', 'PHPMailer'],
      live_url: 'https://influencerhire.kesug.com/',
      github_url: 'https://github.com',
      featured: true
    },
    {
      id: 2,
      title: 'Tradventure',
      description: 'Discover Malaysia - Adventure travel platform connecting explorers with unique Malaysian experiences.',
      image_url: '/images/tradventure-logo.png',
      tech_stack: ['PHP', 'HTML', 'MySQL', 'JavaScript'],
      live_url: 'https://tradventure.xo.je/',
      github_url: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'Catering Management System',
      description: 'Final Year Project (Diploma) - Website for catering company with reservation management and backend integration.',
      image_url: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600',
      tech_stack: ['PHP', 'MySQL', 'HTML/CSS'],
      live_url: null,
      github_url: 'https://github.com',
      featured: false
    },
    {
      id: 4,
      title: 'MyKHAS System',
      description: 'Government web system enhancement project at ICU JPM. Focused on maintaining, debugging, and improving system features for better performance and usability.',
      image_url: '/images/mykhas-logo.png', 
      tech_stack: ['PHP', 'Laravel', 'MySQL', 'HTML', 'JavaScript'],
      live_url: 'https://mykhas.icu.gov.my/log-masuk',
      github_url: null,
      featured: true
    }
  ],
  resume: [
    {
      id: 1,
      type: 'experience',
      title: 'MySTEP Trainee (IT / Software Support)',
      organization: 'ICU Jabatan Perdana Menteri',
      location: 'Putrajaya',
      start_date: '2026-03',
      end_date: null,
      description: 'Maintained and enhanced web applications including the MyKHAS system. Performed bug fixing and feature improvements using PHP, Laravel, HTML, and JavaScript. Assisted in upgrading system modules, improving user experience, and supporting application and data management tasks. Collaborated with team members to ensure system performance, stability, and reliability.',
      skills: ['PHP', 'Laravel', 'HTML', 'JavaScript', 'MySQL', 'Web Development']
    },
    {
      id: 2,
      type: 'experience',
      title: 'Bachelor Intern',
      organization: 'Beyond2u Sdn. Bhd.',
      location: 'Kuala Lumpur',
      start_date: '2025-10',
      end_date: '2026-02',
      description: 'Managed IT asset deployment and PC leasing for corporate clients (TNB & AmBank). Executed hardware maintenance including SSD/RAM upgrades. Provided on-site technical support and software configuration.',
      skills: ['IT Support', 'Hardware Maintenance', 'Asset Management']
    },
    {
      id: 3,
      type: 'experience',
      title: 'Diploma Intern',
      organization: 'Data Solution Sdn Bhd',
      location: 'Kuala Lumpur',
      start_date: '2023-02',
      end_date: '2023-06',
      description: 'Processed data using HTML and XML for website taglist system integration. Contributed to legislation book project by formatting documents using Adobe InDesign.',
      skills: ['HTML', 'XML', 'Adobe InDesign']
    },
    {
      id: 4,
      type: 'education',
      title: 'Bachelor of IT (Hons.) in Software Engineering',
      organization: 'University Kuala Lumpur MIIT',
      location: 'Kuala Lumpur',
      start_date: '2023-10',
      end_date: null,
      description: "Current CGPA: 3.55 | Dean's List recipient for 3 out of 4 semesters. Developing full-stack web applications and practicing software planning with SRS/STP documents.",
      skills: ['React.js', 'Full-Stack Development', 'Software Engineering']
    },
    {
      id: 5,
      type: 'education',
      title: 'Diploma in Information Technology',
      organization: 'University Kuala Lumpur MIIT',
      location: 'Kuala Lumpur',
      start_date: '2020-07',
      end_date: '2023-07',
      description: "CGPA: 3.47 | Dean's List in Semester 2 and 3. Gained practical knowledge in web development, databases, and object-oriented programming.",
      skills: ['Web Development', 'Database', 'OOP', 'Graphic Design']
    }
  ],
  links: [
    { id: 1, title: 'LinkedIn', url: 'https://www.linkedin.com/in/faiqfitri/', icon: 'linkedin', color: '#0077b5' },
    { id: 2, title: 'GitHub', url: 'https://github.com/faiqfitree02', icon: 'github', color: '#333' },
    { id: 3, title: 'InfluencerHire', url: 'https://influencerhire.kesug.com/', icon: 'globe', color: '#ff6b4a' },
    { id: 4, title: 'Tradventure', url: 'https://tradventure.xo.je/', icon: 'globe', color: '#10b981' }
  ]
};

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [resume, setResume] = useState([]);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Try fetching from Supabase
        const [profileData, projectsData, resumeData, linksData] = await Promise.all([
          fetchProfile(),
          fetchProjects(),
          fetchResume(),
          fetchLinks()
        ]);

        // Check if we got data, otherwise use fallback
        if (profileData) {
          setProfile(profileData);
          setProjects(projectsData || []);
          setResume(resumeData || []);
          setLinks(linksData || []);
        } else {
          // Use fallback data
          setProfile(fallbackData.profile);
          setProjects(fallbackData.projects);
          setResume(fallbackData.resume);
          setLinks(fallbackData.links);
        }
      } catch (error) {
        console.log('Using fallback data:', error);
        setProfile(fallbackData.profile);
        setProjects(fallbackData.projects);
        setResume(fallbackData.resume);
        setLinks(fallbackData.links);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="loading" style={{ minHeight: '100vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
     
      
      <main>
        <Hero profile={profile} />
        <Resume resume={resume} />
        <Projects projects={projects} />
        <Links links={links} />
      </main>
      
      <Footer profile={profile} />
    </motion.div>
  );
}

export default App;
