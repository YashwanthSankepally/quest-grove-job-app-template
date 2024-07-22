import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private isDarkMode: boolean = false;
  darkModeText: string = 'Dark Mode';
  userName: string = '';
  defaultImgUrl =
    'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg';

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
      this.darkModeText = 'Light Mode';
    }

    this.sharedService.currentUsername.subscribe((username: string) => {
      this.userName = username;
    });
  }

  home() {
    this.router.navigate(['home']);
  }

  jobs() {
    this.router.navigate(['jobs']);
  }

  courses() {
    this.router.navigate(['courses']);
  }

  appliedJobs() {
    this.router.navigate(['applied-jobs']);
  }

  editProfile() {
    this.router.navigate(['edit-profile']);
  }

  settings() {
    this.router.navigate(['settings']);
  }

  feedback() {
    this.router.navigate(['feedback']);
  }

  logout() {
    this.router.navigate(['']);
  }

  resume() {
    this.router.navigate(['resume']);
  }

  QgEduplay() {
    this.router.navigate(['qg-eduplay']);
  }

  faqs() {
    this.router.navigate(['faqs']);
  }

  blog() {
    this.router.navigate(['blog']);
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
      this.darkModeText = 'Light Mode';
      localStorage.setItem('darkMode', 'true');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
      this.darkModeText = 'Dark Mode';
      localStorage.setItem('darkMode', 'false');
    }
  }

  searchComponent(event: Event): void {
    event.preventDefault();
    const searchInput = (event.target as HTMLFormElement)
      .querySelector('input')
      ?.value.toLowerCase();

    if (searchInput) {
      switch (searchInput) {
        case 'home':
          this.router.navigate(['/home']);
          break;
        case 'jobs':
          this.router.navigate(['/jobs']);
          break;
        case 'courses':
          this.router.navigate(['/courses']);
          break;
        case 'edit profile':
          this.router.navigate(['/edit-profile']);
          break;
        case 'applied jobs':
          this.router.navigate(['/applied-jobs']);
          break;
        case 'qg eduplay':
          this.router.navigate(['/qg-eduplay']);
          break;
        case 'settings':
          this.router.navigate(['/settings']);
          break;
        case 'faqs':
          this.router.navigate(['/faqs']);
          break;
        case 'contact':
          this.router.navigate(['/contact']);
          break;
        case 'resume':
          this.router.navigate(['/resume']);
          break;
        default:
          alert('Component not found');
      }
    }
  }
}
