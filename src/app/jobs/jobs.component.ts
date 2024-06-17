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
  salaryValue:number = 25000;
  selectedCategories: string[] = [];
  showAllJobs: boolean = false;
  searchQuery: string = '';

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
      category: 'Web Development'
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
      category: 'Software Development'
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
      category: 'Data Science'
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
      category: 'DevOps'
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
      category: 'Mobile Development'
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
      category: 'Artificial Intelligence'
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
      category: 'Web Development'
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
      category: 'Backend Development'
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
      category: 'Design'
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
      category: 'Networking'
    },
  ];

  filteredJobsArray = [...this.jobsArray];
  

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
  }

  apply(job: any) {
    job.isApplied = true;
  }

  onSalaryChange(event: any) {
    this.salaryValue = event.target.value;
    this.filterJobs();
  }

  toggleCategory(category: string) {
    const index = this.selectedCategories.indexOf(category);
    if (index === -1) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories.splice(index, 1);
    }
    this.showAllJobs = false;
    this.filterJobs();
  }

  toggleAllJobs(event: any) {
    this.showAllJobs = event.target.checked;
    if (this.showAllJobs) {
      this.selectedCategories = [];
    }
    this.filterJobs();
  }

  filterJobs() {
    if (this.showAllJobs) {
      this.jobsArray.forEach(job => job.displayJobCard = true);
    } else {
      this.jobsArray.forEach((job) => {
        const salaryPass = job.SalaryInNumbers <= this.salaryValue;
        const categoryPass =
          this.selectedCategories.length === 0 ||
          this.selectedCategories.includes(job.category);
        job.displayJobCard = salaryPass && categoryPass;
      });
    }
  }

  searchJobs(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchQuery = inputElement.value.toLowerCase();

    this.filteredJobsArray = this.jobsArray.filter((job) => {
      const roleMatch = job.role.toLowerCase().includes(searchQuery);
      const skillsMatch = job.skills.some((skill: string) =>
        skill.toLowerCase().includes(searchQuery)
      );
      const namesMatch = job.companyName.toLowerCase().includes(searchQuery);
      const cityMatch = job.City.toLowerCase().includes(searchQuery);

      return roleMatch || skillsMatch || cityMatch || namesMatch ;
    });

    if (searchQuery === '') {
      this.filteredJobsArray = this.jobsArray;
    }
  }
  
}
