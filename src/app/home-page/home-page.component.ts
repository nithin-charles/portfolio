import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  public greetings: string[] = ['hi', 'Vanakam', 'bonjur', 'Hola'];
  public greet: string = 'hi';

  constructor() {
    let i = 0;
    setInterval(() => {
      if (i >= this.greetings.length) {
        i = 0;
      }
      this.greet = this.greetings[i++];
    }, 2000);
  }
}
