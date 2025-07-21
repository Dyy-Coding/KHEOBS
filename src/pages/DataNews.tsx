// components/DataNews.tsx

export const newsArticles = [
  {
    id: 1,
    title: "New Air Quality Monitoring Station Launched in Siem Reap",
    category: "Environment",
    date: "January 18, 2025",
    readTime: "3 min read",
    author: "Environmental Health Team",
    excerpt: "Advanced monitoring equipment will track PM2.5, ozone, and other pollutants to better understand air quality patterns affecting tourist areas and local communities.",
    image: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg",
    featured: true,
    tags: ["Air Quality", "Siem Reap", "Environmental Monitoring"]
  },
  {
    id: 2,
    title: "Traditional Medicine Research Receives International Recognition",
    category: "Health",
    date: "January 15, 2025",
    readTime: "5 min read",
    author: "Dr. Sophea Chan",
    excerpt: "Cambodian researchers' work on traditional herbal remedies published in leading international journal, highlighting the potential of indigenous medicine.",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
    featured: false,
    tags: ["Traditional Medicine", "Research", "International Recognition"]
  },
  {
    id: 3,
    title: "Community Garden Initiative Expands to 50 Villages",
    category: "Community",
    date: "January 12, 2025",
    readTime: "4 min read",
    author: "Kong Sreypov",
    excerpt: "Successful pilot program promoting food security and community health through sustainable gardening practices now reaches thousands of families.",
    image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
    featured: false,
    tags: ["Community Health", "Food Security", "Rural Development"]
  },
  {
    id: 4,
    title: "Mobile Health Clinics Report 40% Increase in Rural Access",
    category: "Health",
    date: "January 10, 2025",
    readTime: "6 min read",
    author: "Mobile Health Team",
    excerpt: "Strategic placement of mobile clinics using GIS data has significantly improved healthcare access in remote areas of Cambodia.",
    image: "https://images.pexels.com/photos/8513189/pexels-photo-8513189.jpeg",
    featured: false,
    tags: ["Mobile Health", "Rural Access", "GIS Technology"]
  },
  {
    id: 5,
    title: "Student Research Competition Winners Announced",
    category: "Education",
    date: "January 8, 2025",
    readTime: "4 min read",
    author: "Academic Affairs",
    excerpt: "Outstanding student projects on environmental health and community wellness receive recognition and funding for expansion.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    featured: false,
    tags: ["Student Research", "Competition", "Awards"]
  }
];

export const events = [
  {
    title: "Cambodia Health Research Conference 2025",
    date: "March 15-17, 2025",
    location: "Phnom Penh",
    type: "Conference",
    description: "Annual gathering of health researchers, policymakers, and community leaders to discuss latest findings and future directions.",
    registrationOpen: true
  },
  {
    title: "GIS Workshop: Spatial Analysis for Health Data",
    date: "February 20, 2025",
    location: "Siem Reap University",
    type: "Workshop",
    description: "Hands-on training workshop for students and researchers on using GIS tools for health data analysis and visualization.",
    registrationOpen: true
  },
  {
    title: "Community Health Fair",
    date: "February 5, 2025",
    location: "Battambang Province",
    type: "Community Event",
    description: "Free health screenings, educational sessions, and traditional medicine demonstrations for rural communities.",
    registrationOpen: false
  }
];

export const categories = ["Health", "Environment", "Community", "Education", "Research"];
