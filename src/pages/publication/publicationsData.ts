// publicationsData.ts
export interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  type: string;
  abstract: string;
  doi: string;
  citations: number;
  pdfUrl: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "Climate Change Impacts on Agricultural Productivity in Cambodia",
    authors: ["Sophea Chan", "Ratha Pich", "Srey Leak"],
    journal: "Journal of Climate Change Research",
    year: 2024,
    type: "Journal Article",
    abstract:
      "This study examines the effects of climate change on agricultural productivity in rural Cambodia, analyzing temperature and precipitation trends over the past two decades.",
    doi: "10.1016/j.climatechange.2024.001",
    citations: 15,
    pdfUrl: "#",
  },
  {
    id: 2,
    title: "Water Quality Assessment in the Mekong River Basin",
    authors: ["Ratha Pich", "Virak Nhem"],
    journal: "Environmental Monitoring and Assessment",
    year: 2023,
    type: "Journal Article",
    abstract:
      "A comprehensive assessment of water quality parameters in the Mekong River Basin, utilizing advanced sensor networks and machine learning techniques.",
    doi: "10.1007/s10661-023-11234-5",
    citations: 28,
    pdfUrl: "#",
  },
  {
    id: 3,
    title: "Biodiversity Conservation Strategies for Cambodian National Parks",
    authors: ["Sophea Chan", "Srey Leak"],
    journal: "Conservation Biology",
    year: 2023,
    type: "Journal Article",
    abstract:
      "This paper presents innovative conservation strategies for protecting endangered species and ecosystems in Cambodia's national parks.",
    doi: "10.1111/cobi.14089",
    citations: 42,
    pdfUrl: "#",
  },
  {
    id: 4,
    title: "Urban Heat Island Effects in Phnom Penh: Causes and Mitigation",
    authors: ["Virak Nhem", "Sophea Chan"],
    journal: "Urban Climate",
    year: 2022,
    type: "Journal Article",
    abstract:
      "An analysis of urban heat island effects in Phnom Penh and recommendations for green infrastructure solutions.",
    doi: "10.1016/j.uclim.2022.101234",
    citations: 18,
    pdfUrl: "#",
  },
  {
    id: 5,
    title: "Renewable Energy Potential Assessment for Cambodia",
    authors: ["Virak Nhem", "Ratha Pich"],
    journal: "Renewable Energy",
    year: 2022,
    type: "Journal Article",
    abstract:
      "A comprehensive assessment of solar and wind energy potential across Cambodia for sustainable energy transition planning.",
    doi: "10.1016/j.renene.2022.05.123",
    citations: 35,
    pdfUrl: "#",
  },
  {
    id: 6,
    title: "Climate Adaptation Strategies for Rural Communities",
    authors: ["Srey Leak", "Sophea Chan", "Ratha Pich"],
    journal: "Proceedings of ASEAN Climate Conference",
    year: 2024,
    type: "Conference Paper",
    abstract:
      "This conference paper presents community-based adaptation strategies for climate resilience in rural Cambodia.",
    doi: "10.1109/ACC.2024.9876543",
    citations: 8,
    pdfUrl: "#",
  },
  {
    id: 7,
    title: "Coastal Erosion Patterns and Protection Measures in Cambodia",
    authors: ["Ratha Pich", "Srey Leak"],
    journal: "Coastal Engineering",
    year: 2021,
    type: "Journal Article",
    abstract:
      "Analysis of coastal erosion patterns and development of protection strategies for vulnerable coastal communities.",
    doi: "10.1016/j.coastaleng.2021.103912",
    citations: 22,
    pdfUrl: "#",
  },
  {
    id: 8,
    title: "Environmental Monitoring Systems for Sustainable Development",
    authors: ["Sophea Chan", "Virak Nhem"],
    journal: "Environmental Science & Technology",
    year: 2021,
    type: "Journal Article",
    abstract:
      "Development of integrated environmental monitoring systems for sustainable development in Southeast Asia.",
    doi: "10.1021/acs.est.1c02345",
    citations: 31,
    pdfUrl: "#",
  },
];
