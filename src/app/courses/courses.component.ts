import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  coursesArray = [
    {
      courseTitle:"HTML",
      thumbnail: "https://i.ytimg.com/vi/UliFPiijpdI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDyvrmzDm2XRbmhhfLoFCBTIFJOGg", 
      info: "HTML Basics: Learn the fundamental building blocks of web development with our comprehensive HTML course. Perfect for beginners looking to start their journey in web development.", 
      playlistUrl: "https://youtube.com/playlist?list=PLzdWZT-ZJD08OzQ8MvdnR8dlIbXXYB3CK&si=zmJICX8PbS-bZVnr"
    },
    {
      courseTitle:"CSS",
      thumbnail: "https://i.ytimg.com/vi/1gKm9R_5lsE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDEvAI5M1op8EmhsAZkH33szLtLEg", 
      info: "CSS Mastery: Dive deep into the world of CSS with this extensive playlist. Learn how to style your web pages with beautiful layouts, colors, and animations.", 
      playlistUrl: "https://youtube.com/playlist?list=PLzdWZT-ZJD09lGBkH4LIUwqsCWI7QPEXQ&si=gtfBZDF-lzltnY1w"
    },
    {
      courseTitle:"JavaScript",
      thumbnail: "https://i.ytimg.com/vi/R4MMtTLUZp4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA0Vl9vm8mKpTHQ4U4_XajYjdy_TQ", 
      info: "JavaScript Essentials: Unlock the power of JavaScript with our in-depth course. Perfect for those who want to make their web pages interactive and dynamic.", 
      playlistUrl: "https://youtube.com/playlist?list=PLzdWZT-ZJD08NwOPGEGzy9jg5wwe_Wylj&si=BEvEcSjpWan3aWcR"
    },
    {
      courseTitle:"Web Development Overview: HTML, CSS, JS",
      thumbnail: "https://i.ytimg.com/vi/UliFPiijpdI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDyvrmzDm2XRbmhhfLoFCBTIFJOGg", 
      info: "Web Development Overview: Explore the comprehensive details of web development, covering HTML, CSS, and JavaScript. Ideal for those who want to understand the full stack of web technologies.", 
      playlistUrl: "https://youtube.com/playlist?list=PLzdWZT-ZJD09_3tZhnl7AGCb3U3CTBfoQ&si=VjQAgETUm3FYhRk4"
    },
    {
      courseTitle:"ReactJS",
      thumbnail: "https://i.ytimg.com/vi/AegiGEJg7z4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCMU-sHd9WD8P4F74D0c8HkRSIsSQ", 
      info: "ReactJS Fundamentals: Get started with ReactJS, a popular JavaScript library for building user interfaces. This course is perfect for those who want to create dynamic web applications.", 
      playlistUrl: "https://youtube.com/playlist?list=PLzdWZT-ZJD0-806wl_diOtzcMS8SYTzq3&si=Yi1vUjFoiJOoNR6B"
    },
    {
      courseTitle:"Angular",
      thumbnail: "https://i.ytimg.com/vi/WL6pRGm_lNs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBt3AWJCi9bHI5txFtjIUTwTQXfFA", 
      info: "Angular in Action: Learn Angular, a powerful framework for building dynamic web applications. This playlist covers everything you need to know to get started with Angular.", 
      playlistUrl: "https://youtube.com/playlist?list=PLzdWZT-ZJD08nIY0WPevCXLZWR310EMWX&si=7E6htNvsQmOL4mhn"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
