export const aboutMe = {
    data: "Hey, I'm Harshith P Athreya, a CSE enthusiast fueled by the thrill of creating, learning, and tackling tech challenges head-on. I'm all about diving into new technologies, finding innovative solutions, and constantly pushing the boundaries of what's possible. Let's build something awesome together!"
}
export const experience = {
    data: [
        { title: 'Team Member', company: 'BigO Coding Club RNSIT', techStack: 'C++ DSA', startDate: 'sept 2021', endDate: 'May 2024', description: 'Framed questions , conducted coding contests and teaching sessions' },
        { title: 'Research And Development Intern', company: 'Nokia Networks', techStack: 'Python, Kubernetes', startDate: 'Nov 2023', endDate: 'Jan 2024', description: 'Worked with Cloud and Network Services team. Worked on Kubernets. Automation of alarms from one pod to another pod.' },
        { title: 'Software Engineering Intern', company: 'Cimpress India', techStack: 'Node, Express, Typescript, React, Redux, JEST', startDate: 'Feb 2024', endDate: 'Aug 2024', description: 'SWE Intern' },
        { title: 'Software Engineer', company: 'Cimpress India', techStack: 'Node, Express, Typescript, React, Redux, JEST, DynamoDb, AWS', startDate: 'Aug 2024', endDate: 'present', description: 'Software Development Engineer 1' },
    ]
}
export const skills = {
    languages: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
    technologies: ['Node.js', 'Express.js', 'React.js', 'Git', 'GitHub', 'GitLab', 'Firebase', 'MongoDB', 'Linux', 'Jest'],
    databases: ['MySQL', 'MongoDB'],
    developerTools: ['VS Code', 'Postman', 'MongoDB Compass', 'Android Studio']
}
export const projects = {
    data: [
        {
            title: "FlyEase",
            duration: "Aug 2023",
            techStack: "Node, Express, RabbitMQ, MySQL, Sequelize",
            description:
                "Developed an Airline Reservation Backend using Node.js and Express.js Framework following Microservices architecture.",
            keyFeatures:
                "Microservices, CRON Job, RabbitMQ, Idempotent API, Rate-Limiter, Reverse Proxy, API Gateway, Publisher-Subscriber Model",
            githubLink: "https://github.com/athreya-harshith/Airline-Reservation-API-GATEWAY"
        },
        {
            title: "IdVerifier",
            duration: "Jun 2023",
            techStack: "Java, Firebase, Android Studio ",
            description:
                "Developed an Android application in Java to authenticate and verify hostel residents, utilizing QR code-based identification through the ZXing library. The app integrates Firebase for authentication, real-time database management, and storage, enabling features like exit pass requests, complaint raising, and notifications from wardens. This solution streamlines resident management and enhances communication within the hostel.",
            keyFeatures:
                "QR Code-based Identification, Firebase Integration, Exit Pass & Complaint System ",
            githubLink: "https://github.com/athreya-harshith/idVerifier"
        },
        {
            title: "Cp-Helper",
            duration: "May 2023",
            techStack: "Node.js, Telegraf npm",
            description:
                "Telegram bot built using Node.js and the Telegraf package, which fetches Codeforces profile details through the Codeforces API. The bot allows users to access code snippets of standard DSA algorithms via interaction.",
            keyFeatures:
                "Telegram Bot, Node.js, Telegraf, Codeforces API",
            githubLink: "https://github.com/athreya-harshith/cpHelperTelegramBot"
        },
    ]
}
export const usefullResources = {
    data: [
        {
            title: "React Concepts",
            link: "https://github.com/athreya-harshith/React-Concepts",
            description:
                "A collection of fundamental React concepts and notes.",
        },
        {
            title: "MongoDB Reference",
            link: "https://github.com/athreya-harshith/MongoDB-Reference",
            description:
                "Everything you need to know about MongoDB as a beginner.",
        },
        {
            title: "ChakraUi Form",
            link: "https://github.com/athreya-harshith/Form-Chakra-Ui",
            description:
                "Ready to use SignUp form template with validations.",
        },
        {
            title: "Redux ToolKit Basics",
            link: "https://github.com/athreya-harshith/redux-toolkit-basics",
            description:
                "Basic handson with Redux toolkit.",
        },
        {
            title: "Express Typescript Backend Template + Prisma ORM",
            link: "https://github.com/athreya-harshith/express-typescript-backend-template",
            description:
                "Repository contains Template for developing backend applications using Node.js with Express.js Framework.",
        },
        {
            title: "ExpressJs Backend Template ",
            link: "https://github.com/athreya-harshith/Node_Template",
            description:
                "This contains a ready template code for building backend applications using express+typescript and with Prisma ORM.",
        },
        {
            title: "Lexical Scoping JavaScript",
            link: "https://github.com/athreya-harshith/javascript-reference/tree/master/lexical_scoping",
            description:
                "One stop reference for learning how lexical scope resolution happens in JavaScript.",
        },
        {
            title: "Coercion JavaScript",
            link: "https://github.com/athreya-harshith/javascript-reference/tree/master/coercion",
            description:
                "One stop reference for learning about coercion in JavaScript.",
        },
        {
            title: "Callbacks and Promises",
            link: "https://github.com/athreya-harshith/javascript-reference/tree/master/callbacks_and_promises",
            description:
                "In detail examples for callbacks and promises in js.",
        },
        {
            title: "Async and Await",
            link: "https://github.com/athreya-harshith/javascript-reference/tree/master/async_await",
            description:
                "In detail examples for Async and Await in js.",
        },
        {
            title: "OOP concepts in JavaScript",
            link: "https://github.com/athreya-harshith/js-oop-conecpts",
            description:
                "Examples OOP concepts, this keyword, prototypal inheritance in JavaScript",
        },
        {
            title: "FlyEase API Gateway",
            link: "https://github.com/athreya-harshith/Airline-Reservation-API-GATEWAY",
            description:
                "API Gateway for FlyEase Service.",
        },
        {
            title: "FlyEase Flights Service",
            link: "https://github.com/athreya-harshith/Airline-Reservation",
            description:
                "Tells the available flights for travelling. Enabling search for flights from Source to Destination.",
        },
        {
            title: "FlyEase Booking Service",
            link: "https://github.com/athreya-harshith/Airline-Reservation-Booking",
            description:
                "Helpful for booking seats, which handles the concurrent booking using row-level lock. Publisher for Notification Service.",
        },
        {
            title: "FlyEase Notification Service",
            link: "https://github.com/athreya-harshith/Airline-Reservation-Notification",
            description:
                "Service sends notifications through mail to users. Subscribes to Booking service",
        },
        {
            title: "Mobile Application Development ( VTU Lab )",
            link: "https://github.com/athreya-harshith/MAD-VTU",
            description:
                "All the Mobile Application Development Laboratory programs.",
        },
        {
            title: "Computer Graphics and Visualisation ( VTU Lab )",
            link: "https://github.com/athreya-harshith/CGV_VTU",
            description:
                "All the Computer Graphics and Visualisation Laboratory programs.",
        },
    ]
}