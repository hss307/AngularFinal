import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiDataComponent } from './api-data/api-data.component';
import { FormComponent } from './form/form.component';
import { SubmittedDetailsComponent } from './submitted-details/submitted-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: 'form', component: FormComponent },
  { path: 'submitted-details', component: SubmittedDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
