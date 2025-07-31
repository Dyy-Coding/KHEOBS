export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: 'Ongoing' | 'Published' | 'Completed';
  year: string;
  location: string;
  team: string[];
  funding: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Climate Change Adaptation in Rural Cambodia",
    description:
      "Developing sustainable solutions for agricultural communities facing climate challenges through innovative farming techniques and water management systems.",
    image:
      "https://e0.pxfuel.com/wallpapers/384/681/desktop-wallpaper-grand-cambodia-khmer-countryside.jpg",
    status: "Ongoing",
    year: "2023-2025",
    location: "Kampong Thom Province",
    team: ["Dr. Sophea Chan", "Dr. Ratha Pich", "Ms. Srey Leak"],
    funding: "World Bank",
    tags: ["Climate", "Agriculture", "Community"],
  },
  {
    id: 2,
    title: "Water Resource Management in Mekong Basin",
    description:
      "Monitoring and preserving water quality in the Mekong River basin through advanced sensor networks and predictive modeling.",
    image:
      "https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "Published",
    year: "2021-2023",
    location: "Mekong River Basin",
    team: ["Dr. Ratha Pich", "Dr. Virak Nhem"],
    funding: "ASEAN Climate Fund",
    tags: ["Water", "Monitoring", "Technology"],
  },
  {
    id: 3,
    title: "Biodiversity Conservation in National Parks",
    description:
      "Protecting endangered species and ecosystems in Cambodia's national parks through innovative conservation strategies.",
    image:
      "https://images.pexels.com/photos/1534609/pexels-photo-1534609.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "Ongoing",
    year: "2022-2024",
    location: "Virachey National Park",
    team: ["Dr. Sophea Chan", "Ms. Srey Leak"],
    funding: "WWF Cambodia",
    tags: ["Biodiversity", "Conservation", "Wildlife"],
  },
  {
    id: 4,
    title: "Urban Heat Island Mitigation",
    description:
      "Studying urban heat effects in Phnom Penh and developing green infrastructure solutions for temperature regulation.",
    image:
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "Completed",
    year: "2020-2022",
    location: "Phnom Penh",
    team: ["Dr. Virak Nhem", "Dr. Sophea Chan"],
    funding: "Ministry of Environment",
    tags: ["Urban", "Climate", "Infrastructure"],
  },
  {
    id: 5,
    title: "Renewable Energy Assessment",
    description:
      "Evaluating solar and wind energy potential across Cambodia for sustainable energy transition planning.",
    image:
      "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "Ongoing",
    year: "2023-2025",
    location: "Nationwide",
    team: ["Dr. Virak Nhem", "Dr. Ratha Pich"],
    funding: "ADB Energy Initiative",
    tags: ["Energy", "Renewable", "Assessment"],
  },
  {
    id: 6,
    title: "Coastal Erosion Monitoring",
    description:
      "Assessing coastal erosion patterns and developing protection strategies for vulnerable coastal communities.",
    image:
      "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "Published",
    year: "2019-2021",
    location: "Koh Kong Province",
    team: ["Dr. Ratha Pich", "Ms. Srey Leak"],
    funding: "GEF Small Grants",
    tags: ["Coastal", "Erosion", "Protection"],
  },
];
