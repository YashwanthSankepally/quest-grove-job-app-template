import { Component, Injector, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  displayJobs: boolean = true;

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
        'As a Network Engineer at Aether Solutions, you will design, implement, and manage network infrastructure. You will be responsible for maintaining network security, troubleshooting issues, and optimizing network performance.',
      City: 'Gurgaon',
      Address:
        'Aether Solutions, 789 Network Lane, Cyber City, Gurgaon, Haryana, India',
      isApplied: false,
    },
    {
      companyName: 'Vortex Ventures',
      role: 'Cloud Architect',
      skills: ['AWS ', 'Azure ', 'Google Cloud ', 'Terraform ', 'Ansible '],
      Salary: '9.0 LPA',
      Experience: '4-7 Yrs',
      aboutCompany:
        'Vortex Ventures is a leader in cloud solutions, providing innovative and scalable cloud architecture for businesses of all sizes.',
      aboutJobRole:
        'As a Cloud Architect at Vortex Ventures, you will design and implement cloud infrastructure. You will work with clients to understand their requirements and provide tailored cloud solutions that meet their needs.',
      City: 'Noida',
      Address:
        'Vortex Ventures, 123 Cloud Street, Sector 62, Noida, Uttar Pradesh, India',
      isApplied: false,
    },
    {
      companyName: 'Galactic Innovations',
      role: 'Cybersecurity Analyst',
      skills: [
        'Penetration Testing ',
        'SIEM ',
        'IDS/IPS ',
        'Threat Analysis ',
        'Incident Response ',
      ],
      Salary: '7.5 LPA',
      Experience: '3-6 Yrs',
      aboutCompany:
        'Galactic Innovations specializes in cybersecurity solutions, protecting businesses from digital threats and ensuring data security.',
      aboutJobRole:
        "As a Cybersecurity Analyst at Galactic Innovations, you will monitor and analyze security events, conduct vulnerability assessments, and respond to security incidents. You will work to ensure the protection of our clients' digital assets.",
      City: 'Bengaluru',
      Address:
        'Galactic Innovations, 456 Cyber Tower, Whitefield, Bengaluru, Karnataka, India',
      isApplied: false,
    },
    {
      companyName: 'Lumina Labs',
      role: 'Product Manager',
      skills: [
        'Product Development ',
        'Agile ',
        'Scrum ',
        'Market Research ',
        'User Stories ',
      ],
      Salary: '10.0 LPA',
      Experience: '5-8 Yrs',
      aboutCompany:
        'Lumina Labs is an innovation hub focused on developing groundbreaking products that drive market trends and customer satisfaction.',
      aboutJobRole:
        'As a Product Manager at Lumina Labs, you will oversee the development and launch of new products. You will work with cross-functional teams to define product vision, gather and prioritize requirements, and ensure successful product delivery.',
      City: 'Hyderabad',
      Address:
        'Lumina Labs, 789 Innovation Hub, Gachibowli, Hyderabad, Telangana, India',
      isApplied: false,
    },
    {
      companyName: 'Orion Optics',
      role: 'Systems Engineer',
      skills: [
        'Linux ',
        'Windows Server ',
        'VMware ',
        'Scripting ',
        'System Monitoring ',
      ],
      Salary: '6.0 LPA',
      Experience: '2-5 Yrs',
      aboutCompany:
        'Orion Optics is a tech company specializing in providing advanced systems engineering solutions to optimize IT infrastructure.',
      aboutJobRole:
        'As a Systems Engineer at Orion Optics, you will manage and maintain IT infrastructure. You will be responsible for system performance, troubleshooting, and ensuring system availability and security.',
      City: 'Mumbai',
      Address:
        'Orion Optics, 123 System Avenue, Bandra East, Mumbai, Maharashtra, India',
      isApplied: false,
    },
    {
      companyName: 'FusionSphere Ltd.',
      role: 'Blockchain Developer',
      skills: [
        'Ethereum ',
        'Solidity ',
        'Smart Contracts ',
        'Web3.js ',
        'Cryptography ',
      ],
      Salary: '7.5 LPA',
      Experience: '3-6 Yrs',
      aboutCompany:
        'FusionSphere Ltd. is a pioneering company in blockchain technology, developing secure and innovative blockchain solutions for various industries.',
      aboutJobRole:
        'As a Blockchain Developer at FusionSphere Ltd., you will design and implement blockchain-based applications. You will develop smart contracts, build decentralized applications (DApps), and ensure the security and integrity of blockchain solutions.',
      City: 'Pune',
      Address:
        'FusionSphere Ltd., 456 Blockchain Park, Baner, Pune, Maharashtra, India',
      isApplied: false,
    },
    {
      companyName: 'SpectraNet Solutions',
      role: 'IT Support Specialist',
      skills: [
        'Troubleshooting ',
        'Help Desk ',
        'Windows OS ',
        'Mac OS ',
        'Network Support ',
      ],
      Salary: '3.5 LPA',
      Experience: '0-2 Yrs',
      aboutCompany:
        'SpectraNet Solutions provides comprehensive IT support services, ensuring smooth and efficient technology operations for businesses.',
      aboutJobRole:
        'As an IT Support Specialist at SpectraNet Solutions, you will provide technical support to end-users. You will diagnose and resolve hardware and software issues, assist with network problems, and ensure optimal performance of IT systems.',
      City: 'Delhi',
      Address:
        'SpectraNet Solutions, 789 Support Lane, Nehru Place, Delhi, India',
      isApplied: false,
    },
    {
      companyName: 'Nebula Networks',
      role: 'Network Administrator',
      skills: [
        'Networking ',
        'TCP/IP ',
        'DNS ',
        'DHCP ',
        'Network Monitoring ',
      ],
      Salary: '5.0 LPA',
      Experience: '1-3 Yrs',
      aboutCompany:
        'Nebula Networks is dedicated to providing reliable and secure network solutions for businesses, ensuring uninterrupted connectivity.',
      aboutJobRole:
        'As a Network Administrator at Nebula Networks, you will manage and maintain network infrastructure. You will monitor network performance, troubleshoot issues, and ensure network security and efficiency.',
      City: 'Chennai',
      Address:
        'Nebula Networks, 123 Network Lane, T Nagar, Chennai, Tamil Nadu, India',
      isApplied: false,
    },
    {
      companyName: 'Hyperion Horizons',
      role: 'Business Analyst',
      skills: [
        'Business Analysis ',
        'Requirements Gathering ',
        'Process Improvement ',
        'SQL ',
        'Stakeholder Management ',
      ],
      Salary: '6.5 LPA',
      Experience: '2-4 Yrs',
      aboutCompany:
        'Hyperion Horizons specializes in providing strategic business solutions that drive organizational growth and efficiency.',
      aboutJobRole:
        'As a Business Analyst at Hyperion Horizons, you will analyze business processes, identify areas for improvement, and help implement solutions. You will work closely with stakeholders to gather requirements and ensure successful project delivery.',
      City: 'Gurgaon',
      Address:
        'Hyperion Horizons, 456 Business Park, Sector 44, Gurgaon, Haryana, India',
      isApplied: false,
    },
    {
      companyName: 'Pinnacle Pathways',
      role: 'QA Engineer',
      skills: [
        'Manual Testing ',
        'Automation Testing ',
        'Selenium ',
        'TestNG ',
        'JIRA ',
      ],
      Salary: '4.0 LPA',
      Experience: '1-3 Yrs',
      aboutCompany:
        'Pinnacle Pathways is a quality assurance firm dedicated to delivering top-notch software testing and quality control services.',
      aboutJobRole:
        'As a QA Engineer at Pinnacle Pathways, you will conduct manual and automated testing to ensure the quality and performance of our software products. You will work closely with development teams to identify and resolve defects.',
      City: 'Ahmedabad',
      Address:
        'Pinnacle Pathways, 789 QA Street, Navrangpura, Ahmedabad, Gujarat, India',
      isApplied: false,
    },
    {
      companyName: 'Titanium Tech',
      role: 'Embedded Systems Engineer',
      skills: [
        'C/C++ ',
        'Embedded Systems ',
        'Microcontrollers ',
        'RTOS ',
        'IoT ',
      ],
      Salary: '7.0 LPA',
      Experience: '3-5 Yrs',
      aboutCompany:
        'Titanium Tech is a leader in developing advanced embedded systems and IoT solutions for various industries.',
      aboutJobRole:
        'As an Embedded Systems Engineer at Titanium Tech, you will design and develop embedded software for various applications. You will work with microcontrollers, develop firmware, and integrate with IoT devices.',
      City: 'Hyderabad',
      Address:
        'Titanium Tech, 456 Embedded Avenue, HITEC City, Hyderabad, Telangana, India',
      isApplied: false,
    },
  ];

  constructor(private router: Router, private injector: Injector, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.displayJobs$.subscribe(value => {
      this.displayJobs = value;
    });
  }

  toggleDisplayJobs() {
    const currentValue = this.sharedService.getDisplayJobs();
    this.sharedService.setDisplayJobs(!currentValue);
  }

  more(job: any) {
    this.router.navigate(['/job-detail'], { state: { data: job } });
    // alert('work in Progress!')
  }

  // more(job: any) {
  //   // Serialize the job data to a query string
  //   const queryParams = new URLSearchParams();
  //   Object.keys(job).forEach(key => {
  //     queryParams.set(key, job[key]);
  //   });

  //   // Create the URL with query parameters
  //   const url = `/job-detail?${queryParams.toString()}`;

  //   // Open the new URL in a new tab
  //   window.open(url, '_blank');
  // }

  // more(job: any) {
  //   const newTab = window.open('', '_blank');
  //   if (newTab) {
  //     const content = `
  //       <html>
  //       <head>
  //         <title>${job.companyName}</title>
  //         <link rel="stylesheet" href="../../styles.scss">
  //         <link rel="stylesheet" href="path/to/bootstrap.css">
  //         <link rel="stylesheet" href="path/to/font-awesome.css">
  //         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  //       </head>
  //       </head>
  //       <body>
  //         <app-header></app-header>
  //         <div class="container">
  //           <h1>${job.companyName}</h1>
  //           <p><strong>Role:</strong> ${job.role}</p>
  //           <p><strong>Skills:</strong> ${job.skills.join(', ')}</p>
  //           <p><strong>Salary:</strong> ${job.Salary}</p>
  //           <p><strong>Experience:</strong> ${job.Experience}</p>
  //           <p><strong>About Job Role:</strong> ${job.aboutJobRole}</p>
  //           <p><strong>About Company:</strong> ${job.aboutCompany}</p>
  //           <p><strong>Address:</strong> ${job.Address}</p>
  //           <p><strong>City:</strong> ${job.City}</p>
  //           <button class="btn btn-primary">Apply</button>
  //         </div>
  //         <script src="path/to/angular.js"></script>
  //         <script src="path/to/bootstrap.js"></script>
  //         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  //       </body>
  //       </html>
  //     `;
  //     newTab.document.open();
  //     newTab.document.write(content);
  //     newTab.document.close();
  //   }
  // }

  apply(job: any) {
    job.isApplied = true; // Set the application status to true
  }
}
