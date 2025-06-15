import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './@services/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Landing } from './@pages/landing/landing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,CommonModule , ButtonModule,Landing],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'blog-frontend';
  data: any;

  constructor(
    private api: Api
  ) {
    console.log('App initialized');
  }
  ngOnInit() {
    console.log('App component initialized');
    this.api.getData('users').subscribe({
      next: (data) => {
        this.data = data;
        console.log('Data fetched:', data);
      }
      , error: (error) => {
        console.error('Error fetching data:', error);
      }
      , complete: () => {
        console.log('Data fetching complete');
      }
    }); 

  }
  ngOnDestroy() {
    console.log('App component destroyed');
  }
}
