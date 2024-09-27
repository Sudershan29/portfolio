
export const getExperienceList = () => {
    return [
        {
            id: 1,
            company: 'Globus.org',
            position: 'Software Engineer',
            companyLogo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFBSp53PQ5A9w/company-logo_200_200/company-logo_200_200/0/1630597406992/globus_org_logo?e=1733356800&v=beta&t=VCvmXD9V1muK8ZlvcQjxUW3UfpdjTl8pUdJjEbH5nxE',
            bullets: [
                "Developing a scalable data release platform for the US Geological Survey (USGS) in collaboration with a 4-person team, handling terabytes to petabytes of publication and research data.",
                "Employed Django and Globus tools to architect, prototype, and implement solutions significantly enhancing the USGS's existing data release capabilities. Collaborated closely with the USGS team to identify pain points, design intuitive user interfaces, and deliver a platform tailored to their needs.",
                "Contributed to Globus's open-source initiatives, including the Django Globus Portal Framework, to streamline data movement, publication, and search for researchers utilizing Globus technologies",
            ],
            startDate: 'May 2024',
            endDate: 'Present',
            techStack: ["django", "aws"]
        },
        {
            id: 2,
            company: 'Globus.org',
            position: 'Software Engineer Intern',
            bullets: [
                "Implemented a microservice architecture and serverless workflows leveraging Globus tools, including Flows, Search, and Transfer, to ingest, clean, and validate datasets for accelerating research.",
                "Built a robust Python SDK and CLI to assist researchers with data monitoring, custom download workflows, and secure data sharing for running HPC algorithms. ",
            ],
            startDate: 'July 2023',
            endDate: 'Sept 2023',
            companyLogo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFBSp53PQ5A9w/company-logo_200_200/company-logo_200_200/0/1630597406992/globus_org_logo?e=1733356800&v=beta&t=VCvmXD9V1muK8ZlvcQjxUW3UfpdjTl8pUdJjEbH5nxE',
            techStack: ["django"]
        },
        {
            id: 3,
            company: 'Guardianlink',
            position: 'Software Engineer',
            bullets: [
                "Developed the backend leveraging Ruby on Rails for our decentralized NFT Marketplace with over 75k users",
                "Engineered and implemented two microservices: a search engine using Elasticsearch and a blockchain submission service using Sidekiq. This architecture enhanced our API reliability and saved $12k annually.",
                "Collaborated with the Blockchain Research team to redesign smart contracts and migrated the application to Polygon Network (Layer 2 Blockchain), which reduced platform service fees by saving over 90% on blockchain transactions.",
            ],
            startDate: 'June 2021',
            endDate: 'June 2021',
            companyLogo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFoONhfhEhtuA/company-logo_200_200/company-logo_200_200/0/1639409296304/guardianlink_logo?e=1735776000&v=beta&t=ZPmanVyG9NTELBUGsJSCSXQJCrYkELUbQXz3kPW_yII',
            techStack: ["aws", "redis", "rails", "postgres", "node-js", "solidity", "mongodb"]
        },
    ];
}