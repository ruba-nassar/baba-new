export type ProjectCategory = "Environment" | "ESIA" | "Management" | "Water";

export type Project = {
  slug: string;
  title: string;
  image: string;        // main image used in list + details
  short?: string;       // optional (for later)
  description: string;  // paragraph shown under the image
  categories: ProjectCategory[];
  client: string;
  country: string;
  language: string;
  timePeriod: string;
};

export const projectCategories: (ProjectCategory | "Show All")[] = [
  "Show All",
  "Environment",
  "ESIA",
  "Management",
  "Water",
];

export const projects: Project[] = [
  {
    slug: "awane-water-needs-jordan",
    title:
      "Water Needs of Jordan Hosting Communities (AWANE), funded by the Government of Canada",
    image: "/images/projects/p1.jpg",
    description:
      "Addressing Water Needs of Jordan Hosting Communities (AWANE), funded by the Government of Canada through Global Affairs Canada (GAC), aims at enhancing the government capacity to meet the increase in demand for water and sanitation services, particularly in host communities. AWANE focuses on the Zarqa and Balqa Governorates in Jordan, promoting better water governance, stronger institutional accountability and improved environmental sustainability while ensuring that the specific needs and capacities of women are addressed.",
    categories: ["ESIA", "Water"],
    client: "OXFAM",
    country: "Jordan",
    language: "Arabic",
    timePeriod: "September 2018 – ongoing",
  },

  // Add more projects here (example):
  {
    slug: "renewable-energy-assessment",
    title: "Renewable Energy Environmental Assessment",
    image: "/images/projects/p2.jpg",
    description:
      "Environmental screening and assessment for renewable energy projects, including baseline data, stakeholder engagement, and mitigation planning aligned with national requirements and international best practice.",
    categories: ["Environment"],
    client: "Private Sector",
    country: "Jordan",
    language: "English",
    timePeriod: "2020 – 2021",
  },
];

export function getProjectBySlug(slug: string) {
  const normalized = decodeURIComponent(slug).toLowerCase().trim();
  return projects.find((p) => p.slug.toLowerCase() === normalized);
}
