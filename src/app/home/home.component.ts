import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  personalInfo = {
    name: 'Harman Sikand',
    profession: 'Java Developer',
    assignment: 'Angular Project'
  };
  

  assignmentDetails = {
    projectName: 'Angular final',
    description: 'This project involves creating a client-side web application using Angular. The application includes features like API data fetching, form handling, and dynamic routing to provide a seamless user experience.',
    technologies: ' Angular for frontend development. Other tools include TypeScript, HTML, CSS, and RESTful APIs.',
    goals: 'Vercel deployment'
  };
  
}
