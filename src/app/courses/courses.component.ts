import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  coursesArray = [
    {
      courseTitle: 'HTML',
      thumbnail:
        'https://i.ytimg.com/vi/UliFPiijpdI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDyvrmzDm2XRbmhhfLoFCBTIFJOGg',
      info: 'HTML Basics: Learn the fundamental building blocks of web development with our comprehensive HTML course. Perfect for beginners looking to start their journey in web development.',
      playlistUrl:
        'https://youtube.com/playlist?list=PLzdWZT-ZJD08OzQ8MvdnR8dlIbXXYB3CK&si=zmJICX8PbS-bZVnr',
      favorite: false,
    },
    {
      courseTitle: 'CSS',
      thumbnail:
        'https://i.ytimg.com/vi/1gKm9R_5lsE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDEvAI5M1op8EmhsAZkH33szLtLEg',
      info: 'CSS Mastery: Dive deep into the world of CSS with this extensive playlist. Learn how to style your web pages with beautiful layouts, colors, and animations.',
      playlistUrl:
        'https://youtube.com/playlist?list=PLzdWZT-ZJD09lGBkH4LIUwqsCWI7QPEXQ&si=gtfBZDF-lzltnY1w',
      favorite: false,
    },
    {
      courseTitle: 'JavaScript',
      thumbnail:
        'https://i.ytimg.com/vi/R4MMtTLUZp4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA0Vl9vm8mKpTHQ4U4_XajYjdy_TQ',
      info: 'JavaScript Essentials: Unlock the power of JavaScript with our in-depth course. Perfect for those who want to make their web pages interactive and dynamic.',
      playlistUrl:
        'https://youtube.com/playlist?list=PLzdWZT-ZJD08NwOPGEGzy9jg5wwe_Wylj&si=BEvEcSjpWan3aWcR',
      favorite: false,
    },
    {
      courseTitle: 'Web Development Overview: HTML, CSS, JS',
      thumbnail:
        'https://i.ytimg.com/vi/UliFPiijpdI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDyvrmzDm2XRbmhhfLoFCBTIFJOGg',
      info: 'Web Development Overview: Explore the comprehensive details of web development, covering HTML, CSS, and JavaScript. Ideal for those who want to understand the full stack of web technologies.',
      playlistUrl:
        'https://youtube.com/playlist?list=PLzdWZT-ZJD09_3tZhnl7AGCb3U3CTBfoQ&si=VjQAgETUm3FYhRk4',
      favorite: false,
    },
    {
      courseTitle: 'ReactJS',
      thumbnail:
        'https://i.ytimg.com/vi/AegiGEJg7z4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCMU-sHd9WD8P4F74D0c8HkRSIsSQ',
      info: 'ReactJS Fundamentals: Get started with ReactJS, a popular JavaScript library for building user interfaces. This course is perfect for those who want to create dynamic web applications.',
      playlistUrl:
        'https://youtube.com/playlist?list=PLzdWZT-ZJD0-806wl_diOtzcMS8SYTzq3&si=Yi1vUjFoiJOoNR6B',
      favorite: false,
    },
    {
      courseTitle: 'Angular',
      thumbnail:
        'https://i.ytimg.com/vi/WL6pRGm_lNs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBt3AWJCi9bHI5txFtjIUTwTQXfFA',
      info: 'Angular in Action: Learn Angular, a powerful framework for building dynamic web applications. This playlist covers everything you need to know to get started with Angular.',
      playlistUrl:
        'https://youtube.com/playlist?list=PLzdWZT-ZJD08nIY0WPevCXLZWR310EMWX&si=7E6htNvsQmOL4mhn',
      favorite: false,
    },
    {
      courseTitle: 'Python for Beginners',
      thumbnail:
        'https://i.ytimg.com/vi/H1oR6ld4DKo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDfEluK3q4fSWXoYYKUO2LWbmv0aw',
      info: 'Python for Beginners: Learn Python, a versatile and beginner-friendly programming language. This course covers the basics of Python and helps you get started with coding.',
      playlistUrl:
        'https://youtube.com/playlist?list=PLzdWZT-ZJD09EGEiU3YgVBxadMDaTKqUx&si=eH1sMOeE8IKpT8D8',
      favorite: false,
    },
    {
      courseTitle: 'Bootstrap Tutorials',
      thumbnail:
        'https://i.ytimg.com/vi/KIalSwvqLlg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDKtfmbKjCMcPLYOTCKqgMRRCiB6g',
      info: 'Bootstrap Tutorials: Master Bootstrap, the popular front-end framework for building responsive web pages. This course teaches you how to use Bootstrap to create modern and visually appealing websites.',
      playlistUrl:
        'https://youtube.com/playlist?list=PLzdWZT-ZJD0_nZewQICMCr0w3qYQla2Xk&si=IRRsHPkSTten_QD6',
      favorite: false,
    },
  ];

  filteredCourses = [...this.coursesArray];

  constructor() {}

  ngOnInit(): void {}

  toggleFavorite(course: any): void {
    course.favorite = !course.favorite;
  }

  searchCourses(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchQuery = inputElement.value.toLowerCase();

    this.filteredCourses = this.coursesArray.filter((course) => {
      const courseName = course.courseTitle.toLowerCase().includes(searchQuery);

      return courseName;
    });

    if (searchQuery === '') {
      this.filteredCourses = this.coursesArray;
    }
  }

  copy(url: string): void {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        // alert('Link copied to clipboard');
        this.showToast();
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  }

  showToast(): void {
    const toastElement = document.getElementById('liveToast');
    if (toastElement) {
      const toast = new bootstrap.Toast(toastElement, { delay: 10000 });
      toast.show();

      const audio = new Audio('../../assets/music/notification_ding.mp3');
      audio.play();
    }
  }

  shareToWhatsapp(url: string): void {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareToFacebook(url: string): void {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, '_blank');
  }

  shareToTwitter(url: string): void {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}`;
    window.open(twitterUrl, '_blank');
  }

  shareToTelegram(url: string): void {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}`;
    window.open(telegramUrl, '_blank');
  }

  shareToMail(url: string): void {
    const mailtoUrl = `mailto:?subject=Check out this course&body=${encodeURIComponent(
      url
    )}`;
    window.location.href = mailtoUrl;
  }

  shareToLinkedIn(url: string): void {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`;
    window.open(linkedinUrl, '_blank');
  }
}
