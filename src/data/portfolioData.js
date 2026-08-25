import capstoneScreenshot from '../assets/capstone.png'
import aiFestCertificate from '../assets/AIFEST.png'
import nc2Certificate from '../assets/nc2.jpg'
import publicPresentationCertificate from '../assets/publicpresentation.jpg'
import startupPhotoOne from '../assets/startup1.jpg'
import startupPhotoTwo from '../assets/startup2.jpg'

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 'BUILD', label: 'Web & software development' },
  { value: 'DESIGN', label: 'Modern, responsive interfaces' },
  { value: 'LEARN', label: 'Always exploring new technologies' },
  { value: 'AI+', label: 'AI-assisted development' },
]

export const aboutContent = {
  intro:
    'I am a full stack developer focused on building scalable digital products that combine strong backend logic, elegant frontend experiences, and practical business value. I use modern technology, creative problem-solving, and the power of AI to transform ideas into products that are built to perform, evolve, and make an impact.',
  story:
    'My journey in technology has led me to build systems such as an <strong>Attendance Management System with Geofencing</strong>, combining mobile development and location-based technology to create a smarter attendance experience. I\'m also one of the developers behind <strong>lgumatanao-dmts.com</strong>, contributing to the development of a digital platform designed to support modern workflows and public service.',
  highlights: [
    'Full stack product development',
    'AI-assisted development workflows',
    'Location-based & geofencing technology',
    'Scalable system architecture',
  ],
}

export const skills = [
  { name: 'React', level: 'Advanced', color: 'from-cyan-500 to-sky-500' },
  { name: 'Node.js', level: 'Advanced', color: 'from-emerald-500 to-teal-500' },
  { name: 'Express', level: 'Advanced', color: 'from-violet-500 to-indigo-500' },
  { name: 'MongoDB', level: 'Intermediate', color: 'from-green-500 to-emerald-500' },
  { name: 'SQL', level: 'Intermediate', color: 'from-blue-500 to-cyan-500' },
  { name: 'Tailwind CSS', level: 'Advanced', color: 'from-teal-500 to-cyan-500' },
  { name: 'JavaScript', level: 'Advanced', color: 'from-yellow-500 to-amber-500' },
  { name: 'Git & GitHub', level: 'Advanced', color: 'from-violet-500 to-fuchsia-500' },
  { name: 'AI Tools', level: 'Advanced', color: 'from-pink-500 to-red-500' },
]

