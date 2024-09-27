
export const getProjectList = () => {
    return [
        { 
            id: 1, 
            name: 'E-Commerse Website', 
            description: "As part of a research collaboration with UChicago's Harris School of Public Policy, this project simulates an e-commerce platform for water heaters. It monitors user behavior, particularly focusing on interactions with energy guide information. By integrating with Qualtrics, the website aims to assess the significance of energy guide labels and their influence on consumer purchasing decisions.",
            status: 'Done',
            githubLink: 'https://frontend.appliancestore.online/?respId=Sudu5.0', 
            techStack: ['react-js', 'node-js', 'aws', 'mongodb'] 
        },
        { 
            id: 2, 
            name: 'Boarding Simulator', 
            status: 'Done',
            description: 'This project is designed to simulate and test various boarding strategies for aircraft. It comprises multiple classes that replicate real-life scenarios encountered during the boarding process.', 
            githubLink: 'https://github.com/Sudershan29/BoardingSimulator', 
            techStack: ['cpp'] 
        },
        { 
            id: 3, 
            name: 'Jarvis', 
            status: 'Pending',
            description: 'This app is designed to enhance productivity by assisting you in scheduling your daily activities such as tasks and meetings. The app integrates seamlessly with your Google Calendar and automatically suggests the optimal schedule for completing your tasks.', 
            githubLink: 'https://github.com/Sudershan29/jarvis', 
            techStack: ['react-js', 'golang', 'aws', 'redis', 'postgres'] 
        },
        { 
            id: 4, 
            name: 'Portfolio Website', 
            status: 'Pending',
            description: 'This project is an attempt to generalize a portfolio website, and make it very configuration driven.', 
            githubLink: 'https://github.com/Sudershan29/portfolio', 
            techStack: ['vue-js'] 
        },
    ];
}