import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qg-eduplay',
  templateUrl: './qg-eduplay.component.html',
  styleUrls: ['./qg-eduplay.component.scss'],
})
export class QgEduplayComponent implements OnInit {
  questions!: any[];
  currentQuestionIndex!: number;
  userAnswers!: number[];
  showResults!: boolean;
  score!: number;

  constructor() {
    this.questions = [
      {
        question: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'Home Tool Markup Language',
          'Hyperlinks and Text Markup Language',
          'Hyper Tool Markup Language',
        ],
        answer: 0,
      },
      {
        question: 'Which CSS property is used to change the background color?',
        options: ['color', 'background-color', 'bgcolor', 'background'],
        answer: 1,
      },
      {
        question: 'Which company developed JavaScript?',
        options: ['Netscape', 'Microsoft', 'Sun Microsystems', 'Oracle'],
        answer: 0,
      },
      {
        question: 'What is the command to create a new React app?',
        options: [
          'npx create-react-app',
          'npm start react-app',
          'npm install react',
          'npx new-react-app',
        ],
        answer: 0,
      },
      {
        question: 'Which directive is used to create a component in Angular?',
        options: ['@Component', '@Directive', '@Module', '@Injectable'],
        answer: 0,
      },
    ];

    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.showResults = false;
    this.score = 0;
  }

  ngOnInit(): void {}

  selectAnswer(index: number): void {
    this.userAnswers[this.currentQuestionIndex] = index;
  }

  nextQuestion(): void {
    if (this.userAnswers[this.currentQuestionIndex] === undefined) {
      alert('Please select an answer before proceeding.');
      return;
    }
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.calculateScore();
      this.showResults = true;
    }
  }

  calculateScore(): void {
    this.score = this.userAnswers.reduce((score, answer, index) => {
      return score + (answer === this.questions[index].answer ? 1 : 0);
    }, 0);
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.showResults = false;
    this.score = 0;
  }
}
