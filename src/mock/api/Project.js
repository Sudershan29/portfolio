
export const getProjectList = () => {
    return [
        { 
            id: 1, 
            name: 'E-Commerse Website', 
            description: "As part of a research collaboration with UChicago's Harris School of Public Policy, this project simulates an e-commerce platform for water heaters. It monitors user behavior, particularly focusing on interactions with energy guide information. By integrating with Qualtrics, the website aims to assess the significance of energy guide labels and their influence on consumer purchasing decisions.",
            status: '✔️',
            githubLink: 'https://frontend.appliancestore.online/?respId=Sudu5.0', 
            techStack: ['react-js', 'node-js', 'aws', 'mongodb'] 
        },
        { 
            id: 3, 
            name: 'Jarvis', 
            status: '👨‍💻',
            description: 'This app is designed to enhance productivity by assisting you in scheduling your daily activities such as tasks and meetings. The app integrates seamlessly with your Google Calendar and automatically suggests the optimal schedule for completing your tasks.', 
            githubLink: 'https://github.com/Sudershan29/jarvis', 
            techStack: ['react-js', 'golang', 'aws', 'redis', 'postgres'] 
        },
        { 
            id: 7, 
            name: 'Pintos: Operating System', 
            description: "Worked in a team of two to implement features for the Pintos x86 OS developed by Stanford, gaining experience in kernel development through implementation of file system design, multithreading, virtualization, and file directories.",
            status: '✔️',
            githubLink: '', 
            techStack: ['cpp'] 
        },
        { 
            id: 8, 
            name: 'OptimizePrime: Primitive Compiler', 
            status: '✔️',
            description: 'Constructed a robust compiler using Golang for Golite, a simplified Go language (C89 standards), incorporating features such as pointers, and user-defined structures. Implemented a optimization strategy, including tokenization with the Antlr library, LLVM code generation, conversion to ARM instructions for execution by gcc, and the development of dead-code removal and constant expression evaluation enhancements.', 
            githubLink: 'https://github.com/Sudershan29/BoardingSimulator', 
            techStack: ['cpp'] 
        },
        { 
            id: 2, 
            name: 'Boarding Simulator', 
            status: '✔️',
            description: 'This project is designed to simulate and test various boarding strategies for aircraft. It comprises multiple classes that replicate real-life scenarios encountered during the boarding process.', 
            githubLink: 'https://github.com/Sudershan29/BoardingSimulator', 
            techStack: ['cpp'] 
        },
        { 
            id: 4, 
            name: 'Portfolio Website', 
            status: '👨‍💻',
            description: 'This project is an attempt to generalize a portfolio website, and make it very configuration driven.', 
            githubLink: 'https://github.com/Sudershan29/portfolio', 
            techStack: ['vue-js'] 
        },
        { 
            id: 5, 
            name: 'Wishlist Registry', 
            status: '🤔',
            description: 'A versatile wishlist registry app ideal for Secret Santa and gift-giving among friends. Users can create and maintain multiple public or private lists throughout the year. The app features price tracking for items and suggests optimal buying opportunities, streamlining the gift selection process and making it more convenient for users.',
            githubLink: '',
            techStack: ['react-js', 'node-js'] 
        },
        { 
            id: 6, 
            name: 'When to hangout?', 
            status: '🤔',
            description: "This application streamlines group scheduling by helping users find optimal meeting times. It allows users to create group invitations with detailed itineraries and durations for social gatherings. The app integrates with Google Calendar, sends email notifications, and employs AI to analyze participants' free time, suggesting the most convenient meeting slots for everyone involved.",
            githubLink: 'https://github.com/Sudershan29/portfolio', 
            techStack: ['react-js', 'golang']
        },
    ];
}