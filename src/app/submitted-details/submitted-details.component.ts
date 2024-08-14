import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-submitted-details',
  templateUrl: './submitted-details.component.html',
  styleUrls: ['./submitted-details.component.css']
})
export class SubmittedDetailsComponent implements OnInit {
  data: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Check if state is available and assign data
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['data']) {
      this.data = navigation.extras.state['data'];
    } else {
      this.data = {}; 
    }
  }
}
