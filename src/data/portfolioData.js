export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
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
    featured: true,
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
    title: 'Access Control & Door Security',
    category: 'Smart Entry • Security Doors • Monitoring',
    description:
      'A premium overview of access control systems, smart locks, intercoms, and secure entry installations designed for offices, commercial spaces, and gated communities.',
    overview:
      'This product layout focuses on trust, convenience, and layered protection while enhancing the visual identity of a modern security brand.',
    tech: ['Door Access', 'Intercom', 'Smart Locks', 'Monitoring'],
    year: '2025',
    featured: false,
    accent: 'from-violet-500 via-indigo-500 to-blue-700',
    link: 'https://jdldavao.com/',
    metrics: [
      { label: 'Access', value: 'Multi-user' },
      { label: 'Control', value: 'Remote' },
      { label: 'Setup', value: 'Fast' },
    ],
    highlights: [
      'Secure access management',
      'Visitor and staff monitoring',
      'Entry automation for properties',
      'Reliable intercom integration',
    ],
  },
  {
    title: 'Fire Alarm & Detection',
    category: 'Life Safety • Detection • Compliance',
    description:
      'A sleek fire safety product card showing alarm systems, smoke detection, emergency response planning, and code-compliant installation services.',
    overview:
      'This concept emphasizes safety-first design with a polished layout that communicates urgency, professionalism, and reliability for building owners and operators.',
    tech: ['Smoke Detectors', 'Alarm Panels', 'Emergency Response', 'Maintenance'],
    year: '2025',
    featured: false,
    accent: 'from-rose-500 via-red-500 to-orange-500',
    link: 'https://jdldavao.com/',
    metrics: [
      { label: 'Detection', value: 'Early' },
      { label: 'Response', value: 'Instant' },
      { label: 'Coverage', value: 'Commercial' },
    ],
    highlights: [
      'Smoke and heat detection',
      'Emergency alarm integration',
      'Service and preventive maintenance',
      'Safety-first deployment plans',
    ],
  },
  {
    title: 'PBX & Communication Systems',
    category: 'PABX • Office Communication • Integration',
    description:
      'An executive communication suite concept combining PBX systems, intercom integration, and internal office connectivity for modern businesses.',
    overview:
      'The design uses stronger contrast and layered cards to showcase how business communication systems can feel premium while staying highly functional.',
    tech: ['PBX', 'Intercom', 'VoIP', 'Office Systems'],
    year: '2025',
    featured: false,
    accent: 'from-amber-400 via-orange-500 to-red-600',
    link: 'https://jdldavao.com/',
    metrics: [
      { label: 'Calls', value: 'Clear' },
      { label: 'Setup', value: 'Integrated' },
      { label: 'Scale', value: 'Business' },
    ],
    highlights: [
      'Reliable internal communication',
      'Seamless intercom integration',
      'Business-ready voice systems',
      'Support for growing teams',
    ],
  },
]

export const education = [
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'University of Technology',
    period: '2021 - 2025',
    details: 'Focused on software engineering, web technologies, and data structures.',
  },
  {
    degree: 'Frontend Development Diploma',
    institution: 'Online Academy',
    period: '2023 - 2024',
    details: 'Built practical projects in HTML, CSS, JavaScript, and React.',
  },
]

export const certifications = [
  { name: 'Responsive Web Design', provider: 'FreeCodeCamp', year: '2024' },
  { name: 'JavaScript Algorithms and Data Structures', provider: 'FreeCodeCamp', year: '2024' },
  { name: 'React Fundamentals', provider: 'Coursera', year: '2023' },
]

export const experience = [
  {
    role: 'Frontend Developer Intern',
    company: 'Creative Studio',
    period: '2024 - Present',
    description:
      'Created responsive landing pages, improved component consistency, and collaborated with designers to ship polished interfaces.',
  },
  {
    role: 'Web Design Volunteer',
    company: 'Community Project',
    period: '2023 - 2024',
    description:
      'Designed and maintained simple websites for local initiatives, improving accessibility and user experience.',
  },
]

export const contactLinks = [
  { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  { label: 'GitHub', value: 'github.com/yourname', href: 'https://github.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com' },
  { label: 'Location', value: 'Your City, Country', href: '#' },
]