export const skillsByCategory = [
  {
    category: 'FRONT END',
    skills: [
      { name: 'HTML', icon: 'SiHtml5', color: 'text-orange-500', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30' },
      { name: 'CSS', icon: 'SiCss3', color: 'text-blue-500', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
      { name: 'JAVASCRIPT', icon: 'SiJavascript', color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-400/30' },
      { name: 'BOOTSTRAP', icon: 'SiBootstrap', color: 'text-purple-600', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-600/30' },
      { name: 'REACT (VITE)', icon: 'SiReact', color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-400/30' },
    ],
  },
  {
    category: 'FULL STACK',
    skills: [
      { name: 'NEXT.JS', icon: 'SiNextdotjs', color: 'text-slate-900', bgColor: 'bg-slate-500/10', borderColor: 'border-slate-400/30' },
      { name: 'LARAVEL', icon: 'SiLaravel', color: 'text-red-500', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' },
      { name: 'FLUTTERFLOW', icon: 'SiFlutter', color: 'text-blue-500', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
    ],
  },
  {
    category: 'BACK END',
    skills: [
      { name: 'PHP', icon: 'SiPhp', color: 'text-indigo-600', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-600/30' },
      { name: 'SUPABASE', icon: 'SiSupabase', color: 'text-emerald-500', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
      { name: 'MYSQL', icon: 'SiMysql', color: 'text-orange-600', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-600/30' },
      { name: 'POSTGRESQL', icon: 'SiPostgresql', color: 'text-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-600/30' },
    ],
  },
  {
    category: 'LANGUAGE',
    skills: [
      { name: 'DART', icon: 'SiDart', color: 'text-cyan-500', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30' },
      { name: 'JAVA', icon: 'SiJava', color: 'text-orange-600', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-600/30' },
      { name: 'C#', icon: 'SiCsharp', color: 'text-green-600', bgColor: 'bg-green-500/10', borderColor: 'border-green-600/30' },
    ],
  },
  {
    category: 'TOOLS',
    skills: [
      { name: 'GIT', icon: 'SiGit', color: 'text-orange-600', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-600/30' },
      { name: 'GITHUB', icon: 'SiGithub', color: 'text-slate-700', bgColor: 'bg-slate-500/10', borderColor: 'border-slate-700/30' },
      { name: 'VSCODE', icon: 'SiVisualstudiocode', color: 'text-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-600/30' },
      { name: 'GEMINI', icon: 'SiGoogle', color: 'text-red-500', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' },
      { name: 'GPT', icon: 'SiOpenai', color: 'text-emerald-600', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-600/30' },
      { name: 'CLAUDE', icon: 'SiAnthropic', color: 'text-purple-600', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-600/30' },
    ],
  },
  {
    category: 'OTHER SKILLS',
    skills: [
      { name: 'PROJECT MAINTENANCE', icon: 'SiGitpod', color: 'text-cyan-500', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30' },
      { name: 'FILE MANAGEMENT', icon: 'SiFiles', color: 'text-amber-500', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30' },
      { name: 'MS OFFICE', icon: 'SiMicrosoft', color: 'text-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-600/30' },
    ],
  },
]

export const projects = [
  {
    title: 'JDL Security Systems',
    category: 'CCTV • FDAS • Network Infrastructure',
    description:
      'A modern security solutions showcase inspired by JDL Davao, featuring surveillance systems, fire safety coverage, and end-to-end commercial protection.',
    overview:
      'Built to feel premium and trustworthy, this concept highlights the company’s core service lines and demonstrates how a security brand can communicate technical confidence and local reliability.',
    tech: ['CCTV', 'FDAS', 'Networking', 'Access Control'],
    year: '2025',
    featured: false,
    accent: 'from-cyan-500 via-sky-500 to-blue-700',
    link: 'https://jdldavao.com/',
    metrics: [
      { label: 'Monitoring', value: '24/7' },
      { label: 'Systems', value: 'FDAS + CCTV' },
      { label: 'Support', value: 'On-site' },
    ],
    highlights: [
      'High-definition surveillance coverage',
      'Fire alarm and life safety systems',
      'Commercial and residential protection',
      'Structured cabling and network support',
    ],
  },
  {
    title: 'LGU Matanao DMTS',
    category: 'Real Time • Tracking System • Management',
    description:
      'A comprehensive digital media tracking system for LGU Matanao, streamlining document management, workflow automation, and organizational efficiency for local government operations.',
    overview:
      'Built to support modern municipal workflows, this system provides a robust platform for tracking, managing, and organizing digital assets with seamless integration across departments and stakeholders.',
    tech: ['React', 'Laravel', 'MySQL', 'Workflow Automation', 'Dashboard'],
    year: '2026',
    featured: true,
    screenshot: '/src/assets/dmts.png',
    accent: 'from-emerald-500 via-teal-500 to-cyan-600',
    link: 'https://lgumatanao-dmts.com/',
    metrics: [
      { label: 'Efficiency', value: 'Enhanced' },
      { label: 'Workflow', value: 'Automated' },
      { label: 'Modules', value: 'Multi-dept' },
    ],
    highlights: [
      'Digital media management and organization',
      'Real-time workflow tracking and automation',
      'Multi-department collaboration tools',
      'Intuitive dashboard and reporting features',
    ],
  },
  {
    title: 'Geo Attendance System',
    category: 'Attendance • Geofencing • Monitoring',
    description:
      'A smart attendance and monitoring system built for efficient workforce tracking, location-based verification, and centralized reporting.',
    overview:
      'This capstone project demonstrates a practical attendance platform designed to improve accountability, automate time tracking, and provide a more reliable monitoring workflow for organizations and field operations.',
    tech: ['FlutterFlow', 'Geofencing', 'Attendance', 'Reporting', 'Mobile'],
    year: '2025',
    featured: false,
    screenshot: capstoneScreenshot,
    accent: 'from-rose-500 via-red-500 to-orange-500',
    link: 'https://geo-attendance-system.flutterflow.app/',
    metrics: [
      { label: 'Tracking', value: 'Location-based' },
      { label: 'Access', value: 'Secure' },
      { label: 'Reports', value: 'Real-time' },
    ],
    highlights: [
      'Geofencing-enabled attendance validation',
      'Mobile-first monitoring experience',
      'Streamlined employee tracking and reporting',
      'Built for practical operational use',
    ],
  },

]

export const certifications = [
  {
    name: '2026 AI Technical Conference Participation',
    provider: '2026 AI Fest',
    year: '2026',
    description:
      'Certificate of participation in the 2026 AI Technical Conference, held during AI Fest in Iloilo City under the theme “Building an AI-Ready Future, Together.”',
    image: aiFestCertificate,
    tags: ['AI conference', 'AI Fest 2026', 'Technology participation'],
  },
  {
    name: 'National Certificate II: Computer Systems Servicing',
    provider: 'Technical Education and Skills Development Authority (TESDA)',
    year: '2026',
    description:
      'A nationally recognized technical qualification covering computer system installation, network setup, server configuration, maintenance, repair, and workplace safety.',
    image: nc2Certificate,
    tags: ['Computer systems', 'Networking', 'Technical support'],
  },
  {
    name: '1st Place: Startup Pitch Competition',
    provider: 'DICT Region XI ICT Industry Development Bureau',
    year: '2024',
    description:
      'Recognized with first place for presenting a startup concept at a regional ICT industry pitching competition, demonstrating product thinking, communication, and entrepreneurial initiative.',
    images: [startupPhotoOne, startupPhotoTwo],
    tags: ['1st place', 'Startup pitch', 'Innovation'],
  },
  {
    name: 'Capstone Project Public Presentation',
    provider: 'Davao del Sur State College',
    year: '2025',
    description:
      'Certificate of participation for presenting a capstone project under the theme “Forging Innovations for Industry 4.0” at the Institute of Computing, Engineering and Technology.',
    image: publicPresentationCertificate,
    tags: ['Capstone project', 'Industry 4.0', 'Public presentation'],
  },
]

export const experience = [
  {
    role: 'Encoder and Billing Clerk',
    company: 'Davao del Sur Provincial Hospital (DSPH)',
    period: '2026',
    description:
      'Processed daily hospital documents, encoded records and billing information in the system, and helped maintain accurate, organized administrative data.',
  },
  {
    role: 'IT Staff',
    company: 'JDL Davao',
    period: '2025',
    description:
      'Organized day-to-day work through digital systems and improved the company website to support its marketing strategy and online presence.',
  },
  {
    role: 'BSAIS Program Head Assistant (On-the-Job Training)',
    company: 'Davao del Sur State College',
    period: 'December 2024 - April 2025',
    description:
      'Designed promotional materials such as brochures, T-shirt layouts, and calling cards; assisted with clerical tasks, document organization, academic records, meeting preparation, and ISO-related documentation.',
  },
]

export const contactLinks = [
  { label: 'Email', value: 'geovarkierklatonio@gmail.com', href: 'mailto:geovarkierklatonio@gmail.com' },
  { label: 'GitHub', value: 'github.com/geovarkierklatonio-ai', href: 'https://github.com/geovarkierklatonio-ai' },
  { label: 'Facebook', value: 'facebook.com/Geo-Exe', href: 'https://www.facebook.com/people/Geo-Exe/pfbid0it162gzYzbLWLmNN6XaFt3frKGPtkaYC5EV1Zc9TZBsCYVaHXNw8Q2Ms3yZeNKDQl/' },
  { label: 'Instagram', value: 'instagram.com/geo_jsx', href: 'https://www.instagram.com/geo_jsx' },
]
