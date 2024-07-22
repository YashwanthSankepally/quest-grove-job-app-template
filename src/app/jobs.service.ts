import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobsArray = [
    {
      companyName: 'Nexara Technologies',
      role: 'Full Stack Web Developer',
      skills: [
        'HTML ',
        'CSS ',
        'JavaScript ',
        'Node.js ',
        'Express.js ',
        'MongoDB ',
        'React.js ',
      ],
      Salary: '4.5 LPA',
      Experience: 'Freshers, 0-3 Yrs',
      aboutCompany:
        'Nexara Technologies is a leading innovator in the tech industry, committed to delivering cutting-edge solutions that drive the future of digital transformation. Our dynamic team is dedicated to pushing the boundaries of technology to create impactful and sustainable solutions for our clients.',
      aboutJobRole:
        'As a Full Stack Web Developer at Nexara Technologies, you will be responsible for developing and maintaining robust web applications. You will work closely with our team of developers and designers to build high-quality, scalable solutions. This role requires a solid understanding of both front-end and back-end technologies, and a passion for continuous learning and improvement.',
      City: 'Hyderabad',
      Address:
        'Nexara Technologies, 123 Innovation Park, Hitech City, Hyderabad, Telangana, India',
      isApplied: false,
      SalaryInNumbers: 37500,
      displayJobCard: true,
      category: 'Web Development',
      favorite: false,
    },
    {
      companyName: 'Virtuo Dynamics',
      role: 'Software Engineer',
      skills: ['Java ', 'Spring Boot ', 'Microservices ', 'REST APIs ', 'SQL '],
      Salary: '5.2 LPA',
      Experience: '1-4 Yrs',
      aboutCompany:
        'Virtuo Dynamics is at the forefront of developing scalable and efficient software solutions. Our mission is to provide top-tier technology services that enhance business performance.',
      aboutJobRole:
        'As a Software Engineer at Virtuo Dynamics, you will work on building robust backend services and APIs. You will collaborate with cross-functional teams to design, develop, and deploy high-performance software solutions.',
      City: 'Bengaluru',
      Address:
        'Virtuo Dynamics, 456 Tech Park, Electronic City, Bengaluru, Karnataka, India',
      isApplied: false,
      SalaryInNumbers: 43000,
      displayJobCard: true,
      category: 'Software Development',
      favorite: false,
    },
    {
      companyName: 'Celestial Solutions',
      role: 'Data Scientist',
      skills: [
        'Python ',
        'Machine Learning ',
        'Deep Learning ',
        'Data Visualization ',
        'SQL ',
      ],
      Salary: '6.0 LPA',
      Experience: '2-5 Yrs',
      aboutCompany:
        'Celestial Solutions is a data-driven company that leverages advanced analytics and machine learning to solve complex business problems.',
      aboutJobRole:
        'As a Data Scientist at Celestial Solutions, you will be responsible for analyzing large datasets to uncover insights and build predictive models. You will work with various teams to implement data-driven solutions that drive business growth.',
      City: 'Mumbai',
      Address:
        'Celestial Solutions, 789 Infinity Towers, Andheri East, Mumbai, Maharashtra, India',
      isApplied: false,
      SalaryInNumbers: 50000,
      displayJobCard: true,
      category: 'Data Science',
      favorite: false,
    },
    {
      companyName: 'Infinibyte Innovations',
      role: 'DevOps Engineer',
      skills: ['AWS ', 'Docker ', 'Kubernetes ', 'CI/CD ', 'Jenkins '],
      Salary: '7.0 LPA',
      Experience: '3-6 Yrs',
      aboutCompany:
        'Infinibyte Innovations specializes in cloud computing and automation solutions that enhance operational efficiency and scalability.',
      aboutJobRole:
        'As a DevOps Engineer at Infinibyte Innovations, you will automate and streamline operations and processes. You will build and maintain tools for deployment, monitoring, and operations, and troubleshoot and resolve issues in our development, test, and production environments.',
      City: 'Pune',
      Address:
        'Infinibyte Innovations, 234 Cloud Hub, Hinjewadi, Pune, Maharashtra, India',
      isApplied: false,
      SalaryInNumbers: 58000,
      displayJobCard: true,
      category: 'DevOps',
      favorite: false,
    },
    {
      companyName: 'Zenith Systems',
      role: 'Mobile App Developer',
      skills: ['Flutter ', 'Dart ', 'iOS ', 'Android ', 'Firebase '],
      Salary: '5.5 LPA',
      Experience: '1-3 Yrs',
      aboutCompany:
        'Zenith Systems is a leader in mobile app development, creating innovative and user-friendly applications for various platforms.',
      aboutJobRole:
        'As a Mobile App Developer at Zenith Systems, you will be responsible for designing and developing mobile applications. You will work closely with our product and design teams to deliver high-quality mobile solutions.',
      City: 'Chennai',
      Address:
        'Zenith Systems, 321 App Avenue, OMR, Chennai, Tamil Nadu, India',
      isApplied: false,
      SalaryInNumbers: 45800,
      displayJobCard: true,
      category: 'Mobile Development',
      favorite: false,
    },
    {
      companyName: 'QuantumQuest Corp.',
      role: 'AI Engineer',
      skills: [
        'Python ',
        'TensorFlow ',
        'PyTorch ',
        'Natural Language Processing ',
        'Computer Vision ',
      ],
      Salary: '8.0 LPA',
      Experience: '2-4 Yrs',
      aboutCompany:
        'QuantumQuest Corp. is dedicated to advancing artificial intelligence technology to solve real-world problems.',
      aboutJobRole:
        'As an AI Engineer at QuantumQuest Corp., you will develop and implement AI models and algorithms. You will work on projects involving machine learning, deep learning, and computer vision to create intelligent systems.',
      City: 'Delhi',
      Address: 'QuantumQuest Corp., 567 AI Park, Connaught Place, Delhi, India',
      isApplied: false,
      SalaryInNumbers: 66000,
      displayJobCard: true,
      category: 'Artificial Intelligence',
      favorite: false,
    },
    {
      companyName: 'StellarWorks Inc.',
      role: 'Frontend Developer',
      skills: ['HTML ', 'CSS ', 'JavaScript ', 'Angular ', 'TypeScript '],
      Salary: '4.8 LPA',
      Experience: '0-2 Yrs',
      aboutCompany:
        'StellarWorks Inc. is a creative agency focused on delivering exceptional web experiences through innovative design and technology.',
      aboutJobRole:
        'As a Frontend Developer at StellarWorks Inc., you will create responsive and interactive web applications. You will collaborate with designers to implement user-friendly interfaces and improve the overall user experience.',
      City: 'Kolkata',
      Address:
        'StellarWorks Inc., 890 Design Street, Salt Lake, Kolkata, West Bengal, India',
      isApplied: false,
      SalaryInNumbers: 40000,
      displayJobCard: true,
      category: 'Web Development',
      favorite: false,
    },
    {
      companyName: 'NovaCore Enterprises',
      role: 'Backend Developer',
      skills: ['Node.js ', 'Express.js ', 'MongoDB ', 'SQL ', 'REST APIs '],
      Salary: '6.2 LPA',
      Experience: '1-4 Yrs',
      aboutCompany:
        'NovaCore Enterprises is a tech company specializing in backend solutions that power robust and scalable web applications.',
      aboutJobRole:
        'As a Backend Developer at NovaCore Enterprises, you will be responsible for building and maintaining the server-side logic of our applications. You will work with databases, develop APIs, and ensure high performance and responsiveness.',
      City: 'Ahmedabad',
      Address:
        'NovaCore Enterprises, 123 Backend Blvd, SG Highway, Ahmedabad, Gujarat, India',
      isApplied: false,
      SalaryInNumbers: 51000,
      displayJobCard: true,
      category: 'Backend Development',
      favorite: false,
    },
    {
      companyName: 'Eclipse Innovations',
      role: 'UI/UX Designer',
      skills: [
        'Sketch ',
        'Figma ',
        'Adobe XD ',
        'Wireframing ',
        'Prototyping ',
      ],
      Salary: '5.0 LPA',
      Experience: '1-3 Yrs',
      aboutCompany:
        'Eclipse Innovations is a design-centric company focused on creating intuitive and engaging user interfaces and experiences.',
      aboutJobRole:
        'As a UI/UX Designer at Eclipse Innovations, you will design user interfaces and create engaging user experiences for our digital products. You will work closely with developers and product managers to ensure seamless implementation of your designs.',
      City: 'Jaipur',
      Address:
        'Eclipse Innovations, 456 Design Drive, Malviya Nagar, Jaipur, Rajasthan, India',
      isApplied: false,
      SalaryInNumbers: 41000,
      displayJobCard: true,
      category: 'Design',
      favorite: false,
    },
    {
      companyName: 'Aether Solutions',
      role: 'Network Engineer',
      skills: [
        'Cisco ',
        'Routing ',
        'Switching ',
        'Network Security ',
        'Firewall ',
      ],
      Salary: '5.5 LPA',
      Experience: '2-5 Yrs',
      aboutCompany:
        'Aether Solutions provides comprehensive networking solutions to ensure seamless and secure connectivity for businesses.',
      aboutJobRole:
        'As a Network Engineer at Aether Solutions, you will design, implement, and manage network infrastructure. You will ensure network security and performance, and troubleshoot any network-related issues.',
      City: 'Hyderabad',
      Address:
        'Aether Solutions, 789 Network Plaza, Banjara Hills, Hyderabad, Telangana, India',
      isApplied: false,
      SalaryInNumbers: 45800,
      displayJobCard: true,
      category: 'Networking',
      favorite: false,
    },
    {
      companyName: 'TitanTech Industries',
      role: 'Cybersecurity Analyst',
      skills: [
        'Penetration Testing ',
        'Vulnerability Assessment ',
        'SIEM ',
        'Incident Response ',
        'Network Security ',
      ],
      Salary: '6.5 LPA',
      Experience: '2-5 Yrs',
      aboutCompany:
        'TitanTech Industries is a leader in cybersecurity solutions, providing advanced security measures to protect against digital threats.',
      aboutJobRole:
        'As a Cybersecurity Analyst at TitanTech Industries, you will be responsible for identifying and mitigating security risks. You will conduct penetration testing, vulnerability assessments, and manage security incidents.',
      City: 'Bengaluru',
      Address:
        'TitanTech Industries, 123 Cyber Hub, Whitefield, Bengaluru, Karnataka, India',
      isApplied: false,
      SalaryInNumbers: 54200,
      displayJobCard: true,
      category: 'Cybersecurity',
      favorite: false,
    },
    {
      companyName: 'Aurora Tech Labs',
      role: 'Cloud Solutions Architect',
      skills: [
        'AWS ',
        'Azure ',
        'Google Cloud ',
        'Cloud Infrastructure ',
        'DevOps ',
      ],
      Salary: '9.0 LPA',
      Experience: '4-7 Yrs',
      aboutCompany:
        'Aurora Tech Labs specializes in cloud computing solutions, offering expertise in cloud architecture and infrastructure.',
      aboutJobRole:
        'As a Cloud Solutions Architect at Aurora Tech Labs, you will design and implement cloud-based solutions. You will work with clients to understand their needs and develop scalable cloud architectures.',
      City: 'Pune',
      Address:
        'Aurora Tech Labs, 234 Cloud Park, Baner, Pune, Maharashtra, India',
      isApplied: false,
      SalaryInNumbers: 75000,
      displayJobCard: true,
      category: 'Cloud Computing',
      favorite: false,
    },
    {
      companyName: 'Nexus Innovations',
      role: 'Business Analyst',
      skills: [
        'Business Analysis ',
        'Requirements Gathering ',
        'Data Analysis ',
        'Project Management ',
        'SQL ',
      ],
      Salary: '5.8 LPA',
      Experience: '2-4 Yrs',
      aboutCompany:
        'Nexus Innovations is a consulting firm that helps businesses optimize their operations through data-driven insights and strategic planning.',
      aboutJobRole:
        'As a Business Analyst at Nexus Innovations, you will analyze business processes, gather requirements, and provide data-driven recommendations. You will work with cross-functional teams to implement solutions that improve efficiency and effectiveness.',
      City: 'Mumbai',
      Address:
        'Nexus Innovations, 789 Business Plaza, Lower Parel, Mumbai, Maharashtra, India',
      isApplied: false,
      SalaryInNumbers: 48300,
      displayJobCard: true,
      category: 'Business Analysis',
      favorite: false,
    },
    {
      companyName: 'Omega Systems',
      role: 'Database Administrator',
      skills: [
        'SQL ',
        'Oracle ',
        'MySQL ',
        'Database Management ',
        'Backup and Recovery ',
      ],
      Salary: '7.2 LPA',
      Experience: '3-5 Yrs',
      aboutCompany:
        'Omega Systems provides comprehensive IT solutions, including database management, to ensure data integrity and availability.',
      aboutJobRole:
        'As a Database Administrator at Omega Systems, you will manage and maintain database systems. You will ensure data security, perform backups, and optimize database performance.',
      City: 'Delhi',
      Address: 'Omega Systems, 123 Data Street, Nehru Place, Delhi, India',
      isApplied: false,
      SalaryInNumbers: 60000,
      displayJobCard: true,
      category: 'Database Administration',
      favorite: false,
    },
    {
      companyName: 'Sigma Technologies',
      role: 'QA Engineer',
      skills: [
        'Manual Testing ',
        'Automation Testing ',
        'Selenium ',
        'Test Cases ',
        'Bug Tracking ',
      ],
      Salary: '4.8 LPA',
      Experience: '1-3 Yrs',
      aboutCompany:
        'Sigma Technologies is dedicated to delivering high-quality software solutions, ensuring rigorous testing and quality assurance practices.',
      aboutJobRole:
        'As a QA Engineer at Sigma Technologies, you will perform manual and automated testing to ensure software quality. You will write test cases, identify bugs, and work with developers to resolve issues.',
      City: 'Chennai',
      Address:
        'Sigma Technologies, 321 Quality Street, T. Nagar, Chennai, Tamil Nadu, India',
      isApplied: false,
      SalaryInNumbers: 40000,
      displayJobCard: true,
      category: 'Quality Assurance',
      favorite: false,
    },
    {
      companyName: 'Nebula Networks',
      role: 'System Administrator',
      skills: [
        'Linux ',
        'Windows Server ',
        'Network Management ',
        'Virtualization ',
        'Scripting ',
      ],
      Salary: '6.0 LPA',
      Experience: '2-5 Yrs',
      aboutCompany:
        'Nebula Networks specializes in IT infrastructure management, providing reliable and secure system administration services.',
      aboutJobRole:
        'As a System Administrator at Nebula Networks, you will manage and maintain IT systems and networks. You will ensure system availability, security, and performance, and handle troubleshooting and support tasks.',
      City: 'Hyderabad',
      Address:
        'Nebula Networks, 789 IT Park, Gachibowli, Hyderabad, Telangana, India',
      isApplied: false,
      SalaryInNumbers: 50000,
      displayJobCard: true,
      category: 'System Administration',
      favorite: false,
    },
    {
      companyName: 'Helios Innovations',
      role: 'Product Manager',
      skills: [
        'Product Management ',
        'Agile ',
        'Market Research ',
        'Roadmap Planning ',
        'Stakeholder Management ',
      ],
      Salary: '8.5 LPA',
      Experience: '3-6 Yrs',
      aboutCompany:
        'Helios Innovations drives innovation through strategic product development and management, delivering products that meet market needs.',
      aboutJobRole:
        'As a Product Manager at Helios Innovations, you will define product vision, conduct market research, and manage the product lifecycle. You will collaborate with cross-functional teams to deliver products that align with business goals.',
      City: 'Pune',
      Address:
        'Helios Innovations, 234 Product Avenue, Kalyani Nagar, Pune, Maharashtra, India',
      isApplied: false,
      SalaryInNumbers: 70800,
      displayJobCard: true,
      category: 'Product Management',
      favorite: false,
    },
    {
      companyName: 'Galaxy Solutions',
      role: 'IT Support Specialist',
      skills: [
        'Technical Support ',
        'Troubleshooting ',
        'Customer Service ',
        'Windows ',
        'MacOS ',
      ],
      Salary: '4.0 LPA',
      Experience: '0-2 Yrs',
      aboutCompany:
        'Galaxy Solutions provides comprehensive IT support services to ensure seamless technology operations for businesses.',
      aboutJobRole:
        'As an IT Support Specialist at Galaxy Solutions, you will provide technical support and troubleshoot issues for clients. You will assist with hardware and software problems and ensure customer satisfaction.',
      City: 'Kolkata',
      Address:
        'Galaxy Solutions, 890 Support Lane, Park Street, Kolkata, West Bengal, India',
      isApplied: false,
      SalaryInNumbers: 33300,
      displayJobCard: true,
      category: 'IT Support',
      favorite: false,
    },
    {
      companyName: 'Pinnacle AI',
      role: 'Machine Learning Engineer',
      skills: [
        'Python ',
        'Machine Learning ',
        'TensorFlow ',
        'Data Analysis ',
        'Algorithms ',
      ],
      Salary: '7.5 LPA',
      Experience: '3-5 Yrs',
      aboutCompany:
        'Pinnacle AI specializes in developing advanced machine learning algorithms to drive business intelligence and automation.',
      aboutJobRole:
        'As a Machine Learning Engineer at Pinnacle AI, you will develop and deploy machine learning models. You will work on data analysis, feature engineering, and model optimization to deliver AI-driven solutions.',
      City: 'Bengaluru',
      Address:
        'Pinnacle AI, 123 ML Hub, Koramangala, Bengaluru, Karnataka, India',
      isApplied: false,
      SalaryInNumbers: 62500,
      displayJobCard: true,
      category: 'Machine Learning',
      favorite: false,
    },
    {
      companyName: 'Solstice Digital',
      role: 'Digital Marketing Specialist',
      skills: [
        'SEO ',
        'SEM ',
        'Content Marketing ',
        'Social Media ',
        'Analytics ',
      ],
      Salary: '5.0 LPA',
      Experience: '1-3 Yrs',
      aboutCompany:
        'Solstice Digital is a digital marketing agency that helps businesses enhance their online presence and reach their target audience.',
      aboutJobRole:
        'As a Digital Marketing Specialist at Solstice Digital, you will create and implement digital marketing strategies. You will manage SEO, SEM, and social media campaigns, and analyze performance metrics to optimize marketing efforts.',
      City: 'Delhi',
      Address: 'Solstice Digital, 567 Marketing Lane, Hauz Khas, Delhi, India',
      isApplied: false,
      SalaryInNumbers: 41600,
      displayJobCard: true,
      category: 'Digital Marketing',
      favorite: false,
    },
  ];

  constructor() {}
}
