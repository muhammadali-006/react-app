// All static data for the portfolio
import myPhoto from '../assets/image/ali image.jpeg';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export const projectsData = [
  { id: 1, title: 'Luxury Brand Identity', category: 'Graphic Design', description: 'Complete brand identity for a luxury fashion brand.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800', tags: ['Branding', 'Logo'], duration: '2 weeks', client: 'Fashion Elite' },
  { id: 2, title: 'Corporate Video Edit', category: 'Video Editing', description: 'Professional corporate video editing.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', tags: ['Color Grading'], duration: '1 week', client: 'TechCorp' },
  { id: 3, title: 'World Travel Map', category: 'Map Animation', description: '2D/3D map animation showing travel routes.', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800', tags: ['Map Routes'], duration: '3 days', client: 'Travel Agency' },
  { id: 4, title: 'Social Media Campaign', category: 'Graphic Design', description: 'Complete social media design package.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800', tags: ['Social Media'], duration: '1 week', client: 'Product Launch' },
  { id: 5, title: 'Motion Graphics Reel', category: 'Motion Graphics', description: 'Dynamic motion graphics reel.', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800', tags: ['Animation'], duration: '2 weeks', client: 'Media House' },
  { id: 6, title: 'Character Sketches', category: 'Concept Art', description: 'Pencil-based character sketches.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800', tags: ['Sketch'], duration: '1 week', client: 'Animation Studio' }
];

export const servicesData = [
  { icon: '🎨', title: 'Graphic Design', desc: 'Professional branding, posters, thumbnails, and social media designs.', tags: ['Photoshop', 'Illustrator'] },
  { icon: '✂️', title: 'Video Editing', desc: 'Storytelling cuts, color grading, transitions, sound balance.', tags: ['Premiere Pro', 'After Effects'] },
  { icon: '🗺️', title: 'Map Animation', desc: '2D/3D map routes, zoom effects, location highlights.', tags: ['After Effects'] },
  { icon: '🎬', title: 'Motion Graphics', desc: 'Animated titles, lower-thirds, infographics.', tags: ['After Effects'] },
  { icon: '✏️', title: 'Concept Art', desc: 'Pencil-based sketches for characters and scenes.', tags: ['Pencil Sketch'] },
  { icon: '🎯', title: 'Brand Identity', desc: 'Typography, composition, color harmony.', tags: ['Branding'] }
];

export const softwareSkillsData = [
  { name: 'Adobe Photoshop', level: 95, icon: '📸' },
  { name: 'Adobe Illustrator', level: 92, icon: '🎨' },
  { name: 'Adobe After Effects', level: 90, icon: '🎬' },
  { name: 'Adobe Premiere Pro', level: 88, icon: '✂️' },
  { name: 'Cap Cut', level: 85, icon: '📱' },
  { name: 'Canva', level: 90, icon: '✨' }
];

export const aiKnowledgeBase = {
  name: "Muhammad Ali",
  title: "Senior Graphic Designer / Video Editor & Map Animator",
  tagline: "I don't promote myself, my skills speak for me",
  experience: "5+ years of solid industry experience",
  location: "Street No. 3 Shami Park",
  phone: "+92 304 1125808",
  email: "muhammadalicoding@gmail.com",
  whatsapp: "https://wa.me/923041125808",
  availability: "Full-time, Freelance, Remote, On-site",
  about: "I am a senior graphic designer, video editor, and map animator with 5 years of solid industry experience. I specialize in producing clear, high-quality visual content that supports strong communication and storytelling. I work confidently under pressure and consistently meet demanding deadlines. I also lead a team of four, coordinating tasks and maintaining smooth project flow.",
  services: [
    { name: "Graphic Design", description: "Professional branding, posters, thumbnails, and social media designs" },
    { name: "Video Editing", description: "Storytelling cuts, color grading, transitions, sound balance" },
    { name: "Map Animation", description: "2D/3D map routes, zoom effects, location highlights" },
    { name: "Motion Graphics", description: "Animated titles, lower-thirds, infographics" },
    { name: "Concept Art", description: "Pencil-based sketches for characters and scenes" },
    { name: "Brand Identity", description: "Typography, composition, color harmony" }
  ],
  softwareSkills: [
    "Adobe Photoshop (95%)", "Adobe Illustrator (92%)", "Adobe After Effects (90%)",
    "Adobe Premiere Pro (88%)", "Cap Cut (85%)", "Canva (90%)", "Corel Draw (85%)", "Figma (80%)"
  ],
  stats: {
    yearsExperience: "5+", projectsCompleted: "200+", happyClients: "50+", teamSize: "4"
  },
  pricing: {
    graphicDesign: "$50 - $500", videoEditing: "$100 - $1000", mapAnimation: "$150 - $800",
    motionGraphics: "$100 - $600", conceptArt: "$50 - $300", hourlyRate: "$25 - $50"
  },
  contactInfo: {
    phone: "+92 304 1125808", email: "muhammadalicoding@gmail.com", address: "Street No. 3 Shami Park"
  }
};

export const suggestedQuestions = [
  "What services do you offer?",
  "What software do you use?",
  "How much do you charge?",
  "How can I hire you?",
  "Show me your portfolio"
];

export const statsData = [
  { value: "5+", label: "Years", desc: "Experience" },
  { value: "200+", label: "Projects", desc: "Completed" },
  { value: "50+", label: "Clients", desc: "Happy" }
];

export const aboutInfo = [
  { icon: "Phone", text: "+92 304 1125808", label: "Phone" },
  { icon: "Email", text: "muhammadalicoding@gmail.com", label: "Email" },
  { icon: "Location", text: "Street No. 3 Shami Park", label: "Location" }
];

export const contactInfo = {
  phone: "+92 304 1125808",
  email: "muhammadalicoding@gmail.com",
  address: "Street No. 3 Shami Park"
};

export const myPhotoPath = myPhoto;