// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-api-data',
//   standalone: true,
//   imports: [CommonModule, HttpClientModule],
//   templateUrl: './api-data.component.html',
//   styleUrls: ['./api-data.component.css']
// })

// export class ApiDataComponent {
//   data: any[] = []; // Declare the data array to store the response

//   constructor(private http: HttpClient) {
//     this.fetchData();
//   }

//   fetchData() {
//     this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts') // Ensure the response is an array of objects
//       .subscribe(response => {
//         this.data = response.map(post => ({ title: post.title, body: post.body }));
//       });
//   }
// }

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent {
  data: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;

  constructor(private http: HttpClient) {
    this.fetchData();
  }
  // https://api.thedogapi.com/v1/breeds
  fetchData() {
    this.http.get<any[]>('https://api.thedogapi.com/v1/breeds')
      .subscribe(response => {
        this.data = response.map(post => ({ id:post.id, name: post.name, breed_group: post.breed_group,temperament:post.temperament, life_span:post.life_span, origin:post.origin, bred_for:post.bred_for }));
        this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
      });
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
