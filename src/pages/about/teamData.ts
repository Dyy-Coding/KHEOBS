export type ContactInfo = {
  facebook?: string;
  linkedin?: string;
  email?: string;
  twitter?: string;  // renamed from x to twitter
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  experience: string;
  nationality: string;
  description: string;
  image: string;
  contacts?: ContactInfo;
};

export type TeamData = {
  [group: string]: TeamMember[];
};

const teamData: TeamData = {
  "Research Scientists": [
    {
      name: "Dr. Sophea Kim",
      role: "Lead Climate Analyst",
      bio: "Expert in meteorological modeling and AI-driven predictions.",
      experience: "12 years in climate data analysis",
      nationality: "Cambodian",
      description:
        "Dr. Sophea leads our predictive modeling initiatives focused on extreme weather trends in Cambodia and the Mekong region.",
      image: "https://i.pinimg.com/1200x/98/0f/8e/980f8edaae405546073f9a735058a7df.jpg",
      contacts: {
        facebook: "https://facebook.com/sophea",
        linkedin: "https://linkedin.com/in/sophea",
        email: "sophea@example.com",
        twitter: "https://twitter.com/sophea",
      },
    },
    {
      name: "Dr. Rithy Lim",
      role: "Hydrologist",
      bio: "Specialist in water resource modeling and climate impact.",
      experience: "10 years in hydrological systems",
      nationality: "Cambodian",
      description:
        "Dr. Rithy studies the impact of rainfall patterns on river systems in Southeast Asia.",
      image: "https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg",
      contacts: {
        facebook: "https://facebook.com/rithy",
        linkedin: "https://linkedin.com/in/rithylim",
        email: "rithy@example.com",
        twitter: "https://twitter.com/rithy",
      },
    },
    {
      name: "Dr. Sreyleak Phan",
      role: "Environmental Data Scientist",
      bio: "Focuses on air quality and biodiversity data.",
      experience: "8 years in environmental statistics",
      nationality: "Cambodian",
      description:
        "Sreyleak applies machine learning to assess biodiversity loss in urban zones.",
      image: "https://i.pinimg.com/1200x/84/a7/bb/84a7bb80f846e9f383aeee3525bb53f4.jpg",
      contacts: {
        facebook: "https://facebook.com/sreyleak",
        linkedin: "https://linkedin.com/in/sreyleakphan",
        email: "sreyleak@example.com",
        twitter: "https://twitter.com/sreyleak",
      },
    },
  ],
  "Technical Team": [
    {
      name: "Chan Dara",
      role: "Full Stack Developer",
      bio: "Engineer behind our real-time data dashboard and infrastructure.",
      experience: "7 years in web + GIS integrations",
      nationality: "Cambodian",
      description:
        "Chan builds scalable climate platforms using Vue.js, Node.js, and geospatial APIs.",
      image: "https://i.pinimg.com/736x/91/17/ad/9117adc410326aeb1ae4b72243572724.jpg",
      contacts: {
        facebook: "https://facebook.com/chandara",
        linkedin: "https://linkedin.com/in/chandara",
        email: "dara@example.com",
        twitter: "https://twitter.com/chandara",
      },
    },
    {
      name: "Sokchea Yem",
      role: "DevOps Engineer",
      bio: "Ensures deployment, uptime, and cloud infrastructure.",
      experience: "6 years in cloud infrastructure",
      nationality: "Cambodian",
      description:
        "Sokchea manages CI/CD and container orchestration for all backend services.",
      image: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
      contacts: {
        facebook: "https://facebook.com/sokchea",
        linkedin: "https://linkedin.com/in/sokcheayem",
        email: "sokchea@example.com",
        twitter: "https://twitter.com/sokchea",
      },
    },
    {
      name: "Rina Meas",
      role: "Frontend Developer",
      bio: "Leads UI/UX improvements for research platforms.",
      experience: "5 years in UI engineering",
      nationality: "Cambodian",
      description:
        "Rina designs interfaces that ensure researchers get quick and easy access to visual insights.",
      image: "https://i.pinimg.com/736x/1b/cf/77/1bcf77ee6db7ba8a6d699b993f55ff09.jpg",
      contacts: {
        facebook: "https://facebook.com/rinameas",
        linkedin: "https://linkedin.com/in/rinameas",
        email: "rina@example.com",
        twitter: "https://twitter.com/rinameas",
      },
    },
  ],
  Advisors: [
    {
      name: "Dr. Michael Tan",
      role: "Climate Policy Advisor",
      bio: "Guides policy integration and global outreach.",
      experience: "20 years in environmental diplomacy",
      nationality: "Singaporean",
      description:
        "Michael bridges scientific research with government and policy-making communities.",
      image: "https://i.pinimg.com/736x/6a/29/51/6a29518b7f70f786473a38ced5804b82.jpg",
      contacts: {
        facebook: "https://facebook.com/michael",
        linkedin: "https://linkedin.com/in/michaeltan",
        email: "michael@example.com",
        twitter: "https://twitter.com/michael",
      },
    },
    {
      name: "Dr. Lina Chhouk",
      role: "Senior Data Strategy Consultant",
      bio: "Oversees big data frameworks and strategic planning.",
      experience: "15 years in data governance",
      nationality: "Cambodian-French",
      description:
        "Lina helps align project data standards with international best practices.",
      image: "https://i.pinimg.com/736x/38/e1/12/38e1122db033f699b3ea6fd9eb5f20b6.jpg",
      contacts: {
        facebook: "https://facebook.com/linachhouk",
        linkedin: "https://linkedin.com/in/linachhouk",
        email: "lina@example.com",
        twitter: "https://twitter.com/linachhouk",
      },
    },
    {
      name: "Prof. John Weaver",
      role: "Academic Advisor",
      bio: "Supports academic publishing and collaborative research design.",
      experience: "25 years in environmental science",
      nationality: "American",
      description:
        "Prof. Weaver ensures rigorous academic alignment and cross-institutional research design.",
      image: "https://i.pinimg.com/1200x/d1/ff/21/d1ff21ed00b54e8dd8db0d16105f2602.jpg",
      contacts: {
        facebook: "https://facebook.com/johnweaver",
        linkedin: "https://linkedin.com/in/johnweaver",
        email: "weaver@example.com",
        twitter: "https://twitter.com/johnweaver",
      },
    },
  ],
};

export default teamData;
